import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import SplashScreenPage from "../pages/SplashScreenPage/SplashScreenPage"
import AboutPage from "../pages/AboutPage/AboutPage"
import LoginPage from '../pages/LoginPage/LoginPage'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import SingleUserStatistics from '../pages/SingleUserStatistics/SingleUserStatistics'
import UsersStatisticsPage from '../pages/UsersStatisticsPage/UsersStatisticsPage'
import ContactPage from '../pages/ContactPage/ContactPage'
import CreateProfilePage from '../pages/CreateProfilePage/CreateProfilePage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import MainViewPage from '../pages/MainViewPage/MainViewPage'
import PaymentProgramPage from '../pages/PaymentProgramPage/PaymentProgramPage'
import SubscriptionPage from '../pages/SubscriptionPage/SubscriptionPage'
import UserReport from '../pages/UserReport/UserReport'
import DemoPage from '../pages/DemoPage/DemoPage'
import GenerateTest from '../pages/GenerateTest/GenerateTest'
import UserMapPage from '../pages/UserMapPage/UserMapPage'
import AddUser from '../pages/AddUser/AddUser'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="splash" element={<SplashScreenPage />}/>
            <Route path="about" element={<AboutPage />}/>
            <Route path="login" element={<LoginPage />}/>
            <Route path="register" element={<RegisterPage />} />
            <Route path="user/:id" element={<SingleUserStatistics />} />
            <Route path="allStats" element={<UsersStatisticsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="createProfile" element={<CreateProfilePage />} />
            <Route path="error" element={<ErrorPage />} />
            <Route path="mainView" element={<MainViewPage />} />
            <Route path="paymentProgram" element={<PaymentProgramPage />} />
            <Route path="subscribe" element={<SubscriptionPage />} />
            <Route path="demo" element={<DemoPage/>} />
            <Route path="report" element={<UserReport/>} />
            <Route path="add" element={<AddUser/>} />
            <Route path="generate/:id" element={<GenerateTest/>} />
            <Route path="map/:id" element={<UserMapPage/>} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router