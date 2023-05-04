import React from 'react'
import { Bar } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
import { Colors } from 'chart.js';

function BarChart ({chartData}) {
  return <Bar data={chartData} ></Bar>;
}

export default BarChart