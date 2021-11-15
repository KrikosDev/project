import React from "react";
import Register from "../Register/Register";
import Authorization from '../Authorization/Authorization';
import Reception from '../Reception/Reception'
import {
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import './style.css'

const RegisterDiv = () => {
    const test = localStorage.getItem('token')
    console.log(test);

        return (
            <div id='registerDiv'>
                <Switch>
                    <Route path='/Authorization' component={Authorization}>
                    </Route>
                    <Route path='/Register' component={Register}>
                    </Route>
                    <Route path='/Reception' component={Reception}>
                    </Route>
                    <Redirect to='/Authorization' />
                </Switch>
            </div>
        )
}

export default RegisterDiv