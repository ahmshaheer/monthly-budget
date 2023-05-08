import { useContext, useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { FormControl, FormLabel } from '@mui/material';

import { FormContext } from '../../ContextApi/formContext';
import { BudgetContext } from '../../ContextApi/remainingBudget';

import ReactHtmlTableToExcel from 'react-html-table-to-excel';
import './xlsxs.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    marginTop: 10,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ShowingInfo = () => {
    const { addBudget } = useContext(FormContext)
    const { remainingBudget, setremainingBudget } = useContext(BudgetContext)
    const [totalCost, setTotalCost] = useState(0)
    const [formValues, setFormValues] = useState({
        itemList: '',
        price: ''
    })

    const [inputArr, setInputArr] = useState([])

    const eventFinder = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    let { itemList, price } = formValues
    const clickToShow = () => {
        if (formValues.itemList && formValues.price) {
            setInputArr([...inputArr, { itemList, price }])
            setFormValues({ itemList: '', price: '' })
            setTotalCost(totalCost + parseFloat(price));
            setremainingBudget(addBudget - totalCost - parseFloat(price));
        } else {
            alert('Add in directory')
        }



    }

    const deleteIt = useCallback((index) => {
        setInputArr(prevInputArr => {
            const newArr = [...prevInputArr];
            const deletedItem = newArr.splice(index, 1)[0];
            return newArr;
        });
        const deletedItemPrice = parseFloat(inputArr[index].price);
        setTotalCost(totalCost - deletedItemPrice);
        setremainingBudget(addBudget - totalCost + deletedItemPrice);
    }, [setInputArr, inputArr, totalCost, addBudget, setremainingBudget]);

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
            autoComplete="off">
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Add Item"
                    name='itemList'
                    value={itemList}
                    onChange={eventFinder}
                    sx={{ width: '100%', maxWidth: '25ch' }}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Price"
                    type="number"
                    name='price'
                    value={price}
                    onChange={eventFinder} sx={{ width: '100%', maxWidth: '25ch' }}
                />

                <Button size="small" sx={{ marginTop: 3 }}
                    onClick={clickToShow}
                >Add</Button>
            </div>

            <table border={1}
                width="100%"
                cellPadding={10}
                id="table"
                sx={{
                    mt: 3,
                    display: 'table',
                    '@media (max-width: 600px)': {
                        display: 'block',
                    },
                }}>
                <thead>
                    <tr>
                        <td>Items No. </td>
                        <td>Items List</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {inputArr.map((info, index) => {
                        return (
                            <tr key={index} >
                                <td>{index + 1}</td>
                                <td>{info.itemList}</td>
                                <td>{info.price}</td>
                                <td style={{ border: 0 }}>
                                    <Button onClick={() => deleteIt(index)} type="button" >Delete</Button>
                                </td>
                            </tr>)
                    })}
                </tbody>
            </table>
            <ReactHtmlTableToExcel
                buttonText="Download as Excel File"
                table="table"
                filename="Monthly Budget"
                className="excel-download-button"
            >
            </ReactHtmlTableToExcel>
        </Box >
    );
}

export default ShowingInfo;
