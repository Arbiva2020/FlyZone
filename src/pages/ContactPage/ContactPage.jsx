import React,{useState} from 'react'
import Header from '../../components/Header/Header'
import './ContactPage.css'
import Button from '../../components/Generic/Button/Button'
import Input from '../../components/Generic/Input/Input'
import { contactDefaultState } from '../../constants/FormDeaults'
import { validateEmail, validateMinMax } from '../../validators/validators'

const ContactPage = () => {
  const [contactObject, setContactObject] = useState(contactDefaultState)
  const [errors,setErrors] = useState([])

  const handleChange = (name,value) => {
    setContactObject({...contactObject, [name]:value})
  }

  const handleSubmitForm = () => {
    setErrors([])
    let isValid = true

    for (const key in contactObject){
      console.log(key)
      if(key === "firstName" || key === "lastName"){
        isValid = validateMinMax(contactObject[key], 3, 20)

        if(!isValid){
          setErrors(prev => [`${key} does not meet the requirements of minimum 3 letters or max 20 letters`,...prev])
        }
      }
        if(key === "content"){
          isValid = validateMinMax(contactObject[key], 10, 500)
  
          if(!isValid){
            setErrors(prev => [`${key} does not meet the requirements of minimum 10 letters or max 500 letters`,...prev])
          }
      }
      if(key ==="email"){
        isValid = validateEmail(contactObject[key])
        console.log(isValid)
        if(!isValid){
          setErrors(prev => ['email is not Valid',...prev])
        }
      }
    }
    if(!isValid){
      return
    }
    console.log(contactObject)
    //take an action
  }
console.log(errors)
  const handleClearForm = () => {
    setContactObject(contactDefaultState)
  }

  return (
    <div className='contact_main'>
      <Header />
      <div className='contact_frame'>
        <h3 className='contact_headline'>Contact us:</h3>
        <form className="contact_form">
          <div className='form_name'>
          <Input 
               name={"firstName"}
               placeholder='First Name' 
               value={contactObject.firstName}
               onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            <Input 
               name={"lastName"} 
               placeholder='Last Name' 
               value={contactObject.lastName}
               onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </div>
          <div className='mail_extra'>
            <Input
              name={"email"}
              placeholder='email' 
               type={"email"}
               value={contactObject.email}
               onChange={(e) => handleChange(e.target.name, e.target.value)}
            />   
            <textarea className='form_extra' placeholder='Messege' name="content" value={contactObject.content} rows="8" cols="50" onChange={(e) => handleChange(e.target.name, e.target.value)}></textarea>  
          </div>     
        </form>
        <div className='contactButtons'>
        <Button 
            text={"Submit"}
            isLightStyle
            onClick={handleSubmitForm}
          />
           <Button 
            text={"Clear"}
            onClick={handleClearForm}
          />
        </div>
        <p className='flyzone_adress'>Burnstein blvd.1 Yeruham, Israel. POB: 8055401</p>
      </div>
          <div className='error_div'>
            {errors.length > 0 && errors.map(error => <p className='contact_error'>{error}</p>)}
          </div> 
    </div>
  )
}

export default ContactPage