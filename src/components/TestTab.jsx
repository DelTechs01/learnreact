//import React from 'react'
import {Checkbox, FormControlLabel, InputLabel, MenuItem, Typography} from '@mui/material'
import {Button} from '@mui/material'
import {RadioGroup} from '@mui/material'
import {FormLabel} from '@mui/material'
import {TextField} from '@mui/material'
import {FormControl} from '@mui/material'
import {Select} from '@mui/material'
import { useState } from 'react'
import {Radio} from '@mui/material'
const Test = () => {
    const[inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
        subscribe: false,
        age:0,
        gender: ''
    });
       const handleChange = (e) => {
            setInputs((prevState) => ({
                ...prevState,
                [e.target.name] : e.target.value,
            }));
       };
    const handleSubmit =  (e) => {
        e.preventDefault()
        console.log(inputs);
    }

    return (
        <div>
            <Typography variant='h5' sx={{color:'red', border:'1px solid #ccc'}}>Welcome to my React Application Development Journey.</Typography>
            <Button onClick={() => alert("Button one Clicked!")} sx={{margin:3}} size='large' variant='contained'>FIRST BUTTON</Button>
            <Button onClick={() => alert("Button two clicked!")} sx={{margin:3}} size='medium' variant='outlined'>SECOND BUTTON</Button>
            <Button onClick={() => alert("Button Three Clicked!")} sx={{margin:3}} size='small' variant='text'>THIRD BUTTON</Button>

            <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:"column"}}>
                <TextField name='name' value={inputs.name} onChange = {handleChange} type='text' placeholder='Name' variant='outlined' sx={{margin:3}}/>
                <TextField name='email' value={inputs.email} type='email' onChange={handleChange} placeholder='Email' variant='standard' sx={{margin:3}}/>
                <TextField name='password' value={inputs.password} type='password' onChange={handleChange} placeholder='Password' variant='filled' sx={{margin:3}}/>

                <formGroup>
                    <FormControlLabel control={<Checkbox onChange={() => setInputs((prev) => ({...prev, subscribe:!inputs.subscribe}))}/>} label='Subscribe To Our NewsLetter.'/>
                    <FormControlLabel disabled control={<Checkbox/>} label="Disabled"/>
                </formGroup>

                <FormControl fullWidth>
                    <InputLabel>Age</InputLabel>
                    <Select name='age' value={inputs.age} label="Age" onChange={handleChange}>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

                <FormControl>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup onChange={handleChange} name="gender">
                        <FormControlLabel value="Female" control={<Radio />} label="Female"/>
                        <FormControlLabel value="Male" control={<Radio />} label="Male"/>
                        <FormControlLabel value= "Other" control={<Radio/>} label="Other"/>
                    </RadioGroup>
                </FormControl>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}
export default Test