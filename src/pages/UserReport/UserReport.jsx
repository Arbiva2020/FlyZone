import React from 'react'
import './UserReport.css'
import AuthHeader from "../../components/AuthHeader/AuthHeader"; 
import SideBar from "../../components/SideBar/SideBar";
import UserSideData from "../../components/UserSideData/UserSideData"
import Button from "../../components/Generic/Button/Button"
import Input from "../../components/Generic/Input/Input"
import PieChart from "../../components/PieChart/PieChart" 

const UserReport = () => {
  const [pros, setPros] = React.useState('')
  const [cons, setCons] = React.useState('')

    const handleProsChange = (event) =>{
      setPros(event.target.value);
    }

    const handleConsChange = (event) => {
      setCons(event.target.value);
    }


  return (
    <div className='userReport_main'>
        <AuthHeader />
        <div className='userReport_content'>
            <div className='userReport_sidecontent'>
                <SideBar />
            </div>
            <div className='userReport_center'>
              <div className='userReport_headline'>
                UserReport
              </div> 
              <div className='userReport_generateReport'>
                <div className='userreport_top'>
                  <div className='userReport_left'>
                    <div className='userReport_name'>
                      <Input />
                    </div>
                    <div className='userReport_pros'>
                      <textarea className='form_extra' style={{marginLeft:"20px", width:"90%"}} placeholder='pros' name="pros" value={pros} rows="8" cols="50" onChange={(e) => handleProsChange(e.target.value)}></textarea>  
                    </div>
                    <div className='userReport_cons'>
                      <textarea className='form_extra' style={{marginLeft:"20px", width:"90%"}} placeholder='cons' name="cons" value={cons} rows="8" cols="50" onChange={(e) => handleConsChange(e.target.value)}></textarea>  
                    </div>
                  </div>
                  <div className='userReport_right'>
                    <h5 className='userReport_right_headline'>hello</h5>
                    pie charts from user
                    {/* <PieChart />
                    <PieChart /> */}
                  </div>
                </div>
                <div className='userReport_button'>
                  <Button
                    onClick={""}
                    text="Generate"
                  />
                </div>
              </div>
            </div>
            <UserSideData />
        </div>
    </div>
  )
}

export default UserReport