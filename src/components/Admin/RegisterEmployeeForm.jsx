// src/components/Admin/RegisterEmployeeForm.jsx
import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  MenuItem,
  Alert
} from '@mui/material';
import api from '../../services/api';

const perfiles = ['VETERINARIO', 'AUXILIAR', 'TECNICO'];

const RegisterEmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName1: '',
    lastName2: '',
    personalEmail: '',
    profile: '',
    startDate: ''
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await api.post('/admin/register-employee', formData);
      setSuccess(`✅ Empleado ${response.data.name} registrado correctamente.`);
      setFormData({
        name: '',
        lastName1: '',
        lastName2: '',
        personalEmail: '',
        profile: '',
        startDate: ''
      });
    } catch (err) {
      if (err.response?.data?.message) {
        setError(`❌ ${err.response.data.message}`);
      } else {
        setError('❌ Error al registrar empleado. Intenta más tarde.');
      }
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 500, mx: 'auto', mt: 4 }}>
      <Typography variant="h6" mb={2}>Registrar nuevo empleado</Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

      <TextField
        label="Nombre"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Primer apellido"
        name="lastName1"
        value={formData.lastName1}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Segundo apellido"
        name="lastName2"
        value={formData.lastName2}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Correo personal"
        name="personalEmail"
        type="email"
        value={formData.personalEmail}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        select
        label="Perfil del empleado"
        name="profile"
        value={formData.profile}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      >
        {perfiles.map((perfil) => (
          <MenuItem key={perfil} value={perfil}>
            {perfil}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Fecha de inicio"
        name="startDate"
        type="date"
        value={formData.startDate}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
        Registrar empleado
      </Button>
    </Box>
  );
};

export default RegisterEmployeeForm;
