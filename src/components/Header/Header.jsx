import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import Logo1 from '../../assets/Logo1.png'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo_div'>
        <img src={Logo1} className="header_logo" alt="logo"/>
      </div>
      <div className='menu'>
        <Link className='header_link' to="/about">About</Link>
        <Link className='header_link' to="/paymentProgram">Pricing</Link>
        <Link className='header_link' to="/contact">Contact</Link>
        <Link className='header_link'>Help</Link>
      </div>
      
    </div>
  )
}

export default Header