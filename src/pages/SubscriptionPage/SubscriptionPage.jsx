import React from 'react'
import Input from '../../components/Generic/Input/Input'
import Button from '../../components/Generic/Button/Button'
import Header from '../../components/Header/Header'
import './SubscriptionPage.css'

const SubscriptionPage = () => {
  return (
    <div className='subscription_main'>
      <Header />
      <h1 className='main_subscription_headline'>Subscriptions & Pricing</h1>
      <div className='subscription_plans'>
        <div className='basic_plan'>
          <div className='basic_frame'>
            <h2 className='headline'>BASIC</h2>
            <h5>3 Scenarios</h5>
            <h5>2 levels</h5>
            <h5>Automated repord</h5>
            <h5>detailed statistics:</h5>
            <h6>Per user</h6>
            <h6>Per class</h6>
            <h2 className='price'>ONLY 50$</h2>
          </div>
          <Button 
            // customStyles={{width:"200%"}}
            text={"Subscribe"}
            isLightStyle
            onClick={''}
          />
        </div>
        <div className='premium_plan'>
          <div className='premium_frame'>
          <h2 className='headline'>PREMIUM</h2>
            <h5>Access to all scenarios</h5>
            <h5>Access to all levels</h5>
            <h5>Automated repord</h5>
            <h5>Full dashboard</h5>
            <h5>detailed statistics:</h5>
            <h6>Per user</h6>
            <h6>Per class</h6>
            <h2 className='price'>ONLY 100$</h2>
          </div>
          <Button 
            text={"Subscribe"}
            isLightStyle
            onClick={''}
          />
        </div>
      </div>
    </div>
  )
}

export default SubscriptionPage