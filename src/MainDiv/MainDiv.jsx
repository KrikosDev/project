import React from "react";
import Header from "../Header/Header";
import RegisterDiv from "../Body/RegisterDiv";
import './style.css'

function MainDiv() {
    return (
        <div id='mainDiv'>
            <Header />
            <RegisterDiv />
        </div>
    )
}

export default MainDiv