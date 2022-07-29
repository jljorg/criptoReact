import styled from '@emotion/styled'
import { useState } from 'react'

const Label = styled.label `
  color: #FFF;
  display: block;
  font-family: 'Lato' , sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
  `
 const CampoSelect = styled.select `
 width: 100%;
 font-size: 18px;
 padding: 14px;
 border-radius: 10px ;
 margin-bottom: 20px;
 `

const useSelectModedas = (label,opciones) => {
 
  const [state,setState] = useState('');
  
  const SelectMonedas = () =>(
    <>
    <Label>{label}</Label>
    <CampoSelect 
    value={state}
    onChange={e=>setState(e.target.value)}>
      <option value="">selecciones</option>
      {
      opciones.map( opcion =>(
        <option 
        key={opcion.id}
        value={opcion.id}
        >{opcion.nombre}</option>
      ))}
    </CampoSelect>
    </>
  )
  return[state,SelectMonedas]
}

export default useSelectModedas