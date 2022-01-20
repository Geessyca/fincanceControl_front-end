import React, { Component } from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

import './header_style.css';

export default function Header({setIdPage}){
    return (
        <section className='header_section'>
            <div className='header_container_name'>
                <h3 onClick={()=>{setIdPage(0)}}>Finance Control</h3>
            </div>
            <div className='header_container_options'>
                <div className='header_container_buttons'>
                    <button onClick={() => { setIdPage(1) }}>To Add</button>
                    <span></span>
                </div>
                <div className='header_container_buttons'>
                    <button onClick={() => { setIdPage(2) }}>Extract</button>
                    <span></span>
                </div>
                <div className='header_container_buttons'>
                    <button onClick={() => { setIdPage(3) }}>Graphic</button>
                    <span></span>
                </div>
            </div>
            <div className='header_container_social'>
                <a href='https://github.com/Geessyca' target='_blank'>
                    <FaGithub/>
                </a>
                <a href='https://www.linkedin.com/in/geessyca' target='_blank'>
                    <FaLinkedinIn/>
                </a>
            </div>
        </section>
    )
}
