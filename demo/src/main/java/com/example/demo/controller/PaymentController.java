package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus; 
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Payment;
import com.example.demo.service.PaymentService;



@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/pay")
public class PaymentController {
    @Autowired 
    PaymentService paymentService;
    @CrossOrigin("http://localhost:3000")
    @PostMapping("/post")
    public ResponseEntity<Payment> posPayment(@RequestBody Payment payment) {
        Payment payment2 = paymentService.savPayment(payment);
        return new ResponseEntity<>(payment2, HttpStatus.ACCEPTED);     
    }
    @CrossOrigin("http://localhost:3000")
    @GetMapping("/get/{id}")
    public ResponseEntity<Payment> getPayment(@PathVariable int id) {
        Payment payment = paymentService.findPayment(id);
        if (payment != null) {
            return new ResponseEntity<>(payment, HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
