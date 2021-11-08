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

function ModalEdit() {

    return (
        <div className='darkDiv'>
            <div className='ModalEdit'>
                <div className='headModalEdit'>
                    <p className='headP'>Изменить приём</p>
                </div>
                <div className='middleModalEdit' >

                </div>
                <div className='footerModalEdit' >

                </div>
            </div>
        </div>
    )

}

export default ModalEdit