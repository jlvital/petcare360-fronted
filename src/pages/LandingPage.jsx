// src/pages/LandingPage.jsx
import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Paper
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

const LandingPage = () => {
  const navigate = useNavigate();

  const servicios = [
    { titulo: 'Consulta Veterinaria', img: '/assets/vet1.png' },
    { titulo: 'Vacunas y Tratamientos', img: '/assets/vet2.png' },
    { titulo: 'Baño y Peluquería', img: '/assets/vet3.png' },
  ];

  const productosDemo = [
    {
      name: 'Collar antipulgas',
      price: 12.99,
      description: 'Protege a tu mascota de pulgas y garrapatas.',
      imageUrl: '/assets/products/collar.png'
    },
    {
      name: 'Champú suave',
      price: 8.99,
      description: 'Limpieza natural para el pelaje de tu mascota.',
      imageUrl: '/assets/products/champu.png'
    },
    {
      name: 'Juguete interactivo',
      price: 5.5,
      description: 'Diversión asegurada para tu perro o gato.',
      imageUrl: '/assets/products/juguete.png'
    },
  ];

  const testimonios = [
    { nombre: 'Laura G.', comentario: '¡Excelente atención para mi gato! Muy recomendable.' },
    { nombre: 'Carlos M.', comentario: 'Rápidos, profesionales y muy humanos. ¡Gracias!' },
    { nombre: 'Sandra R.', comentario: 'Mi perro adora venir aquí. Se nota el amor por los animales.' },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Box sx={{ backgroundColor: '#f0f9f9', minHeight: '100vh', pt: 6 }}>
      <Container maxWidth="lg">
        {/* Cabecera */}
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography variant="h2" color="primary" fontWeight="bold">
            PetCare360º 🐾
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Cuidamos de tu mascota como uno más de la familia.
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Button variant="contained" size="large" onClick={() => navigate('/login')} sx={{ mr: 2 }}>
              Iniciar sesión
            </Button>
            <Button variant="outlined" size="large" onClick={() => navigate('/register')}>
              Registrarse
            </Button>
            <Box sx={{ mt: 2 }}>
              <Button variant="text" size="large" onClick={() => navigate('/productos')}>
                Ver catálogo de productos
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Carrusel de servicios */}
        <Typography variant="h5" gutterBottom>Servicios destacados</Typography>
        <Slider {...sliderSettings}>
          {servicios.map((s, idx) => (
            <Box key={idx} sx={{ px: 2 }}>
              <Paper sx={{ overflow: 'hidden', height: 300 }}>
                <img
                  src={s.img}
                  alt={s.titulo}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Paper>
              <Typography variant="h6" align="center" mt={1}>{s.titulo}</Typography>
            </Box>
          ))}
        </Slider>

        {/* Productos destacados */}
        <Typography variant="h5" sx={{ mt: 6 }} gutterBottom>Productos recomendados</Typography>
        <Grid container spacing={4}>
          {productosDemo.map((prod, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Paper elevation={3} sx={{ p: 2, height: '100%', textAlign: 'center' }}>
                <img
                  src={prod.imageUrl}
                  alt={prod.name}
                  style={{ width: '100%', height: 150, objectFit: 'cover', borderRadius: 8 }}
                />
                <Typography variant="subtitle1" mt={2}>{prod.name}</Typography>
                <Typography variant="body2" color="text.secondary">{prod.description}</Typography>
                <Typography variant="h6" color="primary" mt={1}>{prod.price.toFixed(2)} €</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Testimonios */}
        <Typography variant="h5" sx={{ mt: 6 }} gutterBottom>Lo que opinan nuestros clientes</Typography>
        <Grid container spacing={3}>
          {testimonios.map((t, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="body1" fontStyle="italic">"{t.comentario}"</Typography>
                <Typography variant="subtitle2" align="right" mt={2}>— {t.nombre}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Footer */}
        <Box sx={{ textAlign: 'center', mt: 6, py: 2, borderTop: '1px solid #ccc' }}>
          <Typography variant="caption">
            📍 C/ Mascota Feliz, 123 - Madrid · ☎ 912 345 678 · info@petcare360.com
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;
