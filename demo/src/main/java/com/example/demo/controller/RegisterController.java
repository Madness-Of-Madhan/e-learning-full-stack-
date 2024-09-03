package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Register;
import com.example.demo.service.RegisterService;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/register")
public class RegisterController {

    @Autowired
    private RegisterService registerService;
    // @CrossOrigin("http://localhost:3000")
    @PostMapping("/newuser")
    public Register postRegister(@RequestBody Register register) {
        Register savedRegister = registerService.savRegister(register);
        return savedRegister;
    }
    // @CrossOrigin("http://localhost:3000")
    @GetMapping("/get/{id}")
    public ResponseEntity<Register> getRegisterById(@PathVariable int id) {
        Register register = registerService.findRegister(id);
        if (register != null) {
            return new ResponseEntity<>(register, HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    // @CrossOrigin("http://localhost:3000")
    @PutMapping("/put/{id}")
    public ResponseEntity<Register> updateRegisterById(@PathVariable int id, @RequestBody Register register) {
        Register updatedRegister = registerService.updateRegister(id, register);
        if (updatedRegister != null) {
            return new ResponseEntity<>(updatedRegister, HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    // @CrossOrigin("http://localhost:3000")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteRegister(@PathVariable int id) {
        Register existingRegister = registerService.findRegister(id);
        if (existingRegister != null) {
            registerService.delRegister(id);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/get")
    public List<Register> getReg()
    {
        return registerService.getall();

    }
}
