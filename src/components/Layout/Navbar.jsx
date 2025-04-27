// src/components/Layout/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/petcare.svg';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(sessionStorage.getItem('user'));

  const isDashboard = location.pathname.includes('/dashboard');

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/login');
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {/* Logo y título */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <img src={logo} alt="PetCare 360º" style={{ height: 40 }} />
          <Typography variant="h6" component="div">
            PetCare 360º {isDashboard && `— Panel de ${user?.role}`}
          </Typography>
        </Box>

        {/* Navegación común */}
        {!isDashboard ? (
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
            <Button color="inherit" onClick={() => navigate('/')}>Inicio</Button>
            <Button color="inherit" onClick={() => navigate('/productos')}>Productos</Button>
            <Button color="inherit" onClick={() => navigate('/login')}>Entrar</Button>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="caption">
              Bienvenido, {user?.name}
            </Typography>
            <Button color="inherit" onClick={handleLogout}>
              Cerrar sesión
            </Button>
          </Box>
        )}

        {/* Icono móvil */}
        {!isDashboard && (
          <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <IconButton color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
