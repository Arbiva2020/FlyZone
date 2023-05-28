import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import Button from '../../components/Generic/Button/Button'
import Input from '../../components/Generic/Input/Input'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { registerDefaultState, registerDefaultValidState } from '../../constants/FormDeaults' 
import { validateEmail, validateMinMax, validatePassword } from '../../validators/validators'
import './RegisterPage.css'

const RegisterPage = () => {
  const [registerObject, setRegisterObject] = useState(registerDefaultState)
  const [errors,setErrors] = useState([])
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmed, setShowConfirmed] = useState(false)
  const [showEye, setShowEye] = useState(false)
  const [showConfirmedEye, setShowConfirmedEye] = useState(false)
  const [isFormValid,setIsFormValid] = useState(registerDefaultValidState)
  const [isFormDisabled, setIsFormDisabled] = useState(true)

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
    setShowEye(!showEye)
  }

  const toggleShowConfirmedPassword = () => {
    setShowConfirmed(!showConfirmed)
    setShowConfirmedEye(!showConfirmedEye)
  }

  const handleChange = (name,value) => {
    setRegisterObject({...registerObject, [name]:value})
  }

  useEffect(()=>{
    for (const key in isFormValid){
      if(isFormValid[key] === false){
        if(!isFormDisabled){
          setIsFormDisabled(true)
        }
      } else{
        if(isFormDisabled){
          setIsFormDisabled(false)
        }
      }
    }
    console.log(isFormValid, isFormDisabled)
  },[isFormValid])

  const handleSubmitForm = () => {
    setErrors([])
    let isValid = true

    for (const key in registerObject){
      console.log(key)
      if(key === "firstName" || key === "lastName"){
        isValid = validateMinMax(registerObject[key], 3, 20)

        if(!isValid){
          setErrors(prev => [`${key} does not meet the requirements of minimum 3 letters or max 20 letters`,...prev])
        }
      }
        if(key === "password"){
          isValid = validatePassword(registerObject[key])
  
          if(!isValid){
            setErrors(prev => [`${key} does not meet the requirements of one uppercase, one lowercase`,...prev])
          }
      }
      if(key ==="email"){
        isValid = validateEmail(registerObject[key])
        console.log(isValid)
        if(!isValid){
          setErrors(prev => ['email is not Valid',...prev])
        }
      }
    }
    if(!isValid){
      return
    }
    console.log(registerObject)
    //take an action
  }
console.log(errors)

  return (
    <div className='register_main'>
      <Header />
      <div className='register_frame'>
      <h3 className='register_headline'>Register:</h3>
        <form className="register_form">
          <div className='register_form_name'>
          <Input 
               name={"firstName"} 
               value={registerObject.firstName}
              //  onChange={(e) => handleChange(e.target.name, e.target.value)}
               placeholder="First Name"
               onBlur={(e) => handleChange(e.target.name, e.target.value)}
               checkErrorsFunc={validateMinMax}
               errorFuncParams={['firstName', 3, 20]}
               setIsFormValid={setIsFormValid}
            />
            <Input 
               name={"lastName"} 
               value={registerObject.lastName}
              //  onChange={(e) => handleChange(e.target.name, e.target.value)}
               placeholder="Last Name"
               onBlur={(e) => handleChange(e.target.name, e.target.value)}
               checkErrorsFunc={validateMinMax}
               errorFuncParams={['lastName', 3, 20]}
               setIsFormValid={setIsFormValid}
            />
               <Input 
               name={"email"} 
               value={registerObject.email}
              //  onChange={(e) => handleChange(e.target.name, e.target.value)}
               placeholder="email"
               onBlur={(e) => handleChange(e.target.name, e.target.value)}
               checkErrorsFunc={validateEmail}
               setIsFormValid={setIsFormValid}
            />
            <div className='wrapIconAndInput'>
              <Input 
                name={"password"} 
                value={registerObject.password}
                // onChange={(e) => handleChange(e.target.name, e.target.value)}
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                onBlur={(e) => handleChange(e.target.name, e.target.value)}
                checkErrorsFunc={validateMinMax}
                errorFuncParams={['Password', 6, 20]}
              />
               {showEye ? <AiFillEye className="eyeIcon" onClick={toggleShowPassword}/> : <AiFillEyeInvisible className="eyeCanceldIcon" onClick={toggleShowPassword}/>}
            </div>
            <div className='wrapIconAndInput'>
              <Input 
                name={"confirmedPassword"} 
                value={registerObject.confirmedPassword}
                // onChange={(e) => handleChange(e.target.name, e.target.value)}
                placeholder="Confirm Password"
                type={showConfirmed ? "text" : "password"}
                onBlur={(e) => handleChange(e.target.name, e.target.value)}
                checkErrorsFunc={validateMinMax}
                errorFuncParams={['Password', 6, 20]}
              />
              {showConfirmedEye ? <AiFillEye className="eyeIcon" onClick={toggleShowConfirmedPassword}/> : <AiFillEyeInvisible className="eyeCanceldIcon" onClick={toggleShowConfirmedPassword}/>}
            </div>
          </div>
        </form>
        <div className='registerButton'>
          <Button 
            text={"Submit"}
            isDisabled={isFormDisabled}
            onClick={handleSubmitForm}
            isLightStyle
          />
        </div>
      </div>
    </div>
  )
}

export default RegisterPage