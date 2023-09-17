import React, { useState } from 'react'
import './Button.css'

const Button = ({btn, changeHandler}) => {

  return (
    <div id="box">
        <div id="footer">
         <button style={{backgroundColor: btn}} onClick={changeHandler}>{btn}</button>
        </div>
    </div>
  )
}

export default Button