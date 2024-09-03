package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Enroll;
import com.example.demo.repository.EnrollRepo;

@Service
public class EnrollService {
    @Autowired EnrollRepo enrollRepo;
    public Enroll savEnroll(Enroll enroll)
    {
        return enrollRepo.save(enroll);
    }
    public List<Enroll> getEnrollmentsByCourseId(int courseId) {
        return enrollRepo.findByCourseCourseId(courseId);
    }
}
