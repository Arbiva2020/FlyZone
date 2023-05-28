import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS, 
  BarElement, 
  CategoryScale,
  LinearScale, 
  Tooltip, 
  Legend
} from 'chart.js/auto'
import { Colors } from 'chart.js'

  ChartJS.register(
    Colors
    );

function BarChart ({chartData}) {
  const options ={}
  return <Bar data={chartData} options={options}></Bar>;
}

export default BarChart