import React, { useState } from "react";
import {
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import deleteIcon from '../deleteIcon.svg'
import './style.css'

function DateFilter({
    setIcon,
    FilterReception,
    startDate,
    endDate,
    setStartDate,
    setEndDate
}) {

    return (
        <div className='DateFilterDiv'>
            <p className='dateText'>с:</p>
            <input
                type='date'
                className='dateInput'
                onChange={(e) => setStartDate(e.target.value)}
            />
            <p className='dateText'>по:</p>
            <input
                type='date'
                className='dateInput'
                onChange={(e) => setEndDate(e.target.value)}
            />
            <button
                className='filterButton'
                onClick={() => FilterReception(startDate, endDate)}
            >Фильтровать</button>
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