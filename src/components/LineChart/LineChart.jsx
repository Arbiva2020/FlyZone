import React from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS, 
    LineElement, 
    CategoryScale, // x axis
    LinearScale, // y axis
    PointElement,
    Tooltip, 
    Legend
  } from 'chart.js/auto'

ChartJS.register(
    LineElement, 
    CategoryScale, 
    LinearScale,
    PointElement,
)

function LineChart ({chartData}){
    const options = {}
  return <Line data={chartData} options={options}></Line>
}

export default LineChart