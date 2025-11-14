import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { useRecetas } from '../../contexts/RecetasContext';
import RecetaCard from './RecetaCard';

function RecetasList() {
  const { recetas, isLoading } = useRecetas();

  if (isLoading) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" align="center">
          Cargando recetas...
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        ⬇️ Nuestras Recetas ⬇️
      </Typography>
      <Grid container spacing={9} sx={{mt: 7}} justifyContent="center">
        {recetas.map((receta) => (
          <Grid item xs={12} sm={6} md={4} key={receta.id}>
            <RecetaCard receta={receta} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default RecetasList;