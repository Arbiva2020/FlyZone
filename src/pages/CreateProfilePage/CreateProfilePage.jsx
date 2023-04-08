import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Header from '../../components/Header/Header'
import './CreateProfilePage.css'
import Profile from '../../assets/Profile.png'

const CreateProfilePage = () => {
  const [image, setImage] = useState()
  const {register, handleSubmit, formState: {errors}} = useForm({Profile});
  console.log(errors)
  const onSubmit =(data)=>{
    console.log(data)
  }

  return (
    <div className='createProfile_main'>
      <Header />
      <div className='createProfile_frame'>
        <h3 className='createProfile_headline'>Create your profile</h3>
        <img className="profile_pic" src={Profile}/>
        <form className="createProfile_form" onSubmit={handleSubmit((data) => {
          console.log(data);
        })}>
          <input {...register("file", {required: true})} placeholder="Upload file" type="file" className='file_input'/>
          <div className='createProfileForm_name'>
            <input {...register("firstName", {required: true})} placeholder="First Name" className='firstname_input'/>
            <input {...register("laststName", {required: true})} placeholder="Last Name" className='lastname_input'/>
          </div>
          <input {...register("userName", {required: true})} placeholder="User Name" className='username_input'/>
          <input {...register("email", {required: true})} placeholder="eMail" className='eMail_input'/>
          <input {...register("organization", {required: true})} placeholder="Organization" className='organization_input'/>
          <input type="submit" className='create_button'/>
        </form>
      </div>
    </div>
  )
}

export default CreateProfilePage