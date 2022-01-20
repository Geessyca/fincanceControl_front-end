import React, { useContext, useState, useEffect } from 'react'
import { ExtractContext } from '../../functions/extractControl';
import { Box } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { FaExclamationTriangle } from "react-icons/fa";
import './extract_style.css'

export default function Extract(){
    const { extract } = useContext(ExtractContext);
    const [page, setPage] = useState(1);
    const [list, setList] = useState(extract);
    const itemsPerPage = 6;
    const [noOfPages, setNoOfPages] = useState(
        Math.ceil(extract.length / itemsPerPage)
    );
    useEffect(() => {
        setPage(1);
        setNoOfPages(Math.ceil(extract.length / itemsPerPage));
        setList(extract);
    }, [extract]);

    useEffect(() => {
        setPage(1);
    }, [list]);
    const handleChange = (event, value) => {
        setPage(value);
    };
    return (
        <section className='extract_section'>
            {extract.length>0 ? <>
            <div className='extract_container_title'>
                <p>Data</p>
                <p>Description</p>
                <p>Amount</p>
            </div>
            {extract.slice((page - 1) * itemsPerPage, page * itemsPerPage).map(function (obj) {
                return <div className='extract_container_table'>
                    <div className='extract_container_data'>{obj.data}</div>
                    <div className='extract_container_name'>{obj.desc}<span>{obj.valueType}</span></div>
                    <div className='extract_container_value'>{obj.ty + obj.val}</div>
                </div>})}
            {extract.length > 8 && <div className={'pagination'}>
             <Box component="span">
                    <Pagination
                        count={noOfPages}
                        page={page}
                        onChange={handleChange}
                        defaultPage={1}
                        size="large"
                        showFirstButton
                        showLastButton
                    />
                </Box>
            </div>}
            </>:
            <div className='extract_container_modal'>
                <p>No data!</p>
                <span><FaExclamationTriangle /></span>
            </div>}
       </section>
    )
}
