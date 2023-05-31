import React, { useState } from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'
import { AiOutlineDotChart, AiOutlineEye } from "react-icons/ai"
import { HiOutlineClipboardList } from "react-icons/hi"
import { MdQueryStats } from 'react-icons/md'
import { SlMagnifier } from 'react-icons/sl'

const SidebarData = () => {
    let sidebarData = [
        {
            title: "search", 
            path: "", 
            icon: <SlMagnifier/>, 
            isActive: false,
            className: "className={sidebarStyle ? 'sidebar_icon_div' : 'sidebar_icon_div_active'}"
        }, 
        {
            title: "mainView", 
            path: "/mainView", 
            icon: <AiOutlineEye />, 
            isActive: false,
            className: "className={sidebarStyle ? 'sidebar_icon_div' : 'sidebar_icon_div_active'}"
        }, 
        {
            title: "userStatistics", 
            path: "/userStatistics", 
            icon: <MdQueryStats />, 
            isActive: false,
            className: "className={sidebarStyle ? 'sidebar_icon_div' : 'sidebar_icon_div_active'}"
        }, 
        {
            title: "report", 
            path: "/reports", 
            icon: <HiOutlineClipboardList />, 
            isActive: false,
            className: "className={sidebarStyle ? 'sidebar_icon_div' : 'sidebar_icon_div_active'}"
        }, 
        {
            title: "ClassStats", 
            path: "/allStats", 
            icon: <AiOutlineDotChart />, 
            isActive: false,
            className: "className={sidebarStyle ? 'sidebar_icon_div' : 'sidebar_icon_div_active'}"
        }
    ]
    console.log({sidebarData})


  return (
    {}    
    )
}

export default SidebarData