import React, {useState, useEffect} from 'react'
import './GenerateTest.css'
import SideBar from '../../components/SideBar/SideBar'
import AuthHeader from '../../components/AuthHeader/AuthHeader'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Switch from '../../components/Generic/Switch/Switch'
import Select from "../../components/Generic/Select/Select"
import Button from '../../components/Generic/Button/Button'
import '../../fakeData.json'
import { companiesDb } from '../../dataFake'
import { testGeneratingParams } from '../GenerateTest/GenerateTestData'
import {testGeneratingConditions} from '../GenerateTest/GenerateTestData'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import SliderGeneric from '../../components/Generic/SliderGeneric/SliderGeneric';
import { useParams } from 'react-router-dom';

const GenerateTest = () => {
const {id} = useParams
const [testOption, setTestOptiopn] = React.useState("")
const [testMission, setTestMission] = React.useState("")

const handleOptionChange = (event) => {
  setTestOptiopn(event.target.value);
}

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

console.log(companiesDb.map((value)=>Object.values(value.name).join('')))
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
                      <div className='generatetest_select'>
                        <Select  
                          label="Company" 
                          title="Company"
                          value={companiesDb.map((value)=><MenuItem value={testOption}>{value=Object.values(value.name).join('')}</MenuItem>)} 
                          customStyles={{color:"secondary"}}
                          >
                            {/* {companiesDb.map((value)=><MenuItem>{value=Object.values(value.name).join('')}</MenuItem>)} */}
                          </Select>
                        <Select 
                          label="Group" 
                          title="Group"
                          value={companiesDb.map((value)=><MenuItem value={testOption}>{value=Object.values(value.name).join('')}</MenuItem>)} 
                          customStyles={{color:"secondary"}}
                        />
                        <Select 
                          label="Pilot" 
                          title="Pilot"
                          value={companiesDb.map((value)=><MenuItem value={testOption}>{value=Object.values(value.name).join('')}</MenuItem>)} 
                          customStyles={{color:"secondary"}}
                        />
                      </div>
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
                                  <div className='generate_environment'>
                                    <div className='generate_environment_text'>Senario:</div>
                                    <div className='generate_environment_select'><Select /></div>
                                  </div>
                                  <div className='generate_environment'>
                                    <div className='generate_environment_text'>Mission Type:</div>
                                    <div className='generate_environment_select'><Select /></div>
                                  </div>
                                  <div className='generate_environment'>
                                    <div className='generate_environment_text'>Senario:</div>
                                    <div className='generate_environment_select'><Select /></div>
                                  </div>
                          </div>
                        <div className='scaling_right'>
                            <div className='right_headline'>Mission scope</div>
                            <div>
                              <div>{testGeneratingConditions.map((data) => 
                                <div>
                                  {data.title}
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
                                </div>
                                  )}
                              </div>
                            </div>
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
          
                            </div>
                          </div>
                          <div className='generateTest_button'>
                            <Button 
                              text="Generate"
                            />
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