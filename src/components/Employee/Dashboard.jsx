import React from 'react';
import { Typography, Box } from '@mui/material';
import DashboardNavbar from '../Layout/Navbar';

const EmployeeDashboard = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Panel del Empleado 👩‍⚕️
      </Typography>
      <Typography>Desde aquí podrás gestionar tus citas, pacientes y tratamientos.</Typography>
    </Box>
  );
};

export default EmployeeDashboard;
