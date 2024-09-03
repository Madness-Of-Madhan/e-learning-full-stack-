package com.example.demo.service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Tutors;
import com.example.demo.repository.TutorsRepository;



@Service
public class TutorService {
    @Autowired TutorsRepository tutorsRepository;

    public Tutors saveTutors(Tutors tutors)
    {
        return tutorsRepository.save(tutors);
    }

    public Tutors  findtutorid(int id)
    {
        return tutorsRepository.findById(id).orElse(null);
    }

    public List<Tutors> findtutorname(String tutorName)
    {
        return tutorsRepository.findByTutorName(tutorName);
    }
    public Tutors updateTutors(Tutors tutors,int id)
    {
        Tutors tu=tutorsRepository.findById(id).orElse(null);
        if(tu!=null)
        {
            tu.setTutorName(tutors.getTutorName());
            tu.setQualification(tutors.getQualification());
            tu.setCourseName(tutors.getCourseName());
            tu.setDescription(tutors.getDescription());
            return tutorsRepository.save(tu);
        }
        return null;
    }

    public void  deletetutorid(int id)
    {
        Tutors tutors=tutorsRepository.findById(id).orElse(null);
        if(tutors!=null)
        {
            tutorsRepository.deleteById(id);
        }
    }
    public boolean addCourseToTutor(int tutorId, String courseName) {
        Optional<Tutors> optionalTutor = tutorsRepository.findById(tutorId);
        if (optionalTutor.isPresent()) {
            Tutors tutor = optionalTutor.get();
            if (tutor.getCourseName() == null) {
                tutor.setCourseName(new HashSet<>()); // Initialize the set if null
            }
            boolean added = tutor.getCourseName().add(courseName); // Add course
            if (added) {
                tutorsRepository.save(tutor); // Save updated tutor
            }
            return added;
        }
        return false; // Tutor not found
    }

    public List<Tutors> getAll()
    {
        return tutorsRepository.findAll();
    }
}
