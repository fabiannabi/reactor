import "./App.css";
import axios from 'axios';
import styled from "styled-components";

const apiUrl = 'http://localhost:3001';

function App() {

  axios.get(`${apiUrl}/your_endpoint`)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('There was an error!', error);
    });

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
    <WaveContainer>
      <WaveAnimation />

    </WaveContainer>
  );
}

export default App;
