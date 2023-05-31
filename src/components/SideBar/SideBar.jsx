import React, { useState } from 'react'
import './SideBar.css'
import sidebarData from "../SideBar/SidebarData"
import { Link } from 'react-router-dom'
import { AiOutlineDotChart, AiOutlineEye } from "react-icons/ai"
import { HiOutlineClipboardList } from "react-icons/hi"
import { MdQueryStats } from 'react-icons/md'
import { SlMagnifier } from 'react-icons/sl'

const SideBar = () => {
    const [sidebarStyle, setSidebarStyle] = useState({})

    // const handelSidebarStyle = (id) => {
    //     // e.preventDefault();
    //     setSidebarStyle(sidebarStyle => ({
    //         [id]: !sidebarStyle[id],
    //     }));
    // };
    
    const handleStyle = (e) => {
        e.preventDefault();
        setSidebarStyle(sidebarStyle => !sidebarStyle)
        // setSidebarCancelStyle(sidebarCancelStyle => !sidebarCancelStyle)
        console.log(eventKey)
    };

   
  

  return (
    <div className='sidebar_main'>
        <div className='sidebar_menu'>
            {/* {sidebarData.map((item) => (
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
            <div eventKey="userStatistics" className='sidebar_icon_div' onClick={handleStyle}>
                <Link className='sidebar_link'><MdQueryStats className='sidebar_icon'/></Link>
            </div>
            <div eventKey="report" className='sidebar_icon_div' onClick={handleStyle}>
                <Link className='sidebar_link'><HiOutlineClipboardList className='sidebar_icon'/></Link>
            </div>
            <div eventKey="ClassStats" className='sidebar_icon_div' onClick={handleStyle}>
                <Link className='sidebar_link'><AiOutlineDotChart className='sidebar_icon'/></Link>
            </div>

        </div>
    </div>
  )
}

export default SideBar