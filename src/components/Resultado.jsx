import styled from '@emotion/styled';
import React from 'react'

const Contenedor = styled.div `
color: #fff;
font-family: 'Lato', sans-serif;
display: flex;
align-items: center;
gap: 1rem;
margin-top:30px ;
`
const Imagen = styled.img `
display: block;
width: 120px;
`
const Texto = styled.p `
font-size:   18px;
span{
    font-weight:700 ;
}

`
const Precio = styled.p `
font-size: 30px;
span {
    font-weight: 700;
}
`

const Resultado = ({resultadoApi}) => {
    console.log(resultadoApi);
    const {PRICE,CHANGEPCT24HOUR,HIGHDAY,LOWDAY,IMAGEURL,LASTUPDATE}=resultadoApi
  return (
    <Contenedor>
        <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="imagen cripto"></Imagen>
        <div>
        <Precio>El Precio Es De : <span>{PRICE}</span></Precio>
        <Texto>El Precio Mas Alto Dia : <span>{HIGHDAY}</span></Texto>
        <Texto>El Precio Mas Bajo Dia : <span>{LOWDAY}</span></Texto>
        <Texto>Variacion En 24 Horas : <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Ultima Actualizacion : <span>{LASTUPDATE}</span></Texto>
        </div>
    </Contenedor>
  )
}

export default Resultado