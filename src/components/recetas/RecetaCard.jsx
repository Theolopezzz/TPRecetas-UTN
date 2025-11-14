import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Stack, Chip } from '@mui/material';
import { AccessTime, Restaurant, People } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function RecetaCard({ receta }) {
  const navigate = useNavigate();

  const getDifficultyColor = (dificultad) => {
    switch (dificultad) {
      case 'Fácil': return 'success';
      case 'Media': return 'warning';
      case 'Difícil': return 'error';
      default: return 'default';
    }
  };

  return (
    <Card
      sx={{
        height: '100%', 
        width: 500,
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4
        },
        overflow: 'hidden'
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={receta.imagen}
        alt={receta.titulo}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between', 
          py: 2,
          overflow: 'hidden'
        }}
      >
        <div>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            {receta.titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
            {receta.descripcion}
          </Typography>
        </div>
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
          <Chip
            icon={<AccessTime />}
            label={receta.tiempoPreparacion}
            size="small"
            variant="outlined"
          />
          <Chip
            label={receta.dificultad}
            size="small"
            color={getDifficultyColor(receta.dificultad)}
            variant="filled"
          />
        </Stack>
        <Stack direction="row" spacing={1}>
          <Chip
            icon={<People />}
            label={`${receta.porciones} porciones`}
            size="small"
            variant="outlined"
          />
        </Stack>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          fullWidth
          onClick={() => navigate(`/recetas/${receta.id}`)}
          sx={{backgroundColor:'rgba(37, 37, 37, 1)'}} 
        >
          VER RECETA
        </Button>
      </CardActions>
    </Card>
  );
}

export default RecetaCard;