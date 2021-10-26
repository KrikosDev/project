import React from "react";
import build from '../build.svg'
import './style.css';
import {
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';

function Register() {
    return (
        <div class='boxRegister'>
            <div id='divBuild'><img src={build} alt='Нема пикчи' id='build'></img></div>
            <div id='register'>
                <h2 className='regisH2'>
                    Регистрация
                </h2>
                <p className='p'>
                    Login:
                </p>
                <input
                    type='text'
                    className='inputRegis'
                    placeholder='Login'
                    min="6"
                />

                <p className='p'>
                    Password:
                </p>
                <input
                    type='password'
                    className='inputRegis'
                    placeholder='Password'
                    min="6"
                />
                <p className='p'>Repeat password:</p>
                <input
                    type='password'
                    className='inputRegis'
                    placeholder='Password'
                    min="6"
                />
                <button id='buttonRegistration'>
                    Зарегистрироваться
                </button>
                <p id='buttonAuthorization'>
                    <Link to='/Authorization/Authorization' className='pAuthoriz'>
                        Авторизоваться
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Register