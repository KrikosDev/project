import React from "react";
import './style.css';
import {
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';

function Register() {
    return (
        <div id='register'>
            <h2>Войти в систему</h2>
            <p className='p'>Login:</p>
            <input type='text' className='inputRegis' placeholder='Login'></input>
            <p className='p'>Password:</p>
            <input type='password' className='inputRegis' placeholder='Password'></input>
            <buttom id='buttomRegis'>Авторизоваться</buttom>
            <Link to='/Register/Register'><buttom id='buttomAutores'> Зарегестрироваться</buttom></Link>
        </div>
    )
}

export default Register