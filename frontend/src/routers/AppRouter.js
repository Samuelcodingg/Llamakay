import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { AuthenticationPage } from '../components/authenticationpage/AuthenticationPage';
import { HomePage } from '../components/homepage/HomePage';

export const AppRouter = () => {
    return (
        <Router>

            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/authentication/:type" component={AuthenticationPage} />
                </Switch>
            </div>

        </Router>
    )   
}
