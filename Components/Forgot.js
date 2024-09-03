import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button } from '@mui/material';
import axios from 'axios';

const API_URL00='http://localhost:8080/user/forgot';
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ForgotPasswordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #4a90e2, #9013fe);
`;

const ForgotPasswordForm = styled.form`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: #4a90e2;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
`;

const Input = styled.input`
  width: calc(100% - 2rem);
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: border-color 0.3s;
  &:focus {
    border-color: #4a90e2;
  }
`;

const PasswordInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PasswordToggleIcon = styled.span`
  margin-left: -2rem;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: #4a90e2;
  }
`;


function Forgot() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const loginData = { password };

        try {
            const response = await axios.put(`${API_URL00}/${email}`, loginData);
            if (response.status === 202) {
                alert('Password updated successfully!');
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                alert('User not found!');
            } else {
                alert('An error occurred while updating the password.');
            }
        }
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <ForgotPasswordContainer>
            <ForgotPasswordForm onSubmit={handleSubmit}>
                <FormTitle>Forgot Password</FormTitle>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">New Password</Label>
                    <PasswordInputContainer>
                        <Input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <PasswordToggleIcon onClick={togglePasswordVisibility}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </PasswordToggleIcon>
                    </PasswordInputContainer>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <PasswordInputContainer>
                        <Input
                            type={showConfirmPassword ? 'text' : 'password'}
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <PasswordToggleIcon onClick={toggleConfirmPasswordVisibility}>
                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                        </PasswordToggleIcon>
                    </PasswordInputContainer>
                </FormGroup>
                <Button type="submit">Reset Password</Button>
            </ForgotPasswordForm>
        </ForgotPasswordContainer>
    );
}

export default Forgot;
