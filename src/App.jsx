import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecetasProvider } from './contexts/RecetasContext';
import Navbar from './components/layout/NavBar';
import RecetasListPage from './pages/RecetaListPage';
import RecetaDetallePage from './pages/RecetaDetallePage';

function App() {
  return (
    <RecetasProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<RecetasListPage />} />
          <Route path="/recetas" element={<RecetasListPage />} />
          <Route path="/recetas/:id" element={<RecetaDetallePage />} />
        </Routes>
      </Router>
    </RecetasProvider>
  );
}

export default App;