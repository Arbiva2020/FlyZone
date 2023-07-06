import React, { useState } from 'react'
import './SideBar.css'
import {sidebarData} from "../SideBar/SidebarData"
import { Link } from 'react-router-dom'


const SideBar = () => {
    const [sideBarActiveId, setSideBarActiveId] = React.useState(undefined)

   function toggleStyle(id) {
    setSideBarActiveId(id)
  }

  return (
    <div className='sidebar_main'>
        <div className='sidebar_menu'>
            {sidebarData.data.map((data) => (
                <div 
                  title={data.title} 
                  className={sideBarActiveId !== data.id ? 'sidebar_icon_div' : 'sidebar_icon_div_active'} 
                  onClick={() => toggleStyle(data.id)}
                >
                  <Link className='sidebar_link' to={data.path}>{data.icon}</Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SideBar