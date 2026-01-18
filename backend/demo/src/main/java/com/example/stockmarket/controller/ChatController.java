package com.example.stockmarket.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
public class ChatController {

    @Value("${sambanova.api.key}")
    private String apiKey;

    @Value("${sambanova.api.base-url}")
    private String baseUrl;

    @PostMapping
    public ResponseEntity<?> chat(@RequestBody Map<String, String> request) {

        if (apiKey == null || apiKey.isBlank()) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "SambaNova API key is not configured"));
        }

        String prompt = request.get("prompt");

        if (prompt == null || prompt.isBlank()) {
            return ResponseEntity.badRequest()
                    .body(Map.of("error", "Prompt is required"));
        }

        try {
            RestTemplate restTemplate = new RestTemplate();

            String url = baseUrl + "/chat/completions";

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.setBearerAuth(apiKey.trim());

            // Request body
            Map<String, Object> body = new HashMap<>();
            body.put("model", "Meta-Llama-3.1-8B-Instruct");

            List<Map<String, String>> messages = new ArrayList<>();
            messages.add(Map.of(
                    "role", "user",
                    "content", prompt
            ));

            body.put("messages", messages);
            body.put("temperature", 0.7);
            body.put("max_tokens", 300);

            HttpEntity<Map<String, Object>> entity =
                    new HttpEntity<>(body, headers);

            ResponseEntity<Map> response =
                    restTemplate.postForEntity(url, entity, Map.class);

            Map responseBody = response.getBody();
            List choices = (List) responseBody.get("choices");

            Map firstChoice = (Map) choices.get(0);
            Map message = (Map) firstChoice.get("message");

            return ResponseEntity.ok(
                    Map.of("response", message.get("content"))
            );

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of(
                            "error", "Chat API failed",
                            "details", e.getMessage()
                    ));
        }
    }
}
