package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Acheivement;
import com.example.demo.service.AcheivementService;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api")
public class AcheivementController {

    @Autowired
    private AcheivementService acheivementService;

    // Create a new achievement
    @CrossOrigin("http://localhost:3000")
    @PostMapping("/achievements")
    public ResponseEntity<Acheivement> createAchievement(@RequestBody Acheivement acheivement) {
        Acheivement savedAchievement = acheivementService.saveAcheivement(acheivement);
        return new ResponseEntity<>(savedAchievement, HttpStatus.CREATED);
    }

    // Get an achievement by ID
    @CrossOrigin("http://localhost:3000")
    @GetMapping("get/{id}")
    public ResponseEntity<Acheivement> getAchievement(@PathVariable("id") int id) {
        Acheivement achievement = acheivementService.findAcheivement(id);
        if (achievement != null) {
            return new ResponseEntity<>(achievement, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Update an achievement by ID
    @CrossOrigin("http://localhost:3000")
    @PutMapping("put/{id}")
    public ResponseEntity<Acheivement> updateAchievement(@PathVariable("id") int id, @RequestBody Acheivement acheivement) {
        Acheivement updatedAchievement = acheivementService.upadAcheivement(acheivement, id);
        if (updatedAchievement != null) {
            return new ResponseEntity<>(updatedAchievement, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete an achievement by ID
    @CrossOrigin("http://localhost:3000")
    @DeleteMapping("delete/{id}")
    public ResponseEntity<Void> deleteAchievement(@PathVariable("id") int id) {
        acheivementService.deleteach(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
    @GetMapping("/getall")

    public List<Acheivement> getAll()
    {
        return acheivementService.getAll();
    }
}
