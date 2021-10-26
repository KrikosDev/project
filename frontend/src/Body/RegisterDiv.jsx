import React from "react";
import Register from "../Register/Register";
import Authorization from '../Authorization/Authorization';
import Reception from '../Reception/Reception'
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
            <Switch>
                <Route path='/Register' component={Register} />
                <Route path='/Authorization' component={Authorization} />
                <Route path='/Reception' component={Reception} />
                <Redirect from='/' to='/Authorization/Authorization' />
            </Switch>
        </div>
    )
}

export default RegisterDiv