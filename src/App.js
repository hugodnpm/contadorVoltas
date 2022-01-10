import React, {useState, useEffect} from 'react';

const MostraVoltas = ({voltas}) => {
  return(
    <p>{voltas}
      <br/>
      Voltas</p>
  )
}
const MostraTempo = ({tempo}) => {
  const minutos = Math.round(tempo / 60)
  const segundos = tempo % 60
  const minutosStr = minutos < 10 ? '0' + minutos : minutos 
  const segundosStr = segundos < 10 ? '0' + segundos : segundos
  return(
    <p>{`${minutosStr}:${segundosStr}`} <br/>
      Tempo médio de voltas</p>
  )
}
const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const  App = () => {
  const [numVolta, setNumVolta] = useState(0)
  const [running, setRunning] = useState(false)
  const [tempo, setTempo] = useState(0)

  useEffect(() => {
    console.log('toggle!!')
    let timer = null // null é considerado false
    if(running){
      timer = setInterval(() => {
        setTempo(old => old + 1)
          console.log('chamou!!')
      },10)
    } 
    return () => {
      if(timer){
        clearInterval(timer)
      }
    }   
  },[running])

  const toggleRunning = () => {
    setRunning(!running)
  }
  
  const increment = () => {
    setNumVolta(numVolta + 1)
    
  }
  const decrement = () => {
    setNumVolta(numVolta - 1)
    
  }
  const reset = () => {
    setTempo(0)
    setNumVolta(0)
  }
  
    return (
      <div>
      <MostraVoltas voltas={numVolta}/>
      <Button text='+' onClick={increment}/>
      <Button text='-' onClick={decrement}/>
      {
        numVolta > 0 &&
        <MostraTempo tempo={Math.round(tempo/numVolta)}/>
      }      
      <Button text='Iniciar' onClick={toggleRunning}/>
      <Button text='Reiniciar'onClick={reset}/>
      </div>
    )
  }


export default App;
