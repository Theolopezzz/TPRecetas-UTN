import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecetas } from '../contexts/RecetasContext';
import RecetaDetalle from '../components/recetas/RecetaDetalle';

function RecetaDetallePage() {
  const { id } = useParams();
  const { getRecetaById, isLoading } = useRecetas();

  const receta = getRecetaById(id);

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>Cargando receta...</h2>
      </div>
    );
  }

  return <RecetaDetalle receta={receta} />;
}

export default RecetaDetallePage;