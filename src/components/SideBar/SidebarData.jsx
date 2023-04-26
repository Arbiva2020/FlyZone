import React, { useState } from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'
import { AiOutlineDotChart, AiOutlineEye } from "react-icons/ai"
import { HiOutlineClipboardList } from "react-icons/hi"
import { MdQueryStats } from 'react-icons/md'
import { SlMagnifier } from 'react-icons/sl'

const SidebarData = () => {
  return (
    {
        title: "search", 
        path: "", 
        icon: <SlMagnifier/>, 
        className: "className={sidebarStyle ? 'sidebar_icon_div' : 'sidebar_icon_div_active'}"
    }, 
    {
        title: "mainView", 
        path: "/mainView", 
        icon: <AiOutlineEye />, 
        className: "className={sidebarStyle ? 'sidebar_icon_div' : 'sidebar_icon_div_active'}"
    }, 
    {
        title: "userStatistics", 
        path: "/userStatistics", 
        icon: <MdQueryStats />, 
        className: "className={sidebarStyle ? 'sidebar_icon_div' : 'sidebar_icon_div_active'}"
    }, 
    {
        title: "report", 
        path: "/reports", 
        icon: <HiOutlineClipboardList />, 
        className: "className={sidebarStyle ? 'sidebar_icon_div' : 'sidebar_icon_div_active'}"
    }, 
    {
        title: "ClassStats", 
        path: "/allStats", 
        icon: <AiOutlineDotChart />, 
        className: "className={sidebarStyle ? 'sidebar_icon_div' : 'sidebar_icon_div_active'}"
    }
  )
}

export default SidebarData