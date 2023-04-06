import React from 'react'
import { Link } from 'react-router-dom'
import './ErrorPage.css'

const ErrorPage = () => {
  return (
    <div className='errorPage'>
      <h2 className='error_headline'>Error</h2>
      <p className='error_text'>some text indicating sourse of error</p>
      <Link className='redirecting'>Back</Link>
    </div>
  )
}

export default ErrorPage