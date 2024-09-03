package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Enroll;
import com.example.demo.service.EnrollService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/enroll")
public class EnrollController {
    @Autowired
    private EnrollService enrollService;
    @CrossOrigin("http://localhost:3000")
    @PostMapping("/post")
    public Enroll postEnroll(@RequestBody Enroll enroll)
    {
        return enrollService.savEnroll(enroll);
    }
    @CrossOrigin("http://localhost:3000")
    @GetMapping("/course/{courseId}")
    public List<Enroll> getEnrollmentsByCourseId(@PathVariable int courseId) {
        return enrollService.getEnrollmentsByCourseId(courseId);
    }
    
}
