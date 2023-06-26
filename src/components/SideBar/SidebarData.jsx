import { AiOutlineDotChart, AiOutlineEye } from "react-icons/ai"
import { HiOutlineClipboardList } from "react-icons/hi"
import { MdQueryStats } from 'react-icons/md'
import { SlMagnifier } from 'react-icons/sl'

export const sidebarData = {
     data: [
        {
            id: 1,
            title: "generate", 
            path: "/generate", 
            icon: <SlMagnifier/>, 
            isActive: false,
        }, 
        {
            id: 2,
            title: "mainView", 
            path: "/mainView", 
            icon: <AiOutlineEye/>, 
            isActive: false,
        }, 
        {
            id: 3,
            title: "userStatistics", 
            path: "/userStatistics", 
            icon: <MdQueryStats/>, 
            isActive: false,
        }, 
        {
            id: 4,
            title: "report", 
            path: "/report", 
            icon: <HiOutlineClipboardList/>, 
            isActive: false,
        }, 
        {
            id: 5,
            title: "ClassStats", 
            path: "/allStats", 
            icon: <AiOutlineDotChart/>, 
            isActive: false,
        }
    ]

}

