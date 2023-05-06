import React, { useState } from 'react'
import AuthHeader from '../../components/AuthHeader/AuthHeader.jsx'
import SideBar from '../../components/SideBar/SideBar.jsx'
import Profile from '../../assets/Profile.png'
import './SingleUserStatistics.css'
import BarChart from '../../components/BarChart/BarChart.jsx'
import { datafake } from '../../dataFake'
import { Colors } from 'chart.js';

function SingleUserStatistics() {
  // Chart.register(Colors);
  const [singleuserData, setSingleuserData] = useState({
    labels: datafake.map((data) => data.id), 
    datasets: [
      {
        label: "Users' collisions", 
        data: datafake.map((data) => data.collisions),
        backgrounColor: ["#ffffff"]
      }
    ]
  })

  return (
    <div className='singleUser_main'>
      <AuthHeader />
      <div className='singleUser_content'>
        <div className='singleUser_sideContent'>
          <SideBar />
        </div>
        <div className='singleUser_charts'>
          <div className='singleUser_headline'>Users' Statistics</div>
          <div className='singleUser_upper_chart_section'><BarChart chartData={singleuserData} /></div>
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