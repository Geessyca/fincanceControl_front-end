import React, { Component, useContext, useState } from 'react'
import imageInput from '../../assets/image/finance-control-input.jpg';
import DataDisplay from '../DataDisplay/dataDisplay';
import './inputData_style.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { ValueContext } from '../../functions/trafficControl';
import { ExtractContext } from '../../functions/extractControl';
import DataDisplayMobile from '../DataDisplay/dataDisplayMobile';
import { FaExclamationTriangle } from "react-icons/fa";


export default function InputData() {
    const { type, changeValue } = useContext(ValueContext);
    const { changeExtract } = useContext(ExtractContext);
    const [value, setValue] = useState()
    const [valueToken, setValueToken] = useState(false)
    const [description, setDescription] = useState('')
    const [valueType, setValueType] = useState(0)
    const [modal, setModal] = useState(false)
    function submit(){
        if (description == '' || value == null){
            setModal(true)
        }
        else{
        changeExtract(description, valueToken, value, valueType);
        changeValue(value, valueToken);}       
    }
    
    return (
        <>
            {!modal ? <section className='inputData_section'>
                <div className='inputData_container_form'>
                    <DataDisplay direction='column' />
                    
                </div>
                <DataDisplayMobile />
                <div className='inputData_container_image'>
                    <div className='inputData_container_borderImage'>
                        <div>
                            <h3></h3>
                            <div>
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <Input
                                        label="Description"
                                        id="standard-size-normal"
                                        defaultValue={description}
                                        onChange={(e) => { setDescription(e.target.value); }}
                                        variant="standard"
                                        color="secondary"
                                        startAdornment={<InputAdornment position="start">Description</InputAdornment>}
                                    />
                                    
                                    <Input
                                        label="Amount"
                                        id="standard-size-normal"
                                        defaultValue={value} 
                                        onChange={(e) => { setValue(e.target.value); }}
                                        variant="standard"
                                        color="secondary"
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    />
                                
                                    <FormControlLabel
                                        defaultValue={valueToken} 
                                        onChange={(e) => { setValueToken(e.target.checked); }}
                                        control={<Switch color="secondary" />}
                                        label={`${valueToken ? 'Positive cash' : 'Negative cash'}`}
                                        labelPlacement="end"
                                    />
                                    <FormControl fullWidth>
                                        <InputLabel variant="standard" color="secondary">
                                            Type
                                        </InputLabel>
                                        <NativeSelect
                                            defaultValue={valueType}
                                            color="secondary"
                                            onChange={(e) => { setValueType(parseInt(e.target.value)); }}
                                        >
                                            {type.map(function (obj){
                                                return <option value={obj.id}>{obj.type}</option>
                                            })}
                                        </NativeSelect>
                                    </FormControl>
                                    <Button variant="outlined" color="secondary" onClick={()=>{submit()}}>Add</Button>

                                </Box>
                            </div>
                        </div>
                        <img src={imageInput} />
                    </div>
                </div>
            </section>
            :<section className='inputData_modal'>
                <div className='inputData_container_modal'>
                    <button onClick = {()=>{setModal(false)}}>X</button>
                    {description == '' && <p>The field description is empty!</p>}
                    {value == null && <p>The field amount is empty!</p>}
                    <span><FaExclamationTriangle /></span>
                </div>
            </section>}
        </>
        
    )
}
