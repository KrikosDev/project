import React from "react";
import Header from "../Header/Header";
import RegisterDiv from "../Body/RegisterDiv";
import './style.css'
import {
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';

function MainDiv() {
    return (
        <div id='mainDiv'>
            <Header />
            <RegisterDiv/>
        </div>
    )
}

export default MainDiv