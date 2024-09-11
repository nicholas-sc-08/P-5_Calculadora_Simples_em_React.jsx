import './App.css'
import './Components/Calculadora.css'
import React_Logo from './Components/React_Logo.png'
import Calculadora from './Components/Calculadora'
function App() {


  return (
    <>

    <h2>Calculadora Básica em React.jsx! <img src={React_Logo} alt='React Logo' className='react_logo'/></h2>

    <p>Seja bem-vindo(a) a calculadora na qual desenvolvi, temos 7 inputs, 1 botão e alguns textos. Nos dois primeiros inputs, serão os números na qual você deseja calcular, seja eles positívo ou negativo;
    </p>

    <p>Temos 5 tipos de expressões aritméticas que podem ser calculadas, sendo: adição, subtração, multiplicação, divisão & exponenciação!</p>

    <Calculadora />

    </>
  )
}

export default App
