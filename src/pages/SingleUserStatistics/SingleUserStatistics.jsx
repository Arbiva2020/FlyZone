import React, { useState } from 'react'
import AuthHeader from '../../components/AuthHeader/AuthHeader'
import SideBar from '../../components/SideBar/SideBar'
import Profile from '../../assets/Profile.png'
import './SingleUserStatistics.css'
import BarChart from '../../components/BarChart/BarChart'
import PieChart from '../../components/PieChart/PieChart'
import LineChart from '../../components/LineChart/LineChart'
import { lineData, pieData, datafake } from '../../dataFake'
import { Chart as ChartJS, Colors } from 'chart.js/auto'

ChartJS.register(
  Colors
  ); 

function SingleUserStatistics() {
  const [singleuserData, setSingleuserData] = useState({
    labels: datafake.map((data) => data.id), 
    datasets: [
      {
        label: "Collisions", 
        data: datafake.map((data) => data.collisions),
        backgroundColor: "aqua", 
        borderColor: "white"
      },
      {
        label: "Avg. Score", 
        data: datafake.map((data) => data.avgScore),
        backgroundColor: "blue", 
        borderColor: "white"
      },
      {
        label: "Avg. Score", 
        data: datafake.map((data) => data.battary),
        backgroundColor: "white", 
        borderColor: "white"
      },
      {
        label: "Avg. Score", 
        data: datafake.map((data) => data.points),
        backgroundColor: "pink", 
        borderColor: "white"
      }
    ]
  })

 
  const [singleuserPieData, setSingleuserPieData] = useState({
    labels: Object.keys(pieData), 
    datasets: [
      {
        data: Object.values(pieData), 
        borderColor: [
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
        ],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 206, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
          'rgb(255, 159, 64)',
        ],
        borderWidth:1
      },
    ]
  })

  const [singleuserLineData, setSingleuserLineData] = useState({
    labels: Object.keys(lineData),
    datasets: [
      {
        label: lineData.headline,
        data: Object.values(lineData), 
        borderColor: "pink",
        backgroundColor: "pink"
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
          <div className='singleUser_upper_chart_section'>
            <div className='singleUser_bar_left'>
              <BarChart chartData={singleuserData} />
            </div>
            <div className='singleUser_bar_right'>
              <BarChart chartData={singleuserData} />
            </div>
          </div>
          <div className='singleUser_lower_chart_section'><LineChart chartData={singleuserLineData} /></div>
          <div className='singleUser_pie_section'>
            <div className='singleUser_pie_left'><PieChart chartData={singleuserPieData} /></div>
            <div className='singleUser_pie_right'><PieChart chartData={singleuserPieData} /></div>
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