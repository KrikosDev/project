import React from "react";
import { sortArr } from '../Constans'
import {
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';

function SortBy({ flag, SortReception, setSorting, sorting }) {
    // console.log(sorting);
    return (
        <div className='sortBy'>
            <p className='sortText'>Сортировать по:</p>
            <select
                className='sortInput'
                value={sorting.key}
                onChange={(e) => {
                    flag(e.target.value)
                    setSorting({ key: e.target.value, dir: 'up' });
                    SortReception({ key: e.target.value, dir: 'up' })
                }
                }
            >
                {sortArr.map((item, index) => (
                    <option
                        key={`doctor-${index}`}
                        value={item.key}
                    >
                        {item.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default SortBy