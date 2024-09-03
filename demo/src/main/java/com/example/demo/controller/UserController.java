package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Login;
import com.example.demo.model.Register;
import com.example.demo.service.LoginService;
import com.example.demo.service.RegisterService;



@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/user")
public class UserController {
    @Autowired 
    LoginService loginService;
    @Autowired RegisterService registerService;
  
    @PostMapping("/register")
    public Login registerUser(@RequestBody Login login) {
        Login savedLogin = loginService.saveLogin(login);
        return (savedLogin);
    }
  
    @GetMapping("/get/{id}")
    public ResponseEntity<Login> getUserById(@PathVariable int id) {
        Login login = loginService.getLogin(id);
        if (login != null) {
            return new ResponseEntity<>(login, HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  
    @PutMapping("/forgot/{username}")
    public ResponseEntity<Register> putLogin(@PathVariable String username, @RequestBody Login login) {
        // Check if the username exists in the Register table
        Register reg = registerService.findallList(username);
        if (reg != null) {
            // If username exists, update the password using the loginService
            Register updatedRegister = loginService.forgotLogin(username, login);
            return new ResponseEntity<>(updatedRegister, HttpStatus.ACCEPTED);
        }
        
        // If the username does not exist, return HTTP 406 Not Acceptable
        return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
    }
   
    @PatchMapping("/role/{id}")
    public ResponseEntity<Login> patchRole(@PathVariable int id,@RequestBody Login login)
    {
        Login login1 = loginService.getLogin(id);
        if(login1!=null)
        {
           Login lo= loginService.updaterole(id, login);
            return new ResponseEntity<>(lo,HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);

    }
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Login loginRequest) {
        String role = loginService.authenticateUser(loginRequest.getEmail(), loginRequest.getPassword());
        if (role != null) {
            return new ResponseEntity<>(role, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }
}
