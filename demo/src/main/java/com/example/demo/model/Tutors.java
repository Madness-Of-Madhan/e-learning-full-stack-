package com.example.demo.model;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Tutors {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int tutorId;
    private String tutorName;
    private String qualification;
    private String description;
    private String tutorImage;

    @ElementCollection
    private Set<String> courseName = new HashSet<>();

    // Ensure coursesName is always initialized
    @PrePersist
    @PreUpdate
    private void ensureCoursesNameInitialized() {
        if (courseName == null) {
            courseName = new HashSet<>();
        }
    }
}
