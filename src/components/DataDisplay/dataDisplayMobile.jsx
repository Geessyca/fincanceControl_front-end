import React, { useContext } from 'react'
import {FaPlusCircle, FaMinusCircle, FaMoneyCheckAlt} from 'react-icons/fa'
import { ValueContext } from '../../functions/trafficControl';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './dataDisplay_style.css';

export default function DataDisplayMobile(direction){
    const { input, exit, all } = useContext(ValueContext);

    var settings = {
        dots: true,
        infinity: false,
        arrows: false,
        slidesToShow: 1
    };

    return (
        <section className={`dataDisplay_sectionMobile`}>
            <Slider {...settings}>
                <div className={`dataDisplay_container_input`}>
                    <h4 className='dataDisplay_container_title'>Input</h4>
                    <div className='dataDisplay_container_info'>
                        <span className='dataDisplay_container_icon'>
                            <FaPlusCircle />
                        </span>
                        <div className='dataDisplay_container_value'>
                            <h3>{input.toFixed(2)}</h3>
                        </div>
                    </div>
                </div>
                <div className={`dataDisplay_container_exit`}>
                    <h4 className='dataDisplay_container_title'>Exit</h4>
                    <div className='dataDisplay_container_info'>
                        <span className='dataDisplay_container_icon'>
                            <FaMinusCircle />
                        </span>
                        <div className='dataDisplay_container_value'>
                            <h3>{exit.toFixed(2)}</h3>
                        </div>
                    </div>
                </div>
                <div className={`dataDisplay_container_all`}>
                    <h4 className='dataDisplay_container_title'>All</h4>
                    <div className='dataDisplay_container_info'>
                        <span className='dataDisplay_container_icon'>
                            <FaMoneyCheckAlt />
                        </span>
                        <div className='dataDisplay_container_value'>
                            <h3>{all.toFixed(2)}</h3>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
    )
}
