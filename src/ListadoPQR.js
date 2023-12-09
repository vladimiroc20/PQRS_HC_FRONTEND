// ListadoPQR.js
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function ListadoPQR() {
  const [pqrList, setPqrList] = useState([]);

  const obtenerPqr = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/pqr');
      setPqrList(response.data);
    } catch (error) {
      console.error('Error al obtener PQR:', error);
    }
  };

  useEffect(() => {
    obtenerPqr();
  }, []);

  return (
    <div className="list-container">
      <div className="list-header">
      </div>
      <ul>
        {pqrList.map((pqr) => (
          <li key={pqr.id} className="pqr-item">
            <strong>Tipo De Documento:</strong> {pqr.tipo} <br />
            <strong>Nombre:</strong> {pqr.nombre} <br />
            <strong>Apellido:</strong> {pqr.apellido} <br />
            <strong>Ciudad:</strong> {pqr.ciudad} <br />
            <strong>Identificación:</strong> {pqr.identificacion} <br />
            <strong>Correo:</strong> {pqr.correo} <br />
            <strong>Teléfono:</strong> {pqr.telefono} <br />
            <strong>Fecha:</strong> {new Date(pqr.fecha).toLocaleString()}<br/><br/>
            <strong>Descripción:</strong> {pqr.descripcion} <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListadoPQR;
