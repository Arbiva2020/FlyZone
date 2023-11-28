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
import { companiesDb, scenarios } from '../../dataFake'
import { testGeneratingParams } from '../GenerateTest/GenerateTestData'
import {testGeneratingConditions} from '../GenerateTest/GenerateTestData'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import SliderGeneric from '../../components/Generic/SliderGeneric/SliderGeneric';
import {FiInfo} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

const GenerateTest = () => {
const {id} = useParams
const [testOption, setTestOptiopn] = React.useState("")
const [testMission, setTestMission] = React.useState("")
const [selectCompany, setSelectCompany] = React.useState("")
const [selectGroup, setSelectGroup] = React.useState("")
const [selectPilot, setSelectPilot] = React.useState("")
const [scenarioOptions, setScenarioOptiopn] = React.useState("")


const handleCompanyChange = (event) => {
  setSelectCompany(event.target.value);
}
console.log(selectCompany)

const handleGroupChange = (event) => {
  setSelectGroup(event.target.value);
}

const handlePilotChange = (event) => {
  setSelectPilot(event.target.value);
}

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
        // navigate(`/user/${id}`)
      }

      // const handleToggleButton = () => {
      //   if({handleAssignTestToUser}){

      //   }
      // }
      const val = companiesDb.map((value)=>Object.values(value.name).join(''))
      console.log(val)
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
                  <div className='generatetest_centerGeneration'>
                    <div className='generatetest_select'>
                        <FormControl>
                          <Select  
                            title="Company"
                            onChange={handleCompanyChange}
                            value={selectCompany}
                            // value={companiesDb.map((value)=><MenuItem >{value=Object.values(value.name).join('')}</MenuItem>)} 
                            customStyles={{color:"secondary"}}
                            labelId="select-main-view-label"
                            id="select-main-view-id"
                            inputProps={{
                              MenuProps: {
                                  MenuListProps: {
                                      sx: {
                                          backgroundColor: 'rgb(45, 43, 43)',
                                          color: "white",
                                      },
                                  }
                              }
                          }}
                          >
                            <MenuItem value="/">
                              <em>None</em>
                            </MenuItem>
                              {companiesDb.map((value)=>{<MenuItem >{Object.values(value.name).join('')}</MenuItem>})}
                            </Select>
                        </FormControl>
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
                    <div className='generate_frames'>
                      <div className="genertateTest_scaling">
                        <div className='geberateTest_up'>
                          <div className='scaling_left'>
                            <div className='left_headline'>Environment parameters:</div>
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
                                      <div className='generate_environment_select'> 
                                        <Select 
                                          label="Choose scenario" 
                                          title="Choose scenario"
                                          value={scenarios.map((value)=><MenuItem value={scenarioOptions}>{value=Object.values(value.scenarioName).join('')}</MenuItem>)} 
                                          customStyles={{color:"secondary"}}
                                        />
                                      </div>
                                    </div>
                                    <div className='generate_environment'>
                                      <div className='generate_environment_text'>Mission Type:</div>
                                      <div className='generate_environment_select'>
                                        <Select 
                                          label="Choose scenario" 
                                          title="Choose scenario"
                                          value={scenarios.map((value)=><MenuItem value={scenarioOptions}>{value=Object.values(value.scenarioName).join('')}</MenuItem>)} 
                                          customStyles={{color:"secondary"}}
                                        />
                                      </div>
                                    </div>
                                    <div className='generate_environment'>
                                      <div className='generate_environment_text'>Map:</div>
                                      <div className='generate_environment_select'  style={{display:"flex", alignItems:"center"}}>
                                        <Select 
                                          label="Choose scenario" 
                                          title="Choose scenario"
                                          value={scenarios.map((value)=><MenuItem value={scenarioOptions}>{value=Object.values(value.scenarioName).join('')}</MenuItem>)} 
                                          customStyles={{color:"secondary"}}
                                        />
                                      <Link className='information_link' to="/mapAndMission">
                                        <sup>
                                          <FiInfo 
                                            style={{fontSize:"100%", color:"white"}}
                                          />
                                        </sup>
                                      </Link> 
                                      </div>
                                    </div>
                            </div>
                          <div className='scaling_right'>
                              <div className='right_headline'>Mission scope parameters:</div>
                              <div>
                                <div className='generate_parameters'>{testGeneratingConditions.map((data) => 
                                  <div className='generate_parameter'>
                                    <div className='generate_text'>
                                      {data.title}
                                    </div>
                                    <Slider 
                                      defaultValue={1}
                                      getAriaValueText={valuetext}
                                      step={data.step}
                                      min={data.min}
                                      max={data.max}
                                      marks={true}
                                      disabled={false}
                                      valueLabelDisplay="auto"
                                      aria-label="small steps"
                                      style={{color: "purple"}}
                                    />
                                  </div>
                                    )}
                                </div>
                              </div>
                              </div>
                            </div>
                            <div className='generateTest_button'>
                              <Button 
                                text="Generate"
                                onClick={handleAssignTestToUser}
                              />
                            </div>
                      </div>
                      <div className="genertateTest_scaling">
                        <div className='geberateTest_up'>
                          <div className='scaling_left'>
                            <div className='left_headline'>Environment parameters:</div>
                                    <div className='generate_environment'>
                                      
                                    </div>
                                    <div className='generate_environment'>
                                      
                                    </div>
                                    <div className='generate_environment'>
                                      
                                    </div>
                            </div>
                          <div className='scaling_right'>
                              <div className='right_headline'>Mission scope parameters:</div>
                              <div>
                                
                              </div>
                              </div>
                            </div>
                          
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
        
    </div>
  )
}

export default GenerateTest