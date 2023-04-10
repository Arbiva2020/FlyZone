import React from 'react'
import './Input.css'

const Input = ({name, type="text", placeholder="", onChange, customStyles={}, value}) => {

  return (
    <div className="input_main">
       <input
            name={name} 
            type={type}
            value={value}
            placeholder={placeholder} 
            className="input_Control"
            style={customStyles}
            onChange={onChange}
          />
    </div>
  )
}

export default Input