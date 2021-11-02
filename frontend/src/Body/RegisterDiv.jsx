import React from "react";
import Register from "../Register/Register";
import Authorization from '../Authorization/Authorization';
import Reception from '../Reception/Reception'
import {
    Switch,
    Route,
    Link,
    Redirect,
    useHistory
} from 'react-router-dom';

import './style.css'

const RegisterDiv = () => {
    const history = useHistory()
    const test = localStorage.getItem('token')
    console.log(test);

    // if (test) {
    //     return (
    //         <div id='registerDiv'>
    //             <Switch>
    //                 <Route path='/Reception' component={Reception}>
    //                     <Reception />
    //                 </Route>
    //                 <Route path='/Authorization' component={Authorization}>
    //                     <Authorization />
    //                 </Route>
    //                 <Redirect to='/Reception' />
    //             </Switch>
    //         </div>
    //     )
    // } 
        return (
            <div id='registerDiv'>
                <Switch>
                    <Route path='/Authorization' component={Authorization}>
                        <Authorization />
                    </Route>
                    <Route path='/Register' component={Register}>
                        <Register />
                    </Route>
                    <Route path='/Reception' component={Reception}>
                        <Reception />
                    </Route>
                    <Redirect to='/Authorization' />
                </Switch>
            </div>
        )

    {/* // return (
    //     <div id='registerDiv'>

    //         <Switch>
    //             <Route path='/Register' component={Register} />
    //             <Route path='/Authorization' component={Authorization} />
    //             <Route path='/Reception' component={Reception} />
    //             <Redirect from='/' to='/Authorization/Authorization' />
    //         </Switch>
    //     </div>
    // ) */}
}

export default RegisterDiv