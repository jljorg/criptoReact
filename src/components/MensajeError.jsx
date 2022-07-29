import styled from '@emotion/styled'
import React from 'react'

const H1 = styled.h2 `
 background-color : #df3838;
 color: #fff;
 padding: 15px;
 font-size: 22px;
 text-transform: uppercase;
 font-family: 'Lato' , sans-serif;
 font-weight: 700;
 text-align: center;
`
const MensajeError = ({mensaje}) => {
  return (
      <div>
    <H1>{mensaje}</H1>
    </div>
  )
}

export default MensajeError