import React from 'react'
import './UserSideData.css'
import Profile from '../../assets/Profile.png'


const UserSideData = () => {
  return (
    <div className='userSideData_profile '>
            <img src={Profile} className="userSideData_pic"/>
            <div className='userSideData_list'>
              <p>name from BD</p>
              <p>level from BD</p>
              <p>score from BD</p>
            </div>
        </div>
  )
}

export default UserSideData