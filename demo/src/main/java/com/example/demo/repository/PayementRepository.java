package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Payment;



public interface PayementRepository extends JpaRepository<Payment,Integer> {

    
} 
