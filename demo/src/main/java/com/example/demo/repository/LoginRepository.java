package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Login;



public interface LoginRepository extends JpaRepository<Login, Integer> {
    Login findByEmail(String email);
}
