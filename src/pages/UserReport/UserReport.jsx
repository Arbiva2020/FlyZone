import React from 'react'
import './UserReport.css'
import AuthHeader from "../../components/AuthHeader/AuthHeader"; 
import SideBar from "../../components/SideBar/SideBar";
import UserSideData from "../../components/UserSideData/UserSideData"

const UserReport = () => {
  return (
    <div className='userReport_main'>
        <AuthHeader />
        <div className='userReport_content'>
            <div className='userReport_sidecontent'>
                <SideBar />
            </div>
            <div className='userReport_headline'>
                UserReport
            </div>
            <UserSideData />
        </div>
    </div>
  )
}

export default UserReport