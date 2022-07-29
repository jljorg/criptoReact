import { useEffect, useState } from "react";
import "./App.css";
import React from "react";
import styled from "@emotion/styled";
import ImagenFondo from "../src/img/imagen-criptos.png";
import Formulario from "./components/Formulario";
import { monedas } from "./data/Monedas";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";
//acordar descargar la extencion vscode-styled-components
const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;
const Heading = styled.h1`
  font-family: "lato" sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;
const App = () => {
  const [monedas, setMonedas] = useState({});
  const [resultadoApi, setResultadoApi] = useState({});
  const [cargando,setCargando]=useState(false);
  useEffect(() => {
    
    //console.log(monedas)
    if (Object.keys(monedas).length > 0) {
      setCargando(true)
      setResultadoApi({})
      const cotizarCripto = async () => {
        const { coin, state } = monedas;
        //console.log(coin);
        // console.log(state);

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coin}&tsyms=${state}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
       // console.log(url);
        //console.log(url);
        setResultadoApi(resultado.DISPLAY[coin][state]);
        setCargando(false)
      };
      cotizarCripto();
    }
  }, [monedas]);
  return (
    <Contenedor>
      <Imagen src={ImagenFondo} alt="imagenes cripto" />
      <div>
        <Heading>Cotizar Criptomonedas</Heading>
        <Formulario setMonedas={setMonedas}></Formulario>
        {cargando && <Spinner></Spinner>}
      {resultadoApi.PRICE && <Resultado 
      resultadoApi={resultadoApi}
      ></Resultado>}
      
       
      </div>
    </Contenedor>
  );
};

export default App;
