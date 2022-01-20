import React, { useContext } from 'react'
import {FaPlusCircle, FaMinusCircle, FaMoneyCheckAlt} from 'react-icons/fa'
import { ValueContext } from '../../functions/trafficControl';
import './dataDisplay_style.css';

export default function DataDisplay(direction){
    const { input, exit, all } = useContext(ValueContext);

    return (
        <section className={`dataDisplay_section ${direction.direction}`}>
           
          <div className={`dataDisplay_container_input ${direction.direction}`}>
              <h4 className='dataDisplay_container_title'>Input</h4>
              <div className='dataDisplay_container_info'>
                <span className='dataDisplay_container_icon'>
                    <FaPlusCircle/>
                </span>
                <div className='dataDisplay_container_value'>
                    <h3>{input.toFixed(2)}</h3>
                </div>
              </div>
          </div>
          <div className={`dataDisplay_container_exit ${direction.direction}`}>
              <h4 className='dataDisplay_container_title'>Exit</h4>
              <div className='dataDisplay_container_info'>
                <span className='dataDisplay_container_icon'>
                    <FaMinusCircle/>
                </span>
                <div className='dataDisplay_container_value'>
                    <h3>{exit.toFixed(2)}</h3>
                </div>
              </div>
          </div>
          <div className={`dataDisplay_container_all ${direction.direction}`}>
              <h4 className='dataDisplay_container_title'>All</h4>
              <div className='dataDisplay_container_info'>
                <span className='dataDisplay_container_icon'>
                    <FaMoneyCheckAlt/>
                </span>
                <div className='dataDisplay_container_value'>
                    <h3>{all.toFixed(2)}</h3>
                </div>
              </div>
          </div>
            
        </section>
    )
}
