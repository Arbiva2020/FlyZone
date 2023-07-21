import React, { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import AuthHeader from '../../components/AuthHeader/AuthHeader'
import SideBar from '../../components/SideBar/SideBar'
// import Profile from '../../assets/Profile.png'
import './SingleUserStatistics.css'
import BarChart from '../../components/BarChart/BarChart'
import PieChart from '../../components/PieChart/PieChart'
import LineChart from '../../components/LineChart/LineChart'
import UserSideData from '../../components/UserSideData/UserSideData'
import Button from '../../components/Generic/Button/Button'
import { lineData, pieData, datafake } from '../../dataFake'
import { Chart as ChartJS, Colors } from 'chart.js/auto'

ChartJS.register(
  Colors
  ); 

function SingleUserStatistics() {
  const {id} = useParams()
  console.log(id)
  //console.log(currentUserId)
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
const navigate = useNavigate()

const handleNavigateToUserPage = (id)=>{
  navigate(`/user/${id}/map`)
  console.log(`/user/:${[id]}/map`)
}

// const handleNavigateToUserMap = (id) => {
//   let dynamicPath
//   // if(data.path.includes('[:id]')){
//       dynamicPath = data.path.replace('[:id]', currentUserId)
//       console.log(dynamicPath)
//     // }
// }


  return (
    <div className='singleUser_main'>
      <AuthHeader />
      <div className='singleUser_content'>
        <div className='singleUser_sideContent'>
          <SideBar currentUserId={id}/>
        </div>
        <div className='singleUser_charts'>
          <div className='singleUser_headline'>Users' Statistics</div>
          <div className='singleUser_upper_chart_section'>
            <div className='singleUser_num_left'>
              <div className='singleUser_num_numLeft'>
                <h3>35%</h3>
              </div>
              <p className='singleUser_num_textLeft'>My name is Inigo Montoya</p>
            </div>
            <div className='singleUser_num_middle'>
              <div className='singleUser_num_numMiddle'>
                  <h3>35%</h3>
                </div>
                <p className='singleUser_num_textLeft'>You killed my father</p>
            </div>
            <div className='singleUser_num_right'>
              <div className='singleUser_num_numRight'>
                  <h3>35%</h3>
                </div>
                <p className='singleUser_num_textLeft'>Preper to die</p>
            </div>
          </div>
          <div className='singleUser_middle_chart_section'>
            <div className='singleUser_bar_left'>
              <BarChart chartData={singleuserData} />
            </div>
            <div className='singleUser_bar_right'>
            <LineChart chartData={singleuserLineData} />
            </div>
          </div>
          <div className='singleUser_pie_section'>
            <div className='singleUser_pie_left'><PieChart chartData={singleuserPieData} /></div>
            <div className='singleUser_pie_right'><PieChart chartData={singleuserPieData} /></div>
          </div>
        </div>
        <div className='singleUser_sideData'>
          <UserSideData />
          <Button 
            text="view map data"
            customStyles={{fontSize: "10px", height: "150%", alignSelf:"center", marginTop:"20px"}}
            onClick={handleNavigateToUserPage}
            
          />
        </div>
      </div>
    </div>
  )
}

export default SingleUserStatistics