import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import SplashScreenPage from "../pages/SplashScreenPage/SplashScreenPage"
// import AboutPage from "../pages/AboutPage/AboutPage"
// import AuthPage from "../pages/AuthPage/AuthPage"
// import ContactPage from "../pages/ContactPage/ContactPage"
// import CreateProfilePage from "../pages/CreateProfilePage/CreateProfilePage"
// import ErrorPage from "../pages/ErrorPage/ErrorPage"
// import MainViewPage from "../pages/MainViewPage/MainViewPage"
// import PaymentProgramPage from "../pages/PaymentProgramPage/PaymentProgramPage"
// import PreAuthPage from "../pages/PreAuthPage/PreAuthPage"
// import SubscriptionPage from "../pages/SubscriptionPage/SubscriptionPage"
// import UsersStatisticsPage from "../pages/UsersStatisticsPage/UsersStatisticsPage"
// import SingleUserStatistics from "../pages/SingleUserStatistics/SingleUserStatistics"

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="splash" element={<SplashScreenPage />}/>
            {/* <Route path="about" element={<AboutPage />}/> */}
            {/* <Route path="auth" element={<AuthPage />}/> */}
            {/* <Route path="contact" element={<ContactPage />}/> */}
            {/* <Route path="createProfile" element={<CreateProfilePage />}/> */}
            {/* <Route path="error" element={<ErrorPage />}/> */}
            {/* <Route path="mainView" element={<MainViewPage />}/> */}
            {/* <Route path="paymentProgram" element={<PaymentProgramPage />}/> */}
            {/* <Route path="preAuth" element={<PreAuthPage />}/> */}
            {/* <Route path="subscribe" element={<SubscriptionPage />}/> */}
            {/* <Route path="usersStats" element={<UsersStatisticsPage />}/> */}
            {/* <Route path="singleUser" element={<SingleUserStatistics />}/> */}
        </Routes>
    </BrowserRouter>
  )
}

export default Router