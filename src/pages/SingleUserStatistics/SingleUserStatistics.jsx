import React from 'react'
import AuthHeader from '../../components/AuthHeader/AuthHeader'
import SideBar from '../../components/SideBar/SideBar'
import Profile from '../../assets/Profile.png'
import './SingleUserStatistics.css'

const SingleUserStatistics = () => {
  return (
    <div className='singleUser_main'>
      <AuthHeader />
      <div className='singleUser_content'>
        <div className='singleUser_sideContent'>
          <SideBar />
        </div>
        <div className='singleUser_charts'>
          <div className='singleUser_headline'>Users' Statistics</div>
          <div className='singleUser_upper_chart_section'>chart</div>
          <div className='singleUser_lower_chart_section'>more charts</div>
          <div className='singleUser_pie_section'>
            <div className='singleUser_pie_left'>pie</div>
            <div className='singleUser_pie_right'>pie</div>
          </div>
        </div>
        <div className='singleUser_profile'>
            <img src={Profile} className="singleUser_pic"/>
            <div className='singleUser_list'>
              <p>name from BD</p>
              <p>level from BD</p>
              <p>score from BD</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default SingleUserStatistics