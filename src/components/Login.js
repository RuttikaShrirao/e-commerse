import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';
import "../App.css"

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const dispatch = useDispatch();

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === formData.username && storedUser.password === formData.password) {
      navigate("/products")
    }
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
          label="Password"
          fullWidth
          margin="normal"
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        <div className='btn'>
        <Button type="submit" variant="contained" color="primary" >
          Login
        </Button>
        </div>
       
      </form>
    </Container>
  );
};

export default Login;
