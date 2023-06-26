import React from 'react'
import './GenerateTest.css'
import Input from '../../components/Generic/Input/Input'
import SideBar from '../../components/SideBar/SideBar'
import AuthHeader from '../../components/AuthHeader/AuthHeader'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Switch from '../../components/Generic/Switch/Switch'

const GenerateTest = () => {

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

  return (
    <div className='generateTest_main'>
        <AuthHeader />
        <div>
            <div className='generateTest_content'>
                <div>
                    <SideBar />
                </div>
                <div className='generateTest_generate'>
                    <div className='generateTest_headline'>
                        Generate Test
                    </div>
                    <div className="genertateTest_scaling">
                        <div className='scaling_left'>
                            <div className='left_headline'>Environment</div>
                            <Box sx={{ width: 300 }}>
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
                        </Box>
                        <Switch />
                        </div>
                        <div className='scaling_right'>
                            <div className='right_headline'>Mission scope</div>
                        </div>
                        
                        {/* <switch></switch>
                        <progress></progress> */}
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default GenerateTest