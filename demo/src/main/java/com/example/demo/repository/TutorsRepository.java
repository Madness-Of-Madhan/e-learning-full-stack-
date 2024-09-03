package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Tutors;


public interface TutorsRepository extends JpaRepository<Tutors,Integer>{
    List<Tutors> findByTutorName(String tutorName);
    
} 
