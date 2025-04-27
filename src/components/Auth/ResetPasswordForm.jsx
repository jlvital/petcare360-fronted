import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button, Typography, Box, Alert } from '@mui/material';
import api from '../../services/api';
import FormField from '../shared/FormField';

const ResetPasswordForm = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      setMessage("Las contraseñas no coinciden.");
      setError(true);
      return;
    }

    try {
      const response = await api.post('/auth/recover-password', {
        token,
        ...formData
      });
      setMessage(response.data);
      setError(false);
    } catch (err) {
      setMessage(err.response?.data || "Error al restablecer la contraseña.");
      setError(true);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" mb={2}>Restablecer contraseña</Typography>
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
        Restablecer contraseña
      </Button>
    </Box>
  );
};

export default ResetPasswordForm;
