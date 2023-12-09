// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ListadoPQR from './ListadoPQR';
import FormularioPQR from './FormularioPQR';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>PETICIONES, QUEJAS, RECLAMOS Y SUGERENCIAS.</h1>
        <Routes>
          <Route path="/formulario" element={<FormularioPQR />} />
          <Route path="/listado" element={<ListadoPQR />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
