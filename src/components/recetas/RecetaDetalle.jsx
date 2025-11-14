import React from "react";
import {
  Container,
  Paper,
  Typography,
  Box,
  Chip,
  Stack,
  Divider,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import {
  AccessTime,
  Restaurant,
  People,
  MenuBook,
  Kitchen,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import IngredientesList from "./IngredientesList";

function RecetaDetalle({ receta }) {
  const navigate = useNavigate();

  if (!receta) {
    return (
      <Container maxWidth="md" sx={{ py: 4, textAlign: "center" }}>
        <Typography variant="h4" color="error">
          Receta no encontrada
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => navigate("/recetas")}
        >
          Volver al Listado
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Button
        startIcon={<span>←</span>}
        onClick={() => navigate("/recetas")}
        sx={{ mb: 2 }}
      >
        Volver al Listado
      </Button>

      <Paper elevation={3} sx={{ p: 3 }}>
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <img
            src={receta.imagen}
            alt={receta.titulo}
            style={{
              width: "100%",
              maxHeight: "400px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </Box>

        <Typography variant="h3" component="h1" gutterBottom>
          {receta.titulo}
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          {receta.descripcion}
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mb: 3, flexWrap: "wrap" }}>
          <Chip
            icon={<AccessTime />}
            label={receta.tiempoPreparacion}
            variant="outlined"
          />
          <Chip
            label={receta.dificultad}
            color={
              receta.dificultad === "Fácil"
                ? "success"
                : receta.dificultad === "Media"
                ? "warning"
                : "error"
            }
            variant="filled"
          />
          <Chip
            icon={<People />}
            label={`${receta.porciones} porciones`}
            variant="outlined"
          />
        </Stack>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" component="h2" gutterBottom>
          📝 Ingredientes
        </Typography>
        <IngredientesList ingredientes={receta.ingredientes} />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" component="h2" gutterBottom>
          👨‍🍳 Preparación
        </Typography>
        <List>
          {receta.pasos.map((paso, index) => (
            <ListItem key={index} disableGutters>
              <ListItemText
                primary={
                  <Typography component="span">
                    <strong>{index + 1}.</strong> {paso}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default RecetaDetalle;
