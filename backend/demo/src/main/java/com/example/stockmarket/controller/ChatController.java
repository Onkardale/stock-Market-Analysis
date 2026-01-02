package com.example.stockmarket.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin(origins = "http://localhost:5173")
public class ChatController {

    @Value("${openai.api-key:}")
    private String apiKey;

    @PostMapping
    public ResponseEntity<?> chat(@RequestBody Map<String, String> request) {

        // Debug: Print first/last 4 chars of key
        System.out.println("API Key starts with: " + apiKey.substring(0, 7));
        System.out.println("API Key ends with: " + apiKey.substring(apiKey.length() - 4));

        if (apiKey == null || apiKey.isEmpty()) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "OpenAI API key is not configured"));
        }

        String prompt = request.get("prompt");

        if (prompt == null || prompt.isEmpty()) {
            return ResponseEntity.badRequest()
                    .body(Map.of("error", "Prompt is required"));
        }

        try {
            RestTemplate restTemplate = new RestTemplate();
            String url = "https://api.openai.com/v1/chat/completions";

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.setBearerAuth(apiKey.trim()); // Trim whitespace

            Map<String, Object> body = new HashMap<>();
            body.put("model", "gpt-4o-mini");

            List<Map<String, String>> messages = new ArrayList<>();
            messages.add(Map.of("role", "user", "content", prompt));

            body.put("messages", messages);

            HttpEntity<Map<String, Object>> entity = new HttpEntity<>(body, headers);

            ResponseEntity<Map> response = restTemplate.postForEntity(url, entity, Map.class);

            Map choice = (Map) ((List) response.getBody().get("choices")).get(0);
            Map message = (Map) choice.get("message");

            return ResponseEntity.ok(Map.of("response", message.get("content").toString()));

        } catch (Exception e) {
            e.printStackTrace(); // Print full error
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "Failed to get response from OpenAI: " + e.getMessage()));
        }
    }}