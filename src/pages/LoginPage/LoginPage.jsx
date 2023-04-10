import React from 'react'
import Header from '../../components/Header/Header'
import { useForm } from 'react-hook-form'
import Button from '../../components/Generic/Button/Button'
import Input from '../../components/Generic/Input/Input'
import './LoginPage.css'

const LoginPage = () => {

  const {register, handleSubmit, formState: {errors}} = useForm();
  console.log(errors)

  return (
    <div className='login_main'>
      <Header />
      <div className='login_frame'>
      <h3 className='login_headline'>Login:</h3>
        <form className="login_form" onSubmit={handleSubmit((data) => {
          console.log(data);
        })}>
          <div className='login_form_name'>
            <Input 
               name={"UserName"} 
               type={"text"}
               placeholder={""} 
               value={"User Name"}
            />
            <Input 
               name={"Password"} 
               type={""}
               placeholder={""} 
               value={"Password"}
            />
          </div>
        </form>
        <div className='loginButton'>
        <Button 
            text={"Login"}
            isLightStyle
            onClick={() => {console.log('logged in')}}
          />
        </div>
      </div>
    </div>
  )
}

export default LoginPage