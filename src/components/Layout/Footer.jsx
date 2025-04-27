// src/components/Layout/Footer.jsx
import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 4,
        py: 2,
        px: 2,
        textAlign: 'center',
        backgroundColor: '#E0F7FA',
        color: '#333'
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} PetCare 360º — Todos los derechos reservados.
      </Typography>
      <Typography variant="body2">
        Contacto: <Link href="mailto:soporte@petcare360.com">soporte@petcare360.com</Link>
      </Typography>
    </Box>
  );
};

export default Footer;
