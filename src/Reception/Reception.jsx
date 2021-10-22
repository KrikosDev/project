import React from "react";
import build from '../build.svg'
import Register from "../Register/Register";
import Authorization from '../Authorization/Authorization';
import {
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import { medics } from '../Constans'
import Sort from '../Sort/Sort'
import './style.css'

function Reception() {
    return (
        <div>
            <div id='reception'>
                <div className='receptionMenu'>
                    <p className='pReception'>Имя:</p>
                    <input className='receprionInput'></input>
                </div>
                <div className='receptionMenu'>
                    <p className='pReception'>Врач:</p>
                    <select className='receprionInput'>
                        {medics.map(item => (
                            <option>{item}</option>
                        ))}
                    </select>
                </div>
                <div className='receptionMenu'>
                    <p className='pReception'>Дата:</p>
                    <input type='date' className='receprionInput'></input>
                </div>
                <div className='receptionMenu'>
                    <p className='pReception'>Жалобы:</p>
                    <input className='receprionInput'></input>
                </div>
                <button className='edit'>Добавить</button>
            </div>
            <div className='receptionMiddle'>
                            <Sort />
                            
            </div>
        </div>
    )
}

export default Reception