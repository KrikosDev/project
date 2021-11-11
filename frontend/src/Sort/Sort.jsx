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

function Sort({ icon, setIcon, SortReception, setSorting, sorting }) {
    const [flag, setFlag] = useState()

    if (flag !== 'none' && flag !== undefined && icon) {
        return (
            <div className='sortDiv'>
                <SortBy 
                flag={setFlag} 
                SortReception={SortReception}
                setSorting={setSorting}
                sorting={sorting}
                />
                <SortDirection 
                setSorting={setSorting}
                SortReception={SortReception}
                sorting={sorting}
                />
                <DateIcon setIcon={setIcon}
                sorting={sorting}
                />
            </div>
        )
    }
    if (flag !== 'none' && flag !== undefined && !icon || flag === 'none' && !icon ) {
        return (
            <div className='sortDiv'>
                <SortBy 
                flag={setFlag} 
                SortReception={SortReception}
                setSorting={setSorting}
                sorting={sorting}
                />
                <SortDirection 
                setSorting={setSorting}
                SortReception={SortReception}
                sorting={sorting}
                />
            </div>
        )
    }
    if (icon) {
        return (
            <div className='sortDiv'>
                <SortBy 
                flag={setFlag} 
                SortReception={SortReception}
                setSorting={setSorting}
                SortReception={SortReception}
                sorting={sorting}
                />
                <DateIcon 
                setIcon={setIcon} 
                sorting={sorting}
                />
            </div>
        )
    }
    if (!icon) {
        return (
            <div className='sortDiv'>
                <SortBy 
                flag={setFlag} 
                SortReception={SortReception}
                setSorting={setSorting}
                sorting={sorting}
                />
            </div>
        )
    }
}

export default Sort