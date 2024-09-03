package com.example.demo.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.model.Login;
import com.example.demo.model.Register;
import com.example.demo.repository.LoginRepository;
import com.example.demo.repository.RegisterRepository;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;
    @Autowired RegisterRepository registerRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public Login saveLogin(Login login) {
        login.setPassword(passwordEncoder.encode(login.getPassword()));
        return loginRepository.save(login);
    }

    public Login getLogin(int id) {
        return loginRepository.findById(id).orElse(null);
    }
    public Login updaterole(int id,Login login1)
    {
        Login login=loginRepository.findById(id).orElse(null);
        if(login!=null)
        {
            login.setRoles(login1.getRoles());
            return loginRepository.save(login);
        }
        return null;
    }
     public Register forgotLogin(String email, Login login) {
        // Find the user in the Register table
        Register existingRegister = registerRepository.findByEmail(email);
        
        if (existingRegister != null) {
            // Update the password
            existingRegister.setPassword(passwordEncoder.encode(login.getPassword()));
            registerRepository.save(existingRegister);
            return existingRegister;
        }
        
        // Return null if the username is not found
        return null;
    }

    public String authenticateUser(String email, String password) {
        Register reg = registerRepository.findByEmail(email);
        if (reg != null) {
            Login login = loginRepository.findByEmail(email);
            if (login != null && passwordEncoder.matches(password, login.getPassword())) {
                return login.getRoles();
            }
        }
        return null;
    }
}

