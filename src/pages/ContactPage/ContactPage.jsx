import React from 'react'
import Header from '../../components/Header/Header'
import './ContactPage.css'
import { useForm } from 'react-hook-form'

const ContactPage = () => {
  const {register, handleSubmit, formState: {errors}} = useForm();
  console.log(errors)
  
  return (
    <div className='contact_main'>
      <Header />
      <div className='contact_frame'>
        <h3 className='contact_headline'>Contact us:</h3>
        <form className="contact_form" onSubmit={handleSubmit((data) => {
          console.log(data);
        })}>
          <div className='form_name'>
            <input {...register("firstName", {required: true})} placeholder="First Name" className='firstName_input'/>
            <input {...register("laststName", {required: true})} placeholder="Last Name" className='lastName_input'/>
          </div>
          <input {...register("email", {required: true})} placeholder="eMail" className='email_input'/>
          <input {...register("content", {required: true, minLength:{value: 10, message: "Min length is 10 chars"}})} placeholder="Content" className='content_input'/>
          <input type="submit" className='submit_button'/>
        </form>
        <p className='flyzone_adress'>Burnstein blvd.1 Yeruham, Israel. POB: 8055401</p>
      </div>
    </div>
  )
}

export default ContactPage