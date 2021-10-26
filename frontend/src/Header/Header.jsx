import React from "react";
import './style.css'
import bandAid from '../band-aid.svg'
import {
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';

function Header() {
    return (
        <div id='header'>
            <img src={bandAid} alt='Пикчи нет' className='bandAid'></img>
            <Switch>
                    <Route path="/Authorization">
                        <h1>Войти в систему</h1>
                    </Route>
                    <Route path="/Register">
                        <h1>Зарегестрироваться в системе</h1>
                    </Route>
                    <Route path="/Reception">
                        <h1>Приёмы</h1>
                        <button className='exit'>Выход</button>
                    </Route>
                </Switch>
        </div>
    )
}

export default Header