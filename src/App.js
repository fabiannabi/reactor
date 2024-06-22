import "./App.css";
import axios from 'axios';
import styled from "styled-components";

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


  const WaveContainer = styled.div`
    background: linear-gradient(to bottom, #00b2d6, #00b2d6);
    position: relative;
    height: 100vh;
  `;

  const WaveAnimation = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40vh;
    background: linear-gradient(to bottom, #d65900, #d69e00);
    background-size: cover;

    /* Add animation keyframes to create a wave effect */
    animation: wave 10s linear infinite;
    @keyframes wave {
      0% {
        margin-left: 0;
      }
      25% {
        margin-left: -50px;
      }
      50% {
        margin-left: -100px;
      }
      75% {
        margin-left: -150px;
      }
      100% {
        margin-left: -200px;
      }
    }
  `;
  const Container = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
  `;

  const LeftSection = styled.div`
    width: 50%;
    padding: 0 2rem;
    text-align: center;
  `;

  const RightSection = styled.div`
    width: 50%;
  `;

  return (

    <>
      {getPacientes().then(pacientes => {
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
      })}
    </>
  );
}

export default App;
