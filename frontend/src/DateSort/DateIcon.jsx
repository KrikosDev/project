import React from "react";
import vector from '../vector.svg'

function DateIcon({setIcon}) {
    return (
        <div className='sortBy'>
            <p className='sortText'>Добавить фильтр по дате:</p>
                <img 
                src={vector} 
                alt='Пикчи нет' 
                className='vector'
                onClick={() => setIcon(false)}
                ></img>
        </div>
    )
}

export default DateIcon