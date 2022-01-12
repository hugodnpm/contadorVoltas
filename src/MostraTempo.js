import React from 'react'

const MostraTempo = ({tempo}) => {
    const minutos = Math.round(tempo / 60)
    const segundos = tempo % 60
    const minutosStr = minutos < 10 ? '0' + minutos : minutos 
    const segundosStr = segundos < 10 ? '0' + segundos : segundos
    return(
      <p className='tempo'>
      <span>{`${minutosStr}:${segundosStr}`} </span><br/>
        Tempo médio de voltas</p>
    )
  }
  export default MostraTempo