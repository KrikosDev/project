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

const RegisterDiv = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <div id='registerDiv'>
                <Switch>
                    <Route path='/Reception'  component={Reception}>
                        <Reception />
                    </Route>
                    <Route path='/Authorization' component={Authorization}>
                    <Authorization />
                </Route>
                <Route path='/Register' component={Register}>
                    <Register />
                </Route>
                    <Redirect to='/Authorization' />
                </Switch>
                
            </div>
        )
    }

    return (
        <div id='registerDiv'>
            <Switch>
                <Route path='/Authorization' component={Authorization}>
                    <Authorization />
                </Route>
                <Redirect to='/Authorization' />
            </Switch>
        </div>
    )
    // return (
    //     <div id='registerDiv'>

    //         <Switch>
    //             <Route path='/Register' component={Register} />
    //             <Route path='/Authorization' component={Authorization} />
    //             <Route path='/Reception' component={Reception} />
    //             <Redirect from='/' to='/Authorization/Authorization' />
    //         </Switch>
    //     </div>
    // )
}

export default RegisterDiv