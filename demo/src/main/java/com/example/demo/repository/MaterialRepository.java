package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Materials;


public interface MaterialRepository extends JpaRepository<Materials,Integer> {
    List<Materials> findByMaterialsName(String materialsname);

    
} 