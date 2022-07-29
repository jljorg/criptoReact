import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { monedas } from "../data/Monedas";
import useSelectModedas from "../hooks/useSelectModedas";
import MensajeError from "./MensajeError";

const InputSubmit = styled.input `
background-color: #9497ff;
border:none;
width: 100%;
padding: 10px;
color: #FFF;
font-weight: 700;
text-transform: uppercase;
font-size:  20px;
border-radius: 5px;

&:hover {
    background-color: #0c0c75;
    cursor: pointer;
}

`
const Formulario = ({setMonedas}) => {

  const [coins,setCoins]= useState([]);
  const [state,SelectMonedas] = useSelectModedas('Elige tu moneda', monedas)
  const [coin,SelectCoin] = useSelectModedas('Elige la cripto moneda', coins)
  const [mensaje,setMensaje] = useState(true);

  useEffect(()=>{
    const consultarApi = async ()=>{
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
       const respuesta = await fetch(url);
       const resultado = await respuesta.json();
       //console.log(resultado.Data);
       const arrayCriptos =  resultado.Data.map((coin)=>{

        const objetoCoin = {
          id :coin.CoinInfo.Name,
          nombre : coin.CoinInfo.FullName

        }
        
        return objetoCoin;
         
         
       })
       setCoins(arrayCriptos);
       
    }
    consultarApi();

  },[])
    
 const handleSubmit =(e)=>{
  e.preventDefault();
   if([state,coin].includes('')){
     setMensaje(true);
     return

   }
   setMensaje(false);
   setMonedas({
     state,
     coin
   });
 }
    
  
  return (
    <div>
      
      <form onSubmit={handleSubmit}>
          
         {  mensaje  && <MensajeError mensaje="Llene los campos"></MensajeError>}
          <SelectMonedas></SelectMonedas>
          <SelectCoin></SelectCoin>
          
         
          
          
          <InputSubmit  type="submit" value="Cotizar"></InputSubmit>
      </form>
    </div>
  );
};

export default Formulario;
