// src/pages/AdminDashboard.jsx
import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const goToRegisterEmployee = () => {
    navigate('/admin/register-employee');
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Panel de Administrador 🛠️
      </Typography>
      <Typography sx={{ mb: 2 }}>
        Desde aquí puedes registrar empleados y gestionar la plataforma.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={goToRegisterEmployee}
      >
        Registrar nuevo empleado
      </Button>
    </Box>
  );
};

export default AdminDashboard;
