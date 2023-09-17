import React, { useState } from 'react'
import Button from './components/Button'
import './App.css'

const App = () => {
  const [color, setColor] = useState('#333')
  return (
    <div id="main" style={{backgroundColor: color}}>
      <div id="buttons">
        <Button btn="Red" changeHandler={() => setColor('red')}/> 
        <Button btn="Green" changeHandler={() => setColor('green')}/>
        <Button btn="Blue" changeHandler={() => setColor('blue')}/>
        <Button btn="Salmon" changeHandler={() => setColor('salmon')}/>
        <Button btn="BlueViolet" changeHandler={() => setColor('blueviolet')}/>
      </div>
      
    </div>
  )
}

export default App