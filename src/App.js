import React, {useState, useEffect} from 'react';
import './styles.css'
import MostraVoltas from './MostraVoltas';
import MostraTempo from './MostraTempo';
import Button from './Button';


const  App = () => {
  const [numVolta, setNumVolta] = useState(0)
  const [running, setRunning] = useState(false)
  const [tempo, setTempo] = useState(0)

  useEffect(() => {
    
    let timer = null // null é considerado false
    if(running){
      timer = setInterval(() => {
        setTempo(old => old + 1)
          
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
    if(numVolta > 0){
      setNumVolta(numVolta - 1)
    }
    
    
  }
  const reset = () => {
    setTempo(0)
    setNumVolta(0)
  }
  
    return (
      <div>
      <MostraVoltas voltas={numVolta}/>
      <Button text='+' className='bigger' onClick={increment}/>
      <Button text='-' className='bigger' onClick={decrement}/>
      {
        numVolta > 0 &&
        <MostraTempo tempo={Math.round(tempo/numVolta)}/>
      }      
      <Button text={running ? 'Pausar' : 'Iniciar'} onClick={toggleRunning}/>
      <Button text='Reiniciar'onClick={reset}/>
      </div>
    )
  }


export default App;
