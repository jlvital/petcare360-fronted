import React, { useState } from 'react';
import { Button, Typography, Box, Alert } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import FormField from '../shared/FormField';

const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await api.post('/auth/login', formData);
      const { token, name, username, role } = response.data;
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('user', JSON.stringify({ name, username, role }));

      if (role === 'ADMIN') navigate('/dashboard/admin');
      else if (role === 'CLIENTE') navigate('/dashboard/cliente');
      else if (role === 'EMPLEADO') navigate('/dashboard/empleado');
      else setError('Rol desconocido. Contacta con el administrador.');
    } catch (err) {
      if (err.response?.data?.message === 'TEMP_LOGIN') {
        sessionStorage.setItem('tempUser', formData.username);
        navigate('/change-password');
      } else {
        setError(err.response?.data || '❌ Error al iniciar sesión.');
      }
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" mb={2}>Iniciar Sesión</Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      <FormField
        label="Correo electrónico"
        type="email"
        value={formData.username}
        onChange={(e) => handleChange({ target: { name: 'username', value: e.target.value } })}
      />
      <FormField
        label="Contraseña"
        type="password"
        value={formData.password}
        onChange={(e) => handleChange({ target: { name: 'password', value: e.target.value } })}
      />

      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
        Entrar
      </Button>

      <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
        <Link to="/forgot-password">¿Has olvidado tu contraseña?</Link>
      </Typography>
    </Box>
  );
};

export default LoginForm;
