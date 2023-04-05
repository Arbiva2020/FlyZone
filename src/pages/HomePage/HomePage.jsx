import React from 'react'
import "./HomePage.css"
import "../../components/Generic/Button/Button.css"
import Header from '../../components/Header/Header'
import Button from '../../components/Generic/Button/Button'
import Drone1 from '../../assets/Drone1-removebg-preview.png'

const HomePage = () => {
  return (
    <div className='main'>
      <div className='circle1'></div>
      <Header />
      <div className='content'>
        <div className='headlines'>
              <h1 className='main_headline'>FlyZone</h1>
              <h4 className='slogen'>Innovative Drone Technology</h4>
        </div>
        <div className='buttons'>
          <Button name={"Login"} className={"light"}/>
          <Button name={"SignUp"} className={"dark"}/>
        </div>
      </div>
      <div className='drone1'>
        <img src={Drone1}/>
      </div>
      <div className='circle2'></div>
    </div>
  )
}

export default HomePage