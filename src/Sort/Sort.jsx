import React from "react";
import {sortArr} from '../Constans'
import {
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';

import './style.css'

function Sort() {
    return (
        <div className='sortDiv'>
            <p className='sortText'>Сортировать по:</p>
            <select className='sortInput'>
                        {sortArr.map(item => (
                            <option>{item}</option>
                        ))}
                    </select>
        </div>
    )
}

export default Sort