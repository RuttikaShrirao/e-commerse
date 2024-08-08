import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { signUp } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';
import "../App.css"

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate()

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    dispatch(signUp(formData));
    navigate("/")
  };

  return (
    <Container >
      <form onSubmit={handleSubmit} className='form'>
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          required
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <TextField
          label="Password"
          fullWidth
          margin="normal"
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        <TextField
          label="Confirm Password"
          fullWidth
          margin="normal"
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          required
        />
         <div className='btn'>
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
        </div>
      </form>
    </Container>
  );
};

export default SignUp;
