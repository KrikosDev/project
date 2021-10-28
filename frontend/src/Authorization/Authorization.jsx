import React, { useState, useEffect, useCallback } from "react";
import build from '../build.svg'
import './style.css';
import {
    Switch,
    Route,
    Link,
    Redirect,
    useHistory
} from 'react-router-dom';
import axios from 'axios';
import { useMessage } from "../hooks/message.hook";
import M from 'materialize-css';

function Authorization() {
    const clearError = useCallback(() => setError(null), [])
    const message = useMessage()
    const [error, setError] = useState();
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    let history = useHistory();

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const authorizationUser = async () => {
        try {
            await axios
                .post(`http://localhost:8000/user/authorization`, {
                    login,
                    password,
                })
                .then((result) => {
                    localStorage.setItem('user_id', result.data.result._id)
                    localStorage.setItem('token', result.data.Token)
                    history.push('/Reception')
                })
                .catch((e) => {
                    if (e.response.status === 402) {
                        alert('Некорректный пароль')
                    }
                    if (e.response.status === 404) {
                        alert(`Пользователя ${login} не существует, пройдите регистрацию`)
                    }
                })
        } catch (e) {
            setError(e.message)
            throw e
        }
}

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
                    onChange={(e) => setLogin(e.target.value)}
                >
                </input>
                <p className='p'>Password:</p>
                <input
                    type='password'
                    className='inputRegis'
                    placeholder='Password'
                    name='password'
                    onChange={(e) => setPassword(e.target.value)}
                >
                </input>
                <button
                    id='buttonAuthoris'
                    onClick={() => authorizationUser()}
                >
                    Войти
                </button>
                <p id='buttonRegis'><Link to='/Register/Register' className='pRegis'>Зарегистрироваться</Link></p>
            </div>
        </div>
    )
}

export default Authorization