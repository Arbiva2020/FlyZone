import React from 'react'
import AuthHeader from '../../components/AuthHeader/AuthHeader'
import SideBar from '../../components/SideBar/SideBar'
import Button from '../../components/Generic/Button/Button'
import UserSideData from '../../components/UserSideData/UserSideData'
import Map from '../../assets/map.png'
import Select from '../../components/Generic/Select/Select'
import './UserMapPage.css'

const UserMapPage = () => {
  return (
    <div className='userMap_main'>
        <AuthHeader />
        <div className='userMap_content'>
            <div className='userMap_sidebar'>
                <SideBar />
            </div>
            <div className='userMap_middle'>
                <div className='userMap_headline'>
                    Map routes and details
                </div>
                <div className='userMap_mapAndData'>
                    <div className='userMap_dataAndSelect'>
                        <div className='userMap_selections'>
                            <Select />
                            <Select />
                            <Select />
                            <Button
                                text="Compare"
                            />
                        </div>
                        <div className='userMap_data'>
                            <div className='userMap_dataHeadline'>Assessment properties</div>
                        </div>
                    </div>
                    <div className='userMap_map'>
                        <img src={Map}/>
                    </div>
                </div>
            </div>
            <div className='userMap_right'>
                <UserSideData />
            </div>
        </div>
        
    </div>
  )
}

export default UserMapPage