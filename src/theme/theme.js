// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00BFD8', // Azul PetCare
      contrastText: '#fff'
    },
    secondary: {
      main: '#4CAF50', // Verde médico
    },
    info: {
      main: '#B3E5FC' // Celeste cielo
    },
    success: {
      main: '#A8E6CF' // Verde menta suave
    },
    background: {
      default: '#FFFFFF',
      paper: '#E0F7FA' // Fondo con toque celeste
    },
    text: {
      primary: '#333333',
      secondary: '#007BA7'
    }
  },
  typography: {
    fontFamily: `'Roboto', sans-serif`,
    button: {
      textTransform: 'none',
      fontWeight: 600,
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '16px'
        }
      }
    }
  }
});

export default theme;
