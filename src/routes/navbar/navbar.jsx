import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';

import { useContext } from 'react';
import { FormContext } from '../../ContextApi/formContext';
import { BudgetContext } from '../../ContextApi/remainingBudget';

import Addinfo from '../../components/addInformation/addinfo';

export default function Navbar() {
    const { addName, addBudget } = useContext(FormContext)
    const { remainingBudget } = useContext(BudgetContext)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center' }}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, mb: { xs: 1, sm: 0 } }}>
                        Expense Tracker App
                    </Typography>
                    <div sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Typography color="inherit" sx={{ ml: { xs: 1, sm: 2 }, whiteSpace: 'nowrap' }}>Name: {addName}</Typography>
                        <Typography color="inherit" sx={{ ml: { xs: 1, sm: 2 }, whiteSpace: 'nowrap' }}>Monthly Budget: {addBudget ? addBudget : 0} Rs</Typography>
                        <Typography color="inherit" sx={{ ml: { xs: 1, sm: 2 }, whiteSpace: 'nowrap' }}>Remaining Budget: {remainingBudget} Rs</Typography>
                    </div>
                </Toolbar>
            </AppBar>

            <Addinfo />
        </Box>
    );
}