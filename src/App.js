import React, {useState} from 'react';

const MostraVoltas = ({voltas}) => {
  return(
    <p>{voltas}
      <br/>
      Voltas</p>
  )
}
const MostraTempo = ({tempo}) => {
  return(
    <p>{tempo} <br/>
      Tempo médio de voltas</p>
  )
}
const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const  App = () => {
  const [numVolta, setNumVolta] = useState(0)
  const [tempo, setTempo] = useState(0)
  
  const increment = () => {
    setNumVolta(numVolta + 1)
    console.log('increment')
  }
  const decrement = () => {
    setNumVolta(numVolta - 1)
    console.log('decrement')
  }
    return (
      <div>
      <MostraVoltas voltas={numVolta}/>
      <Button text='+' onClick= {increment}/>
      <Button text='-' onClick={decrement}/>
      <MostraTempo tempo={tempo}/>
      <Button text='Iniciar'/>
      <Button text='Reiniciar'/>
      </div>
    )
  }


export default App;
