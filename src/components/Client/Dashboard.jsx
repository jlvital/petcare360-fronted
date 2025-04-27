import React, { useState } from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import DashboardNavbar from '../Layout/Navbar';
import ClientSidebar from './ClientSidebar';
import ProfileView from './ProfileView';
import PetManagement from './PetManagement';
import AppointmentHistory from './AppointmentHistory';
import PurchaseHistory from './PurchaseHistory';

const ClientDashboard = () => {
  const [view, setView] = useState('profile');

  const renderView = () => {
    switch (view) {
      case 'profile': return <ProfileView />;
      case 'pets': return <PetManagement />;
      case 'appointments': return <AppointmentHistory />;
      case 'purchases': return <PurchaseHistory />;
      default: return null;
    }
  };

  return (
    <>
      <DashboardNavbar />
      <Box sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Panel del Cliente 🐾
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <ClientSidebar onSelect={setView} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={9}>
            <Paper elevation={3} sx={{ p: 3 }}>
              {renderView()}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ClientDashboard;
