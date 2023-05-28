import React from 'react'
import {
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend
} from 'chart.js/auto'
import { Pie } from 'react-chartjs-2'
import { Colors } from 'chart.js'

ChartJS.register(
    Colors,  
    ArcElement, 
    Tooltip, 
    Legend
    ); 

function PieChart ({chartData}) {
    const options ={}
  return <Pie data={chartData} options={options}></Pie>;
}

export default PieChart