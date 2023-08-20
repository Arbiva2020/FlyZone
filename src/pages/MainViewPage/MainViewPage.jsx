import React,  {useState} from 'react'
import AuthHeader from '../../components/AuthHeader/AuthHeader'
import SideBar from '../../components/SideBar/SideBar'
import { mainViewDatafake, mainViewLineData } from '../../dataFake'
import BarChart from '../../components/BarChart/BarChart'
import LineChart from '../../components/LineChart/LineChart'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import GroupSideData from '../../components/GroupSideData/GroupSideData'
import UpgradeAdd from '../../components/UpgradeAdd/UpgradeAdd'
import './MainViewPage.css'

const MainViewPage = () => {

  const [selectValue, setSelectValue] = React.useState('');

  const handleChange = (event) => {
    setSelectValue(event.target.value);
    console.log(event.target.value)
  };

  const [mainViewData, setMainViewData] = useState({
    labels: mainViewDatafake.map((data) => data.id), 
    datasets: [
      {
        label: "Collisions", 
        data: mainViewDatafake.map((data) => data.collisions),
        backgroundColor: "aqua", 
        borderColor: "white"
      },
      {
        label: "Avg. Score", 
        data: mainViewDatafake.map((data) => data.avgScore),
        backgroundColor: "blue", 
        borderColor: "white"
      },
      {
        label: "Avg. Score", 
        data: mainViewDatafake.map((data) => data.battary),
        backgroundColor: "white", 
        borderColor: "white"
      },
      {
        label: "Avg. Score", 
        data: mainViewDatafake.map((data) => data.points),
        backgroundColor: "pink", 
        borderColor: "white"
      }
    ]
  })

  const [mainLineData, setMainLineData] = useState({
    labels: Object.keys(mainViewLineData),
    datasets: [
      {
        label: mainViewLineData.headline,
        data: Object.values(mainViewLineData), 
        borderColor: "pink",
        backgroundColor: "pink"
      }
    ] 
})

  return (
    <div className='mainView_main'>
      <AuthHeader />
      <div className='mainView_content'>
         <SideBar />
         <div className='mainView_center'>
          <div className='mainView_hedline'>Main View</div>
          <div className='mainView_table'>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="select-test-label" style={{color: "#ffffff"}}>Select group</InputLabel>
                <Select
                  labelId="select-test-label"
                  id="select-test"
                  value={selectValue}
                  label="Assessment type"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1} >Group 1 from db</MenuItem>
                  <MenuItem value={2}>Group 2 from db</MenuItem>
                  <MenuItem value={3}>Group 3 from db</MenuItem>
                  <MenuItem value={4}>Group 4 from db</MenuItem>

                </Select>
              </FormControl>
            <div className='mainView_charts'>
              <div className='mainView_line'><LineChart chartData={mainLineData} /></div>
              <div className='mainView_bar'><BarChart chartData={mainViewData} /></div>
            </div>
            <div className='mainViewButton'>
              <div className='mainView_hedline' style={{marginTop:"0px", }}>Additional data</div>
              <div></div>
            </div>
          </div>
         </div>
         <div className='mainView_right'>
            <GroupSideData />
            <UpgradeAdd />
         </div>
      </div>
    </div>
  )
}

export default MainViewPage