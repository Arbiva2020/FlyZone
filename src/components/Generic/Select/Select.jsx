import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { OutlinedInput } from '@mui/material';
import './Select.css'

const CustomSelect = ({value, title, label="default"}) => {

    const [valueData, setValueData] = React.useState();

    const handleChange = (event) => {
      setValueData(event.target.value);
    };

  return (
    <div className='select_main'>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 140, borderColor:"white"}}>
        <InputLabel id="demo-simple-select-filled-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={valueData}
          style={{ color: 'white' }} 
          onChange={handleChange}
          label={label}
        >
          <MenuItem value={1}>{value}</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default CustomSelect