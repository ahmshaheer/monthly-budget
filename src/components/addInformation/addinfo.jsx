import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { FormControl, FormLabel } from '@mui/material';

import ShowingInfo from '../showingInfo/showingInfo';

import { useState } from 'react';

import { useContext } from 'react';
import { FormContext } from '../../ContextApi/formContext';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    marginTop: 10,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const Addinfo = () => {

    const { addName, addBudget, setAddName, setAddBudget } = useContext(FormContext)

    const [show, toggleShow] = useState(true);
    // Finding Words
    const eventFinderName = (e) => {
        setAddName(e.target.value)
    }
    const eventFinderBudget = (e) => {
        setAddBudget(e.target.value)
    }

    function addIt() {
        if (addName && addBudget) {
            toggleShow(!show)
        } else {
            alert('Add Name and Budget Please')
        }
    }
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '100%' },
                maxWidth: 600,
                margin: 'auto',
                padding: '0 10px',

            }}
            noValidate
            autoComplete="off"
        >
            {show && <div sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    onChange={eventFinderName}
                    sx={{ width: '100%', maxWidth: '25ch' }}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Budget"
                    type="number"
                    name='addBudget'
                    onChange={eventFinderBudget}
                    sx={{ width: '100%', maxWidth: '25ch' }}
                />
                <Button size="small" sx={{ marginTop: 3 }}
                    onClick={addIt}
                >Submit</Button>
            </div>}
        </Box >
    );
}

export default Addinfo;
