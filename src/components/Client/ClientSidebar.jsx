import React from 'react';
import { List, ListItemButton, ListItemText, Divider } from '@mui/material';

const ClientSidebar = ({ onSelect }) => {
  return (
    <List component="nav">
      <ListItemButton onClick={() => onSelect('profile')}>
        <ListItemText primary="Mi perfil" />
      </ListItemButton>
      <ListItemButton onClick={() => onSelect('pets')}>
        <ListItemText primary="Mis mascotas" />
      </ListItemButton>
      <ListItemButton onClick={() => onSelect('appointments')}>
        <ListItemText primary="Mis citas" />
      </ListItemButton>
      <ListItemButton onClick={() => onSelect('purchases')}>
        <ListItemText primary="Historial de compras" />
      </ListItemButton>
      <Divider />
    </List>
  );
};

export default ClientSidebar;
