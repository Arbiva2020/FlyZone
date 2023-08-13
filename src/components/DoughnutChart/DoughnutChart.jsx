import React from 'react'
import {
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend
} from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'
import { Colors } from 'chart.js'

ChartJS.register(
  Colors,  
  ArcElement, 
  Tooltip, 
  Legend
  ); 

function DoughnutChart ({chartData}) {
  // const doughnutLabel = {
  //   id: 'doughnutLabel', 
  //   beforeDatasetsDraw(chart, args, pluginOptions) {
  //     const {ctx, data} = chart;
  //     ctx.save();
  //   }
  // }
  const options = {
    type: 'doughnut',
  // data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Doughnut Chart'
      }
    }
  },
}
  return (
    <Doughnut data={chartData} options={options}></Doughnut>
  )
}

export default DoughnutChart