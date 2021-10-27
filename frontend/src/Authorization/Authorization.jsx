import React, {useState} from "react";
import build from '../build.svg'
import './style.css';
import {
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';

function Register() {
    const [form, setForm] = useState({
        login: '',
        password: ''
    })

    const changeHandler = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    console.log(form)

    return (
        <div class='boxAuthoris'>
            <div id='divBuild'><img src={build} alt='Нема пикчи' id='build'></img></div>
            <div id='register'>
                <h2 className='authorizH2'>Войти в систему</h2>
                <p className='p'>Login:</p>
                <input
                    type='text'
                    className='inputRegis'
                    placeholder='Login'
                    name='login'
                    onChange={changeHandler}
                >
                </input>
                <p className='p'>Password:</p>
                <input
                    type='password'
                    className='inputRegis'
                    placeholder='Password'
                    name='password'
                    onChange={changeHandler}
                >
                </input>
                <button id='buttonAuthoris'>Войти</button>
                <p id='buttonRegis'><Link to='/Register/Register' className='pRegis'>Зарегистрироваться</Link></p>
            </div>
        </div>
    )
}

export default Register