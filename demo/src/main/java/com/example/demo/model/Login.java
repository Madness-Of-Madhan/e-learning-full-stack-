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
@Setter
@Getter
public class Login {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String email;  // Changed from 'name' to 'username' for consistency
    private String password;
    private String roles;     // Added roles field

    // Getter for roles
    public String getRoles() {
        return roles;
    }

    // Setter for roles
    public void setRoles(String roles) {
        this.roles = roles;
    }
}
