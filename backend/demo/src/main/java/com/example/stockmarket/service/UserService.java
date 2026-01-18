package com.example.stockmarket.service;

import com.example.stockmarket.dto.LoginRequest;
import com.example.stockmarket.dto.SignupRequest;
import com.example.stockmarket.entity.User;
import com.example.stockmarket.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {



    @Autowired
    private  UserRepository repo;


    @Autowired
    private PasswordEncoder encoder;

    // ✅ SIGNUP
    public String register(SignupRequest req) {

        if (repo.existsByEmail(req.getEmail())) {
            return "Email already registered";
        }

        User user = new User();
        user.setName(req.getName());
        user.setEmail(req.getEmail());
        user.setGender(req.getGender());
        user.setBirthdate(req.getBirthdate());
        user.setPassword(encoder.encode(req.getPassword()));

        repo.save(user);

        return "Signup successful";
    }

    // ✅ LOGIN
    public String login(LoginRequest req) {

        User user = repo.findByEmail(req.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!encoder.matches(req.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        return "Login successful";
    }
     public List<User> getAllUser(){
      return repo.findAll();
    }
    // get user by id
    public User getUserById(Long id) {
        return repo.findById(id).orElse(null);
    }

    // get user by email
    public User getUserByEmail(String email) {
        return repo.findByEmail(email).orElse(null);
    }

}
