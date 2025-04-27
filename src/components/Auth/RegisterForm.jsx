import React, { useState } from 'react';
import { Button, Typography, Box, Alert } from '@mui/material';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import FormField from '../shared/FormField';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      setError("La contraseña debe tener al menos 8 caracteres, una mayúscula y un carácter especial.");
      return;
    }

    try {
      await api.post('/auth/register', formData);
      setSuccess('✅ Registro exitoso. Ya puedes iniciar sesión.');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "❌ Error al registrar. Intenta más tarde.");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" mb={2}>Registro de Cliente</Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

      <FormField
        label="Nombre completo"
        type="text"
        value={formData.name}
        onChange={(e) => handleChange({ target: { name: 'name', value: e.target.value } })}
      />
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
      <Typography variant="caption" color="textSecondary" sx={{ mt: -1 }}>
        Mínimo 8 caracteres, una mayúscula y un carácter especial
      </Typography>

      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
        Registrarse
      </Button>
    </Box>
  );
};

export default RegisterForm;
