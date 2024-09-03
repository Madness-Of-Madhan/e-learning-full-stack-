package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Acheivement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int achievementId;
    private String achievementName;
    private String article;
    private String achievementImage;
}
