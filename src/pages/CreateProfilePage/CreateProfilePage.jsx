import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import { createProfileDefaultState } from '../../constants/FormDeaults'
import { validatePassword, validateMinMax } from '../../validators/validators'
import Input from '../../components/Generic/Input/Input'
import Button from '../../components/Generic/Button/Button'
import './CreateProfilePage.css'
import Profile from '../../assets/Profile.png'

const CreateProfilePage = () => {
  const [createProfileObject, setCreateProfileObject] = useState(createProfileDefaultState)
  const [errors,setErrors] = useState([])
  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
  
  const handleChange = (name,value, event) => {
    setCreateProfileObject({...createProfileObject, [name]:value});
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
    console.log(files)
  }

  const handleSubmitForm = () => {
    setErrors([])
    let isValid = true

    for (const key in createProfileObject){
      console.log(key)

      if(key ==="file"){
        isValid = validateFileType(createProfileObject[key])
        console.log(isValid)
        if(!isValid){
          setErrors(prev => ['File type doesnt match',...prev])
        }
      }

      if(key === "userName"){
        isValid = validateMinMax(createProfileObject[key], 3, 20)

        if(!isValid){
          setErrors(prev => [`${key} does not meet the requirements of minimum 3 letters or max 20 letters`,...prev])
        }
      }
      
      if(key ==="password"){
        isValid = validatePassword(createProfileObject[key])
        console.log(isValid)
        if(!isValid){
          setErrors(prev => ['Password doesnt match',...prev])
        }
      }
    }
    if(!isValid){
      return
    }
    console.log(createProfileObject)
    //take an action
  }
console.log(errors)

  return (
    <div className='createProfile_main'>
      <Header />
      <div className='createProfile_frame'>
        <h3 className='createProfile_headline'>Create your profile</h3>
        {/* {isFilePicked ? <img className="profile_pic" src={Profile}/> : <img className="profile_pic" src={files[0]}/>} */}
        <img className="profile_pic" src={Profile}/>
        <form className="createProfile_form">
          <div className='attach_file'>
            <Input 
              customStyles={{backgroundColor:"black", color:"white"}}
              name={"file"}
              type= "file" 
              value={createProfileObject.file}
              placeholder="Add File"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            /> 
            {isFilePicked ? (<div><p>File picked successfully!</p></div>) : <div><p style={{fontSize:"10px"}}>Please pick a file</p></div>}  
          </div>       
          <div className='createProfileForm_name'>
              <div className='first_name_input'>
                <Input
                  name={"firstName"} 
                  value={createProfileObject.firstName}
                  placeholder="First Name"
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                /> 
              </div> 
              <div className='last_name_input'>          
                <Input
                  name={"lastName"} 
                  value={createProfileObject.lastName}
                  placeholder="Last Name"
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
              />    
              </div>       
            </div>
            <Input 
            name={"userName"} 
            value={createProfileObject.userName}
            placeholder="User Name"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            <Input 
              name={"email"} 
              value={createProfileObject.email}
              placeholder="email"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />          
            <Input 
              name={"roll"} 
              value={createProfileObject.roll}
              placeholder="Roll"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />          
            <Input 
              name={"organization"} 
              value={createProfileObject.organization}
              placeholder="Organization"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            /> 
            <div className='create_button'>        
              <Button 
                text={"Create Profile"}
                isLightStyle
                onClick={handleSubmitForm}
              /> 
            </div>        
        </form>
      </div>
      <div className='createProfileError_div'>
            {errors.length > 0 && errors.map(error => <p className='createProfile_error'>{error}</p>)}
          </div> 
    </div>
  )
}

export default CreateProfilePage