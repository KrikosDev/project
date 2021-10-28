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
import axios from "axios";
import { useMessage } from "../hooks/message.hook";
import M from 'materialize-css';

function Registration() {
    const clearError = useCallback(() => setError(null), [])
    const message = useMessage()
    const [error, setError] = useState();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const checkLength = /[A-Za-z\d]{6,30}/;
    const checkLang = /^[A-Za-z\d]+$/;
    const checkContent = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/;
    let history = useHistory();

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const createUser = async () => {
        try {
            if (checkLength.test(login)) {
                if (
                    checkLang.test(password) &&
                    checkContent.test(password) &&
                    checkLength.test(password)
                ) {
                    if (password === repeatPassword) {
                        await axios
                            .post(`http://localhost:8000/user/createNewUser`, {
                                login,
                                password,
                            })
                            .then((result) => {
                                localStorage.setItem('token', result.data.Token);
                                localStorage.setItem('user_id', result.data.user._id);
                                history.push('/Reception');
                            })
                            .catch((e) => {
                                setError(e.message)
                                throw e
                            })
                    } else {
                        alert('Проверьте правильность введенных данных');
                    }

                } else {
                    alert(
                        `Пароль должен состоять только из латинских букв и иметь хотя бы 1 цифру`
                    );
                }

            } else {
                M.toast({ html: `Привет, Нео`, class: 'modal-trigger' })
            }
        } catch (e) {
            setError(e.message)
            throw e
        }
    }


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
                    name='login'
                    onChange={(e) => setLogin(e.target.value)}
                />

                <p className='p'>
                    Password:
                </p>
                <input
                    type='password'
                    className='inputRegis'
                    placeholder='Password'
                    min="6"
                    name='Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className='p'>Repeat password:</p>
                <input
                    type='password'
                    className='inputRegis'
                    placeholder='repeatPassword'
                    min="6"
                    name='repeatPassword'
                    onChange={(e) => setRepeatPassword(e.target.value)}
                />
                <button id='buttonRegistration' onClick={() => createUser()}>
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

export default Registration