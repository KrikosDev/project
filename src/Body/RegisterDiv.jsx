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

import './style.css'

function RegisterDiv() {
    return (
        <div id='registerDiv'>
            <div id='divBuild'><img src={build} alt='Нема пикчи' id='build'></img></div>
            <Switch>
                <Route path='/Register/Register' component={Register} />
                <Route path='/Authorization/Authorization' component={Authorization} />
            </Switch>
        </div>
    )
}

export default RegisterDiv