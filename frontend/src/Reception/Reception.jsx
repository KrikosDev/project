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
import DateFilter from '../DateSort/DateFilter'
import moment from "moment";

function Reception() {
    const [user_id] = useState(localStorage.getItem('user_id'));
    const [name, setName] = useState();
    const [doctor, setDoctor] = useState();
    const [date, setDate] = useState();
    const [complaints, setComplaints] = useState();
    const checkLength = /^[:;,\-@0-9a-zA-Zâéè'.\s]{2,235}$/;
    const token = localStorage.getItem('token')
    const history = useHistory()
    const [icon, setIcon] = useState(true)
    const [currentReception, setCurrentReception] = useState([])
    const [reception, setReception] = useState([])

    const createReception = async () => {
        {
            await axios
                .post(`http://localhost:8000/reception/createNewReception`, {
                    name,
                    doctor,
                    date,
                    complaints,
                    user_id,
                })
                .then((res) => {
                    setCurrentReception(res.data.result)
                    setName('')
                    setDate('')
                    setDoctor('')
                    setComplaints('')
                    console.log(res)
                })
                .catch((e) => {
                    alert(
                        `Ошибка ${e}`
                    )
                })
        }
    }

    if (!token) {
        history.goBack();
    }

    currentReception.map((item, index) => (
        console.log(item)
    ))

    return (
        <div className='receptionBig'>
            <div id='reception'>
                <div className='receptionMenu'>
                    <p className='pReception'>Имя:</p>
                    <input
                        value={name}
                        className='receprionInput'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='receptionMenu'>
                    <p className='pReception'>Врач:</p>
                    <select
                        className='receprionInput'
                        onChange={(e) => setDoctor(e.target.value)}
                        value={doctor}
                    >
                        {medics.map(item => (
                            <option>{item}</option>
                        ))}
                    </select>
                </div>
                <div className='receptionMenu'>
                    <p className='pReception'>Дата:</p>
                    <input
                        value={date}
                        type='date'
                        className='receprionInput'
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className='receptionMenu'>
                    <p className='pReception'>Жалобы:</p>
                    <input
                        value={complaints}
                        className='receprionInput'
                        onChange={(e) => setComplaints(e.target.value)}
                    />
                </div>
                <button
                    className='edit'
                    onClick={() =>
                        name && doctor && date && complaints
                            ? createReception()
                            : alert('Пропущено одно из полей')
                    }
                >
                    Добавить
                </button>
            </div>
            <div className='receptionMiddle'>
                <Sort icon={icon} setIcon={setIcon} />
            </div>
            <div className='dateFilter'>
                {
                    !icon && <DateFilter setIcon={setIcon} />
                }
            </div>
            <Table />
            <div className='tableDiv'>
                <table className='tableReception'>
                    {currentReception.map((item, index) => (
                        <tr className='trTableReception' key={`tr-${index}`}>
                            <th>{item.name}</th>
                            <th>{item.doctor}</th>
                            <th>{`${moment(item.date).format("DD.MM.YYYY")}`}</th>
                            <th>{item.complaints}</th>
                            <th></th>
                        </tr>
                    )
                    )}
                </table>
            </div>
        </div>
    )
}

export default Reception