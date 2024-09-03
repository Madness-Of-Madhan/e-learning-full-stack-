package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Tutors;
import com.example.demo.service.TutorService;



@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/tutors")
public class TutorsController {
    @Autowired 
    TutorService tutorService;
    @CrossOrigin("http://localhost:3000")
    @PostMapping("/post")
    public ResponseEntity<Tutors> createTutor(@RequestBody Tutors tutors) {
        Tutors savedTutor = tutorService.saveTutors(tutors);
        return new ResponseEntity<>(savedTutor, HttpStatus.ACCEPTED);
    }
    @CrossOrigin("http://localhost:3000")
    @GetMapping("/get/{id}")
    public ResponseEntity<Tutors> getTutorById(@PathVariable int id) {
        Tutors tutors = tutorService.findtutorid(id);
        if (tutors != null) {
            return new ResponseEntity<>(tutors, HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    @CrossOrigin("http://localhost:3000")
    @GetMapping("/get")
    public ResponseEntity<List<Tutors>> getTutorByName(@RequestParam String name) {
        List<Tutors> tutors = tutorService.findtutorname(name);
        if (tutors != null) {
            return new ResponseEntity<>(tutors, HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    @CrossOrigin("http://localhost:3000")
    @PutMapping("/put/{id}")
    public ResponseEntity<Tutors> updateTutor(@RequestBody Tutors tutors, @PathVariable int id) {
        Tutors tutors1 = tutorService.findtutorid(id);
        if (tutors1 != null) {
            Tutors updatedTutor = tutorService.updateTutors(tutors, id);
            return new ResponseEntity<>(updatedTutor, HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    @CrossOrigin("http://localhost:3000")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteTutor(@PathVariable int id) {
        Tutors tutors1 = tutorService.findtutorid(id);
        if (tutors1 != null) {
            tutorService.deletetutorid(id);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @CrossOrigin("http://localhost:3000")
    @PutMapping("/add-course/{id}")
    public ResponseEntity<Void> addCourseToTutor(@PathVariable int id, @RequestParam String courseName) {
        boolean isAdded = tutorService.addCourseToTutor(id, courseName);
        if (isAdded) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }
    @GetMapping("/getall")
    public List<Tutors> getAll()
    {
        return tutorService.getAll();
    }
}
