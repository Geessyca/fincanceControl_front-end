import React, { Component } from 'react'
import imageHome from '../../assets/image/finance-control-home.jpg';
import DataDisplay from "../DataDisplay/dataDisplay";
import DataDisplayMobile from '../DataDisplay/dataDisplayMobile';
import './home_style.css';

export default function Home() {
    return (
        <>
            <DataDisplay/>
            <DataDisplayMobile />
            <section className='home_section'>
                <img src={imageHome} />
            </section>
            
        </>
    )
}
