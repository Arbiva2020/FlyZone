import React from 'react'
import Header from '../../components/Header/Header'
import { useForm } from 'react-hook-form'
import Button from '../../components/Generic/Button/Button'
import Input from '../../components/Generic/Input/Input'
import './RegisterPage.css'

const RegisterPage = () => {

  const {register, handleSubmit, formState: {errors}} = useForm();
  console.log(errors)

  return (
    <div className='register_main'>
      <Header />
      <div className='register_frame'>
      <h3 className='register_headline'>Register:</h3>
        <form className="register_form" onSubmit={handleSubmit((data) => {
          console.log(data);
        })}>
          <div className='register_form_name'>
          <Input 
               name={"userName"} 
               type={"text"}
               placeholder={""} 
               value={"First Name"}
            />
            <Input 
               name={"password"} 
               type={""}
               placeholder={""} 
               value={"Last Name"}
            />
               <Input 
               name={"email"} 
               type={"text"}
               placeholder={""} 
               value={"Email"}
            />
            <Input 
               name={"Password"} 
               type={""}
               placeholder={""} 
               value={"Password"}
            />
             <Input 
               name={"confirmedPassword"} 
               type={""}
               placeholder={""} 
               value={"Confirm Password"}
            />
          </div>
        </form>
        <div className='registerButton'>
          <Button 
            text={"Register"}
            onClick={() => {console.log('clicked')}}
            isLightStyle
          />
        </div>
      </div>
    </div>
  )
}

export default RegisterPage