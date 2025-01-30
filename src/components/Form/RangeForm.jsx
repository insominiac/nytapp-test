import { useState } from "react";
import { Box } from "@mui/material";
import FormControl from '@mui/material/FormControl';

export default function RangeForm({handleChange,range}){
    return (
        <Box className="range-box" sx={{
            display: 'flex',
            flexDirection: {md: 'row' },
            justifyContent:"flex-start",
            alignItems: { xs: 'start', md: 'center' },
            gap: 1,
            overflow: 'auto',
          }}>
        <FormControl variant="standard" className='form' >

        <label style={{fontSize:'medium'}}>Date Range:
        <select style={{marginLeft:'0.5rem',padding:'6px',borderRadius:'5px',fontSize:'medium'}} name="select-range" onChange={handleChange} value={range}>
            <option value="1">Latest</option>
            <option value="7">Past Week</option>
            <option value="30">Past Month</option>

        </select>
        </label>
        </FormControl>

        </Box>
    )
}