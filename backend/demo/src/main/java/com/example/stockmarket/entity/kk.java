package com.example.stockmarket.entity;

import jakarta.persistence.*;


@Table(name = "kk")
public class kk{


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(unique = true)
    private String email;
    
}
