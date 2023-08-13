import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { OutlinedInput } from '@mui/material';
import './Select.css'

const SelectMap = ({value, onChange, title, label="default"}) => {

    const [valueData, setValueData] = React.useState();

    const handleChange = (event) => {
      setValue(event.target.value);
    };

  return (
    <div className='select_main'>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120, backgroundColor: "rgb(45, 43, 43)" }}>
        <InputLabel id="demo-simple-select-filled-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={value}
          onChange={onChange}
          label={label}
          color="secondary"
          MenuProps={{
            sx: {
              "&& .MuiMenuItem-root":{
                backgroundColor: "pink",
                color: "black"
              }
            }
           
          }}
          // onChange={handleChange}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value={value}>{value}</MenuItem>
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectMap