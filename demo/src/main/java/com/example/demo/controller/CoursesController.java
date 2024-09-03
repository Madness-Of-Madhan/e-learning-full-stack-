package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;        
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Course;
import com.example.demo.service.CourseService;



@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/course")
public class CoursesController {
    @Autowired 
    public CourseService courseService;
    @CrossOrigin("http://localhost:3000")
    @PostMapping("/post")

    public ResponseEntity<Course> postCourse(@RequestBody Course course)
    {
       Course co= courseService.saveCourse(course);
        return new ResponseEntity<>(co,HttpStatus.ACCEPTED);
    }
    @CrossOrigin("http://localhost:3000")
    @GetMapping("/get/{id}")
    public ResponseEntity<Course> getCourseId(@PathVariable int id)
    {

        Course course2=courseService.findCourseid(id);
        if(course2!=null)
        {

            return new ResponseEntity<>(course2,HttpStatus.ACCEPTED);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }
    @CrossOrigin("http://localhost:3000")
    @GetMapping("/get/{name}")

    public ResponseEntity<Course> getCourseName(@PathVariable String name)
    {
        Course course=courseService.findCoursename(name);
        if(course!=null)
        {
            return new  ResponseEntity<>(course,HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);                         

    }
    @CrossOrigin("http://localhost:3000")
    @PutMapping("/put/{id}")

    public ResponseEntity<Course> updateidEntity(@RequestBody Course course,@PathVariable int id)
    {
        Course course2=courseService.findCourseid(id);
        if(course2!=null)
        {
           Course co= courseService.updatCourse(id, course2);
           return new ResponseEntity<>(co,HttpStatus.IM_USED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }
    @CrossOrigin("http://localhost:3000")
    @PutMapping("/put/{name}")

    public ResponseEntity<Course> updatecoursenamEntity(@RequestBody Course course,@PathVariable String  name)
    {
        Course course2=courseService.findCoursename(name);
        if(course2!=null)
        {
           Course co= courseService.updatCoursebyname(name, course2);
           return new ResponseEntity<>(co,HttpStatus.IM_USED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }
    @CrossOrigin("http://localhost:3000")
    @DeleteMapping("/delete/{id}")
public ResponseEntity<Void> deleteCourse(@PathVariable int id) {
    Course course = courseService.findCourseid(id);
    if (course != null) {
        courseService.deleteCourseid(id);
        return ResponseEntity.noContent().build(); // 204 No Content
    }
    return ResponseEntity.notFound().build(); // 404 Not Found
}
@GetMapping("/getAll")
public ResponseEntity<List<Course>> getAllCourses() {
    List<Course> courses = courseService.getAllCourses(); // Ensure this method exists in your service
    return new ResponseEntity<>(courses, HttpStatus.OK);
}
}
