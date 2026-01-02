package com.example.stockmarket.controller;

import com.example.stockmarket.dto.LoginRequest;
import com.example.stockmarket.dto.SignupRequest;
import com.example.stockmarket.entity.User;
import com.example.stockmarket.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService service;

    @PostMapping("/signup")
    public String signup(@RequestBody SignupRequest req) {
        return service.register(req);
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest req) {
        return service.login(req);
    }

}
