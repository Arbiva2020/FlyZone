import React from 'react'
import "./Header.css"
// import logo2 from "../../assets/logo2.png"

const Header = () => {
  return (
    <div className='header'>
      <div>
        {/* <img src={logo2} alt="flyZone logo" /> */}
      </div>
      <div className='menu'>
        <p>About</p>
        <p>Pricing</p>
        <p>Contact</p>
        <p>Help</p>
        {/* <link to="/">About</link>
        <link to="/">Pricing</link>
        <link to="/">Contact</link>
        <link to="/">Help</link> */}
      </div>
      
    </div>
  )
}

export default Header