import React from "react";
import './style.css'
import bandAid from '../band-aid.svg'

function Header() {
    return (
        <div id='header'>
            <img src={bandAid} alt='Пикчи нет' className='bandAid'></img>
            <h1>Зарегестрироваться в системе</h1>
        </div>
    )
}

export default Header