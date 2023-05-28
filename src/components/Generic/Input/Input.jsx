import React, {useState} from 'react'
import './Input.css'

const Input = ({name, type="text", placeholder="", onBlur, customStyles={}, value, setIsFormValid, checkErrorsFunc, errorFuncParams=[]}) => {
  const [error,setError] = useState("")

  const handleOnBlur = (e) => {
    setError("")
    onBlur(e)
    const response = checkErrorsFunc(...errorFuncParams, e.target.value)
    if(!response.isSuccess){
      setError(response.errorMessage)
      return
    }
    setIsFormValid(prev => {return {...prev, [e.target.name]:true }})
  } 

  return (
    <div className="input_main">
       <input
            name={name} 
            type={type}
            defaultValue={value}
            placeholder={placeholder} 
            className="input_Control"
            style={customStyles}
            onBlur={handleOnBlur}
          />
          {error ? <p className='contact_error'>{error}</p> : <p className='contact_error_blank'>{error}</p>}
    </div>
  )
}

export default Input