import React from 'react'
import AuthHeader from '../../components/AuthHeader/AuthHeader'
import SideBar from '../../components/SideBar/SideBar'
import "./UsersStatisticsPage.css"

const UsersStatisticsPage = () => {
  return (
    <div>
      <div className='users_main'>
      <AuthHeader />
      <div className='users_content'>
        <div className='users_sideContent'>
          <SideBar />
        </div>
          <div className='users_data'>
            <div className='users_headline'>Users Stats</div>
            <div className='users_chart'>chart</div>
        </div>
        <div className='users_summary'>
            <p className='users_summary_total'>Total users: {}</p>
            <p className='users_summary_total'>Score avg. : {}</p>
            <p className='users_summary_total'>Level avg. : {}</p>
            <p className='users_summary_total'>Total drone losses: {}</p>
          </div>
      </div>
    </div>
    </div>
  )
}

export default UsersStatisticsPage