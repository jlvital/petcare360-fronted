// src/components/auth/RequestPasswordRecoveryForm.jsx
import React, { useState } from 'react';
import { Container, Typography, Alert, Button } from '@mui/material';
import FormField from '../shared/FormField';
import api from '../../services/api';

const RequestPasswordRecoveryForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await api.post('/auth/request-password-recovery', { email });
      setMessage(response.data);
      setError(false);
    } catch (err) {
      setMessage(err.response?.data || "No se pudo procesar la solicitud.");
      setError(true);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Typography variant="h5">¿Has olvidado tu contraseña?</Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Introduce el correo con el que estás registrado (clientes) o tu correo personal (empleados).
      </Typography>

      {message && <Alert severity={error ? "error" : "success"}>{message}</Alert>}

      <form onSubmit={handleSubmit}>
        <FormField label="Correo electrónico" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Enviar enlace de recuperación
        </Button>
      </form>
    </Container>
  );
};

export default RequestPasswordRecoveryForm;
