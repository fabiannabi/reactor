import "./App.css";
import axios from 'axios';
import styled from "styled-components";
import { FichaPersonal } from "./components/FichasPersonales/FichaPersonal";

const apiUrl = 'http://localhost:3001';

function App() {

  const getPacientes = async () => {
    try {
      const response = await axios.get(`${apiUrl}/pacientes`);
      console.log(response.data)// Devuelve los datos de los pacientes

    } catch (error) {
      console.error('Error al obtener pacientes:', error);
      return []; // Manejo de errores según tus necesidades
    }
  };

  getPacientes();


  return (

    <>
      <div>
        <FichaPersonal />
        {/* {getPacientes().then(pacientes => {
        return (
          <Container>
            <LeftSection>
              <h1>Lista de pacientes</h1>
              <ul>
                {pacientes.map(paciente => (
                  <li key={paciente.id}>
                    {paciente.nombre} {paciente.apellido}
                  </li>
                ))}
              </ul>
            </LeftSection>
            <RightSection>
              <img
                src="https://images.unsplash.com/photo-1606781904053-5b3e5b9d2b8b"
                alt="pacientes"
                style={{ width: "100%" }}
              />
            </RightSection>
          </Container>
        )
      })} */}

        {/* <button onClick={createPatient}>Obtener pacientes</button> */}
      </div>
    </>
  );
}

export default App;
