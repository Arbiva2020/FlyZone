import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Button from '../../components/Generic/Button/Button'
import Input from '../../components/Generic/Input/Input'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { loginDefaultState } from '../../constants/FormDeaults'
import { validatePassword, validateMinMax } from '../../validators/validators'
import './LoginPage.css'

const LoginPage = () => {
  const [loginObject, setLoginObject] = useState(loginDefaultState)
  const [errors,setErrors] = useState([])
  const [showPassword, setShowPassword] = useState(false)
  const [showEye, setShowEye] = useState(false)


  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
    setShowEye(!showEye)
  }

  const handleChange = (name,value) => {
    setLoginObject({...loginObject, [name]:value})
  }

  const handleSubmitForm = () => {
    setErrors([])
    let isValid = true

    for (const key in loginObject){
      console.log(key)
      if(key === "userName"){
        isValid = validateMinMax(loginObject[key], 3, 20)

        if(!isValid){
          setErrors(prev => [`${key} does not meet the requirements of minimum 3 letters or max 20 letters`,...prev])
        }
      }
      
      if(key ==="password"){
        isValid = validatePassword(loginObject[key])
        console.log(isValid)
        if(!isValid){
          setErrors(prev => ['Password doesnt match',...prev])
        }
      }
    }
    if(!isValid){
      return
    }
    console.log(loginObject)
    //take an action
  }
console.log(errors)
  

  return (
    <div className='login_main'>
      <Header />
      <div className='login_frame'>
      <h3 className='login_headline'>Login:</h3>
        <form className="login_form">
          <div className='login_form_name'>
            <Input 
               name={"userName"} 
               value={loginObject.userName}
               placeholder="User Name"
               onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            <div className='wrapInputAndIcon'>
              <Input 
                name={"password"} 
                value={loginObject.password}
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
               {showEye ? <AiFillEye className="eyeIcon" onClick={toggleShowPassword}/> : <AiFillEyeInvisible className="eyeCanceldIcon" onClick={toggleShowPassword}/>}
            </div>
          </div>
        </form>
        <div className='loginButton'>
          <Button 
              text={"Login"}
              isLightStyle
              onClick={handleSubmitForm}
              to="/allStats"
            />
        </div>
        <p className='forgotPass'>Forgot password?</p>
      </div>
      <div className='loginError_div'>
            {errors.length > 0 && errors.map(error => <p className='login_error'>{error}</p>)}
          </div> 
    </div>
  )
}

export default LoginPage