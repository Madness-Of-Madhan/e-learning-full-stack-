package com.example.demo.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Payment;
import com.example.demo.repository.PayementRepository;



@Service
public class PaymentService {
    @Autowired PayementRepository payementRepository;
    
    public Payment savPayment(Payment payment)
    {
        return payementRepository.save(payment);
    }
    
    public Payment findPayment(int id)
    {
        return payementRepository.findById(id).orElse(null);
    }
}
