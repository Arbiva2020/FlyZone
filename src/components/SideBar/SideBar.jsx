import React, { useState } from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'
import { AiOutlineDotChart, AiOutlineEye } from "react-icons/ai"
import { HiOutlineClipboardList } from "react-icons/hi"
import { MdQueryStats } from 'react-icons/md'
import { SlMagnifier } from 'react-icons/sl'
// import SidebarData from "./SidebarData.jsx"

const SideBar = () => {
    const [sidebarStyle, setSidebarStyle] = useState(true)
    // const [prevSidebarStyle, setPrevSidebarStyle] = useState(false)

    const handleStyle = (e) => {
        e.preventDefault();
        setSidebarStyle(sidebarStyle => !sidebarStyle)
        console.log(eventKey)
    };

  return (
    <div className='sidebar_main'>
        <div className='sidebar_menu'>
            {/* {SidebarData.map((item) => (
                
                <div title={item.title} className={item.className}>
                    <Link className='sidebar_link'>{item.icon}</Link>
                </div>
                 
            ))} */}
            <div eventKey="search" className={sidebarStyle ? 'sidebar_icon_div' : 'sidebar_icon_div_active'} onClick={handleStyle}>
                <Link className='sidebar_link'><SlMagnifier className='sidebar_icon'/></Link>
            </div>
            <div eventKey="mainView" className={sidebarStyle ? 'sidebar_icon_div' : 'sidebar_icon_div_active'} onClick={handleStyle}>
                <Link className='sidebar_link'><AiOutlineEye className='sidebar_icon'/></Link>
            </div>
            <div eventKey="userStatistics" className='sidebar_icon_div'>
                <Link className='sidebar_link'><MdQueryStats className='sidebar_icon'/></Link>
            </div>
            <div eventKey="report" className='sidebar_icon_div'>
                <Link className='sidebar_link'><HiOutlineClipboardList className='sidebar_icon'/></Link>
            </div>
            <div eventKey="ClassStats" className='sidebar_icon_div'>
                <Link className='sidebar_link'><AiOutlineDotChart className='sidebar_icon'/></Link>
            </div>

        </div>
    </div>
  )
}

export default SideBar