import React  from 'react'
import "./Button.css"

const Button = ({isPrimaryStyle, text, onClick}) => {
  return (
    <div>
      {/* <button className={isPrimaryStyle ? "dark" : "light"} onClick={onClick}>{props.name}</button> */}
      <button className='isPrimaryStyle'></button>
    </div>
    
  )
}

export default Button