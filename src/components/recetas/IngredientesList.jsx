import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

function IngredientesList({ ingredientes }) {
  if (!ingredientes || ingredientes.length === 0) {
    return <Typography variant="body1">No hay ingredientes disponibles.</Typography>;
  }

  return (
    <List>
      {ingredientes.map((ingrediente, index) => (
        <ListItem key={index} disableGutters>
          <ListItemText
            primary={`${ingrediente.cantidad} ${ingrediente.unidad} - ${ingrediente.nombre}`}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default IngredientesList;