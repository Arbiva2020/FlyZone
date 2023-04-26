import React from 'react'
import "./AuthHeader.css"
import { Link } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai"
import Logo1 from '../../assets/Logo1.png'
import Profile from '../../assets/Profile.png'

const AuthHeader = () => {
  return (
    <div className='auth_header'>
      <div className='auth_logo_div'>
        <img src={Logo1} className="authHeader_logo" alt="logo"/>
        <h3 className='authHeader_title'>hello</h3>
      </div>
      <div className='authHeader_menu'>
        <Link className='authHeader_link' >Logout</Link>
        <Link className='authHeader_link'>Help</Link>
        <Link className='authHeader_link' to="/ " ><AiOutlineHome /></Link>
        <Link className='authHeader_link' to="/createProfile">
            <img src={Profile} className="authHeader_userImage" alt="logo"/>
        </Link>
      </div>
      
    </div>
  )
}

export default AuthHeader