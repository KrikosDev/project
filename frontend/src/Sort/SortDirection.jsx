import React, { useState } from "react";
import {sortBy} from '../Constans'
import {
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';

function SortDirection() {
    return (
        <div className='sortBy'>
            <p className='sortText'>Направление:</p>
            <select className='sortInput'>
                        {sortBy.map(item => (
                            <option>{item}</option>
                        ))}
                    </select>
        </div>
    )
}

export default SortDirection