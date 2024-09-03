package com.example.demo.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Register;
import com.example.demo.repository.RegisterRepository;



@Service
public class RegisterService {
    @Autowired RegisterRepository registerRepository;

    public Register savRegister(Register register)
    {
        return registerRepository.save(register);
    }
    public Register findRegister(int id)
    {
        return registerRepository.findById(id).orElse(null);
    }
    public Register findallList(String username)
    {
        return registerRepository.findByEmail(username);
    }

    public void delRegister(int id)
    {
        Register prevRegister =registerRepository.findById(id).orElse(null);
        if(prevRegister!=null)
        {
           registerRepository.deleteById(id);
        }


    }
    public Register updateRegister(int id,Register register)
    {
        Register prevRegister =registerRepository.findById(id).orElse(null);
        if(prevRegister!=null)
        {
            prevRegister.setEmail(register.getEmail());
            prevRegister.setPhoneNumber(register.getPhoneNumber());
            return registerRepository.save(prevRegister);
        }
        return null;
    }
    public List<Register>getall()
    {
        return registerRepository.findAll();
    }

    // public void forgotpasssword(int id,Register register)
    // {
    //     Register prevRegister =registerRepository.findById(id).orElse(null);
    //     if(prevRegister!=null)
    //     {
    //         prevRegister.setPassword();
    //         return registerRepository.save(prevRegister);
    //     }
    //     return null;

    // }
}
