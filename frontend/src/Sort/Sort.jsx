import React, { useState } from "react";
import { sortArr } from '../Constans'
import {
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import SortBy from './SortBy'
import SortDirection from './SortDirection'
import DateIcon from '../DateSort/DateIcon'

import './style.css'

function Sort({icon, setIcon}) {
    const [flag, setFlag] = useState()

    if (flag !== '' && flag !== undefined && icon){
        return (
            <div className='sortDiv'>
                <SortBy flag={setFlag} />
                <SortDirection />
                <DateIcon setIcon={setIcon} />
            </div>
        )}
    if (flag !== '' && flag !== undefined && !icon){
        return (
            <div className='sortDiv'>
                <SortBy flag={setFlag} />
                <SortDirection />
            </div>
        )}
    if (icon) {    
    return (
        <div className='sortDiv'>
            <SortBy flag={setFlag} />
            <DateIcon setIcon={setIcon} />
        </div>
    )}
    if (!icon) {    
        return (
            <div className='sortDiv'>
                <SortBy flag={setFlag} />
            </div>
        )}
}

export default Sort