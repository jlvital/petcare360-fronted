// src/pages/ProductCatalog.jsx
import React, { useEffect, useState } from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Box
} from '@mui/material';
import api from '../services/api';

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await api.get('/public/products');
      setProducts(response.data);
    } catch (err) {
      console.error('Error al cargar productos:', err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom align="center" fontWeight="bold">
          Catálogo de Productos 🛍️
        </Typography>

        <Grid container spacing={4}>
          {products.map((prod) => (
            <Grid item xs={12} sm={6} md={4} key={prod.id}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={prod.imageUrl}
                  alt={prod.name}
                />
                <CardContent>
                  <Typography variant="h6">{prod.name}</Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {prod.description}
                  </Typography>
                  <Typography variant="body1" color="primary" sx={{ mt: 1 }}>
                    {prod.price.toFixed(2)} €
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductCatalog;
