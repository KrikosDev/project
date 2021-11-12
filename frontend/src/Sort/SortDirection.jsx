import React from "react";
import { sortBy } from '../Constans';

function SortDirection({ setSorting, SortReception, sorting }) {
    return (
        <div className='sortBy'>
            <p className='sortText'>Направление:</p>
            <select
                className='sortInput'
                value={sorting.dir}
                onChange={(e) => {
                    setSorting({ key: sorting.key, dir: e.target.value });
                    SortReception({ key: sorting.key, dir: e.target.value });
                }}
            >
                {sortBy.map((item, index) => (
                    <option
                        key={`${item.id}-${index} направление`}
                        value={item.key}
                    >
                        {item.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default SortDirection