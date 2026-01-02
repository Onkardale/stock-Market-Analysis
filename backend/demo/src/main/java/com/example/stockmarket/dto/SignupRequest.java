package com.example.stockmarket.dto;



import java.time.LocalDate;

public class SignupRequest {

    private String name;
    private String email;
    private String gender;
    private LocalDate birthdate;
    private String password;

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getGender() {
        return gender;
    }

    public LocalDate getBirthdate() {
        return birthdate;
    }

    public String getPassword() {
        return password;
    }
}


