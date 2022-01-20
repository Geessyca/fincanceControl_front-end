import React, { Component, useContext, useEffect, useState } from 'react';
import { Chart } from "react-google-charts";
import { ExtractContext } from '../../functions/extractControl';
import { FaExclamationTriangle } from "react-icons/fa";
import './graphic_style.css';


export default function Graphic() {
    const { extract } = useContext(ExtractContext);
    var rent = 0;
    var training = 0;
    var food = 0;
    var investments = 0;
    var education = 0;
    var booking = 0;
    for (var i = 0; i < extract.length; i++) {
        switch (extract[i].valueType) {
           
            case 'Rent':
                rent = rent + parseFloat(extract[i].val)
                break;
            case 'Training':
                training = training + parseFloat(extract[i].val)
                break;
            case 'Food':
                food = food + parseFloat(extract[i].val)
                break;
            case 'Investments':
                investments = investments + parseFloat(extract[i].val)
                break;
            case 'Education':
                education = education + parseFloat(extract[i].val)
                break;
            case 'Booking':
                booking = booking + parseFloat(extract[i].val)
                break;
            default:
                console.log('Errado');
        }
    }
    const data = [
        ["Type", "Count"],
        ["Rent", rent],
        ["Training", training],
        ["Food", food],
        ["Investments", investments],
        ["Education", education],
        ["Booking", booking],
    ];
    return (
        <section className='graphic_section'>
            {extract.length > 0 ?
                <><h3 className='graphic_container_title'>graphical representation of the added amounts</h3><Chart
                chartType="PieChart"
                data={data}
                width={"100%"}
                height={"400px"}
            /></>
                : <div className='graphic_container_modal'>
                <p>No data!</p>
                <span><FaExclamationTriangle /></span>
            </div>}
        </section>
        
    )
}
