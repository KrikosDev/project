import React, { useState } from "react";
import './style.css'
import bandAid from '../band-aid.svg'
import {
    Switch,
    Route,
    Link,
    Redirect,
    useHistory
} from 'react-router-dom';

function Header() {
    const history = useHistory();

    const deleteHistory = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user_id')
        history.push("/Authorization")
        // history.goBack();
    }

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
                        <button className='exit' onClick={() => deleteHistory()}>Выход</button>
                    </Route>
                </Switch>
        </div>
    )
}

export default Header