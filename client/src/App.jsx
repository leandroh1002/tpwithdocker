import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form/Formulario.jsx';
import CardAutos from './components/Card/CardAutos.jsx';

function App() {
  const [autos, setAutos] = useState([]);
  const [auto, setAuto] = useState({
    color: '',
    marca: '',
    modelo: '',
  });

  useEffect(() => {
    // Cuando el componente se monta, obtén la lista de autos desde el servidor
    fetchAutos();
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar el componente

  const fetchAutos = async () => {
    try {
      const response = await axios.get('http://localhost:3232/api/autos');
      setAutos(response.data);
    } catch (error) {
      console.error('Error al obtener autos:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuto((prevAuto) => ({
      ...prevAuto,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3232/api/autos', auto);
      // Después de agregar un nuevo auto, actualiza la lista de autos
      fetchAutos();
    } catch (error) {
      console.error('Error al crear el auto:', error);
    }
  };

  return (
    <div>
      <Form handleSubmit={handleSubmit} handleInputChange={handleInputChange} auto={auto} />
      <CardAutos autos={autos}/>
    </div>
  );
}

export default App;

