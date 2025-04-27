import React, { useState, useEffect } from 'react';
import { Button, Typography, Box, Alert } from '@mui/material';
import api from '../../services/api';
import FormField from '../shared/FormField';

const ChangePasswordForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const tempUser = sessionStorage.getItem('tempUser');
    if (tempUser) setFormData(prev => ({ ...prev, email: tempUser }));
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError(false);

    if (formData.newPassword !== formData.confirmPassword) {
      setMessage("Las contraseñas no coinciden.");
      setError(true);
      return;
    }

    try {
      const response = await api.post('/auth/change-password', formData, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      });
      setMessage(response.data);
    } catch (err) {
      setMessage(err.response?.data || "Error al cambiar la contraseña.");
      setError(true);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" mb={2}>Cambiar contraseña</Typography>
      {message && <Alert severity={error ? 'error' : 'success'} sx={{ mb: 2 }}>{message}</Alert>}

      <FormField
        label="Nueva contraseña"
        type="password"
        value={formData.newPassword}
        onChange={(e) => handleChange({ target: { name: 'newPassword', value: e.target.value } })}
      />
      <FormField
        label="Confirmar nueva contraseña"
        type="password"
        value={formData.confirmPassword}
        onChange={(e) => handleChange({ target: { name: 'confirmPassword', value: e.target.value } })}
      />

      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
        Cambiar contraseña
      </Button>
    </Box>
  );
};

export default ChangePasswordForm;
