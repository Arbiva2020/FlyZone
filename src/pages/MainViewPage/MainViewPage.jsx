import React from 'react'
import AuthHeader from '../../components/AuthHeader/AuthHeader'
import SideBar from '../../components/SideBar/SideBar'
import './MainViewPage.css'

const MainViewPage = () => {
  return (
    <div className='mainView_main'>
      <AuthHeader />
      <div className='mainView_content'>
         <SideBar />
         <div>
          <div className='mainView_hedline'>Main View</div>
          <div className='main_table'>
            main table here
          </div>
         </div>
         
      </div>
    </div>
  )
}

export default MainViewPage