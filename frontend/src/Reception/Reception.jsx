import React, { useState } from "react";
import build from '../build.svg'
import Register from "../Register/Register";
import Authorization from '../Authorization/Authorization';
import {
    Switch,
    Route,
    Link,
    Redirect,
    useHistory
} from 'react-router-dom';
import { medics } from '../Constans'
import Sort from '../Sort/Sort'
import './style.css'
import Table from '../Table/Table'
import axios from "axios";

function Reception() {
    const [name, setName] = useState();
    const [doctor, setDoctor] = useState();
    const [date, setDate] = useState();
    const [complaints, setComplaints] = useState();
    const checkLength = /^[:;,\-@0-9a-zA-Zâéè'.\s]{3,235}$/;
    const token = localStorage.getItem('token')
    const history = useHistory()

    if (!token) {
        history.goBack();
    }

    const createTask = async () => {
        if (checkLength.test(name) &&
            checkLength.test(doctor) &&
            checkLength.test(date) &&
            checkLength.test(complaints)
        ) {
            await axios
                .post(`http://localhost:8000/task/createNewTask`, {
                    name,
                    doctor,
                    date,
                    
                })
                .then((result) => {
                    localStorage.setItem('token', result.data.Token);
                    localStorage.setItem('user_id', result.data.user._id);
                    history.push('/Reception');
                })
                .catch((e) => {
                    alert(
                        'Ошибка'
                    )
                })
        } else {
            alert(
                'Должны быть заполнены все поля'
            )
        }
    }

    return (
        <div className='receptionBig'>
            <div id='reception'>
                <div className='receptionMenu'>
                    <p className='pReception'>Имя:</p>
                    <input
                        className='receprionInput'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='receptionMenu'>
                    <p className='pReception'>Врач:</p>
                    <select className='receprionInput'>
                        {medics.map(item => (
                            <option
                                onChange={(e) => setDoctor(e.target.value)}
                            >{item}</option>
                        ))}
                    </select>
                </div>
                <div className='receptionMenu'>
                    <p className='pReception'>Дата:</p>
                    <input
                        type='date'
                        className='receprionInput'
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className='receptionMenu'>
                    <p className='pReception'>Жалобы:</p>
                    <input
                        className='receprionInput'
                        onChange={(e) => setComplaints(e.target.value)}
                    />
                </div>
                <button
                    className='edit'
                    onClick={() => createTask()}
                >Добавить</button>
            </div>
            <div className='receptionMiddle'>
                <Sort />

            </div>
            <Table />
        </div>
    )
}

export default Reception