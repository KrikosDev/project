import React, { useState } from "react";
import {
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import deleteIcon from '../deleteIcon.svg'
import './style.css'

function DateFilter({ setIcon }) {
    return (
        <div className='DateFilterDiv'>
            <p className='dateText'>с:</p>
            <input
                type='date'
                className='dateInput'
            />
            <p className='dateText'>по:</p>
            <input
                type='date'
                className='dateInput'
            />
            <button className='filterButton'>Фильтровать</button>
            <img
                src={deleteIcon}
                alt='Пикчи нет'
                className='deleteIcon'
                onClick={() => setIcon(true)}
            />
        </div>
    )
}

export default DateFilter