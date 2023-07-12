import React, {useState, useEffect} from 'react'
import './GenerateTest.css'
import SideBar from '../../components/SideBar/SideBar'
import AuthHeader from '../../components/AuthHeader/AuthHeader'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Switch from '../../components/Generic/Switch/Switch'
import Button from '../../components/Generic/Button/Button'
import { testGeneratingParams } from '../GenerateTest/GenerateTestData'
import {testGeneratingConditions} from '../GenerateTest/GenerateTestData'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import SliderGeneric from '../../components/Generic/SliderGeneric/SliderGeneric';
import Select from '@mui/material/Select';
import { useParams } from 'react-router-dom';

const GenerateTest = () => {
const {id} = useParams
const [testMission, setTestMission] = React.useState("")
const handleMissionChange = (event) => {
  setTestMission(event.target.value);
}

    const marks = [
        {
          value: 0,
          label: '0',
        },
        {
          value: 1,
          label: '1',
        },
        {
          value: 2,
          label: '2',
        },
        {
          value: 3,
          label: '3',
        },
        {
          value: 4,
          label: '4',
        },
        {
          value: 5,
          label: '5',
        },
        {
          value: 6,
          label: '6',
        },
        {
          value: 7,
          label: '7',
        },
        {
          value: 8,
          label: '8',
        },
        {
          value: 9,
          label: '9',
        },
        {
          value: 10,
          label: '10',
        },
      ];

      function valuetext(value) {
        return `Level ${value}`;
      }

      const handleAssignTestToUser = () =>{
        console.log(`test assigned to /generate/${id}`)
        navigate(`/user/${id}`)
      }

      // const handleToggleButton = () => {
      //   if({handleAssignTestToUser}){

      //   }
      // }


  return (
    <div className='generateTest_main'>
        <AuthHeader />
        <div>
            <div className='generateTest_content'>
                <div>
                    <SideBar currentUserId={id}/>
                </div>
                <div className='generateTest_generate'>
                    <div className='generateTest_headline'>
                        Generate Test
                    </div>
                    <div className="genertateTest_scaling">
                      <div className='geberateTest_up'>
                        <div className='scaling_left'>
                          <div className='left_headline'>Environment</div>
                                  {/* <SliderGeneric 
                                      aria-label="small steps"
                                      defaultValue={1}
                                      getAriaValueText={valuetext}
                                      step={1}
                                      min={1}
                                      max={10}
                                      valueLabelDisplay="auto"
                                      marks={true}
                                  /> */}
                          </div>
                        <div className='scaling_right'>
                            <div className='right_headline'>Mission scope</div>
                             <Box sx={{ width: 200 }}> 
                              {testGeneratingConditions.map((data) => (
                                <Slider 
                                  defaultValue={1}
                                  getAriaValueText={valuetext}
                                  step={data.step}
                                  min={data.min}
                                  max={data.max}
                                  marks={data.marks}
                                  disabled={false}
                                  valueLabelDisplay="auto"
                                  aria-label="small steps"
                                />
                              ))} 
                            </Box> 
                              <Box sx={{ width: 200 }}>
                                <div className='genertateTest_slider'>
                                  <div className='genertateTest_parameter'>{'dataTitle'}</div>
                                  <Slider
                                      aria-label="small steps"
                                      defaultValue={1}
                                      getAriaValueText={valuetext}
                                      step={1}
                                      min={1}
                                      max={10}
                                      valueLabelDisplay="auto"
                                      marks={true}
                                  />
                                </div>
                                <div className='genertateTest_slider'>
                                  <div className='genertateTest_parameter'>{'dataTitle'}</div>
                                   <Slider
                                    aria-label="small steps"
                                    defaultValue={1}
                                    getAriaValueText={valuetext}
                                    step={1}
                                    min={1}
                                    max={10}
                                    valueLabelDisplay="auto"
                                    marks={true}
                                />
                                </div>
                              </Box>
                              <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-helper-label">Mission definition</InputLabel>
                                  <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={testMission}
                                    label="Age"
                                    onChange={handleMissionChange}
                                  >
                                    <MenuItem value="">
                                      <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                  </Select>
                                </FormControl>
                            </div>
                          </div>
                          <div className='generateTest_button'>
                            <Button />
                          </div>
                    </div>
                    <div className='geberateTest_down'> 
                      <switch></switch>
                      {handleAssignTestToUser ?  <progress className='genertateTest_progress'></progress> : <Button customStyles={{}} onClick={handleAssignTestToUser}/>} 
                    </div> 
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default GenerateTest