import React from "react";
import {sortArr} from '../Constans'
import {
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';

function SortBy({flag}) {
    return (
        <div className='sortBy'>
            <p className='sortText'>Сортировать по:</p>
            <select className='sortInput' onChange={(e) => flag(e.target.value)}>
                        {sortArr.map(item => (
                            <option>{item}</option>
                        ))}
                    </select>
        </div>
    )
}

export default SortBy