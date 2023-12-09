// FormularioPQR.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';

function FormularioPQR() {
  const [tipo, setTipo] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [ciudad, setCiudad] = useState({ label: 'Seleccionar Ciudad', value: '' });
  const [identificacion, setIdentificacion] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [ciudadesOptions, setCiudadesOptions] = useState([]);
  const [descripcion, setDescripcion] = useState('');

  useEffect(() => {
    const obtenerCiudades = async () => {
      const ciudades = [
        'Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena', 'Cúcuta', 'Bucaramanga',
        'Pereira', 'Santa Marta', 'Ibagué', 'Pasto', 'Manizales', 'Neiva', 'Villavicencio',
        'Montería', 'Popayán', 'Valledupar', 'Armenia', 'Sincelejo', 'Tunja',
      ];

      const opcionesCiudades = [
        { label: 'Seleccionar Ciudad', value: '' },
        ...ciudades.map((ciudad) => ({ label: ciudad, value: ciudad })),
      ];

      setCiudadesOptions(opcionesCiudades);
    };

    obtenerCiudades();
  }, []);

  const tipoOptions = ['NIC', 'Cédula de Ciudadanía', 'Pasaporte', 'Registro Civil'];

  const limpiarCampos = () => {
    setTipo('');
    setDescripcion('');
    setNombre('');
    setApellido('');
    setCiudad({ label: 'Seleccionar Ciudad', value: '' });
    setIdentificacion('');
    setCorreo('');
    setTelefono('');
  };

  const registrarPqr = async () => {
    try {
      await axios.post('http://localhost:5000/api/pqr', {
        tipo,
        descripcion,
        nombre,
        apellido,
        ciudad: ciudad.value,
        identificacion,
        correo,
        telefono,
      });

      limpiarCampos();
      // ... código adicional necesario

    } catch (error) {
      console.error('Error al registrar PQR:', error);
    }
  };

  return (
    <div className="form-container">
    <div className="form-group">
      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="">Tipo De Documento</option>
        {tipoOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    <div className="form-group">
      <label>Identificación:</label>
      <input value={identificacion} onChange={(e) => setIdentificacion(e.target.value)} />
    </div>
    <div className="form-group">
      <label>Nombre:</label>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
    </div>
    <div className="form-group">
      <label>Apellido:</label>
      <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
    </div>
    <div className="form-group">
      <Select
        options={ciudadesOptions}
        value={ciudad}
        onChange={(selectedOption) => setCiudad(selectedOption)}
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </div>
    <div className="form-group">
      <label>Correo Electrónico:</label>
      <input type="text" value={correo} onChange={(e) => setCorreo(e.target.value)} />
    </div>
    <div className="form-group">
      <label>Teléfono:</label>
      <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
    </div>
    <div className="form-group">
      <label>Descripción PQRS:</label>
      <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
    </div>
    <button onClick={registrarPqr}>Registrar</button>
  </div>
  );
}

export default FormularioPQR;
