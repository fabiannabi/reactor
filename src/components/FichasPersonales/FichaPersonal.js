
import React, { useState } from 'react';
import axios from 'axios';

export const FichaPersonal = () => {


  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [sexo, setSexo] = useState('');
  const [fechaNcimiento, setFechaNacimiento] = useState('');
  const [estadoCivil, setEstadoCivil] = useState('');
  const [estudios, setEstudios] = useState('');
  const [ocupacion, setOcupacion] = useState('');
  const [domicilio, setDomicilio] = useState('');
  const [procedencia, setProcedencia] = useState('');

  const apiUrl = 'http://localhost:3001';

  const createPatient = async () => {
    try {
      // Ejemplo de datos del paciente para enviar
      const newPatient = {
        nombre: 'fabian',
        apellido: 'Gómez',
        edad: 25,
        sexo: 'Femenino',
        estado_civil: 'Soltera',
        grado_estudios: 'Universitario',
        ocupacion: 'Profesora',
        domicilio: 'Calle Principal 123',
        fecha_nacimiento: '1994-08-15',
        procedencia: 'Ciudad de México'
        // Añade cualquier otro campo requerido según tu modelo de paciente
      };

      const response = await axios.post(`${apiUrl}/pacientes`, newPatient);
      console.log('Datos del paciente creado:', response.data);
      return response.data; // Devuelve los datos del paciente creado

    } catch (error) {
      console.error('Error al crear paciente:', error);
      throw error; // Lanza el error para manejo adicional si es necesario
    }
  };

  createPatient();
  const handleSubmit = (e) => {
    e.preventDefault();
    const patient = {
      nombre,
      apellido,
      edad,
      sexo,
      fechaNcimiento,
      estadoCivil,
      estudios,
      ocupacion,
      domicilio,
      procedencia
    };
    createPatient(patient);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
        <label>Apellido:</label>
        <input type="text" value={apellido} onChange={e => setApellido(e.target.value)} />
        <label>Edad:</label>
        <input type="number" value={edad} onChange={e => setEdad(parseInt(e.target.value))} />
        <label>Sexo:</label>
        <input type="text" value={sexo} onChange={e => setSexo(e.target.value)} />
        <label>Fecha de Nacimiento:</label>
        <input type="date" value={fechaNcimiento} onChange={e => setFechaNacimiento(e.target.value)} />
        <label>Estado Civil:</label>
        <input type="text" value={estadoCivil} onChange={e => setEstadoCivil(e.target.value)} />
        <label>Estudios:</label>
        <input type="text" value={estudios} onChange={e => setEstudios(e.target.value)} />
        <label>Ocupacion:</label>
        <input type="text" value={ocupacion} onChange={e => setOcupacion(e.target.value)} />
        <label>Domicilio:</label>
        <input type="text" value={domicilio} onChange={e => setDomicilio(e.target.value)} />
        <label>Procedencia:</label>
        <input type="text" value={procedencia} onChange={e => setProcedencia(e.target.value)} />

        <input type="submit" value="Submit" />
      </form>


      {/* <button onClick={createPatient}>save</button> */}

    </div>
  );
}