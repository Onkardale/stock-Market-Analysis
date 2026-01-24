package com.example.stockmarket.controller;

import com.example.stockmarket.entity.User;
import com.example.stockmarket.repository.UserRepository;
import com.example.stockmarket.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class UserController {

    @Autowired
    private UserRepository userRepository;


    @Autowired
    private UserService userService;

//    @GetMapping("/no")
//    public ResponseEntity<?> getUserByEmail(@RequestParam String email) {
//        // Fetch user from database by email
//        Optional<User> user = userRepository.findByEmail(email);
//
//        if (user.isPresent()) {
//            return ResponseEntity.ok(user);
//        }
//
//        return ResponseEntity.notFound().build();
//    }
//
//    @GetMapping("/users")
//    public List<User> getAllUsers() {
//        return userService.getAllUser();
//    }
//
//    // ✅ GET USER BY ID
//    @GetMapping("/users/{id}")
//    public User getUserById(@PathVariable Long id) {
//        return userService.getUserById(id);
//    }
//
//    // ✅ GET USER BY EMAIL
//    @GetMapping("/users/email/{email}")
//    public User getUserByEmail(@PathVariable String email) {
//        return userService.getUserByEmail(email);
//    }

}