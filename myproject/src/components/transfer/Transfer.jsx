import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Badge from '../Badge';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
      <Container  dir="rtl">
<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
          
        <InputLabel id="demo-simple-select-label">العملة</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>دولار امريكي</MenuItem>
          <MenuItem value={20}>ريال سعودي</MenuItem>
          <MenuItem value={30}>دينار بحريني</MenuItem>
        </Select>
        <TextField id="filled-basic" label=" المبلغ" variant="standard" />
        <TextField id="filled-basic" label="اسم العميل" variant="standard" />
        <TextField id="filled-basic" label="رقم الهوية " variant="standard" />
        <TextField id="filled-basic" label=" العنوان" variant="standard" />
        <TextField id="filled-basic" label=" البريد الالكتروني" variant="standard" />
        <TextField id="filled-basic" label=" التاريخ" variant="standard" />
      </FormControl>
    
      <Stack spacing={2} direction="row">
      <br />
      <Button variant="contained">تبديل</Button>
    </Stack>
      
    </Box>
      </Container>
    
  );
}

const Container = styled.div`
    
   
display: flex;
flex-direction: column;
    width: 70%;

    border-bottom-right-radius: 2rem;
    border-top-right-radius: 2rem;
    margin: 0 8rem 1rem 4rem;
    padding-top: 4rem;
    `;

   