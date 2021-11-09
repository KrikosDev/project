import React, { useEffect, useState } from "react";
import {
    Switch,
    Route,
    Link,
    Redirect,
    useHistory
} from 'react-router-dom';
import Reception from '../Reception/Reception';
import './style.css'
import { medics } from '../Constans'

function ModalEdit({ setModalDeleteFlag, onClickRemove, editId }) {

    return (
        <div className='darkDiv'>
            <div className='mainDeleteDiv'>
                <div className='headDeleteDiv'>
                    <p className='headDeleteP'>Удалить приём</p>
                </div>
                <div className='middleDeleteDiv'>
                    <p className='middleDeleteP'>Вы действительно хотите удалить приём?</p>
                </div>
                <div className='footerDeleteDiv'>
                    <button
                    onClick={() => setModalDeleteFlag(false)}
                        className='footerButtonDelete1'
                    >Cancel</button>
                    <button
                        className='footerButtonDelete2'
                        onClick={() => onClickRemove(editId)}
                    >Delete</button>
                </div>
            </div>
        </div>
    )

}

export default ModalEdit