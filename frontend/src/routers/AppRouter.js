import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { AuthenticationPage } from '../components/authenticationpage/AuthenticationPage';
import { RegisterEmpPage } from '../components/authenticationpage/RegisterEmpPage';
import { HomePage } from '../components/homepage/HomePage';
import { PerfilPage } from '../components/perfilpage/PerfilPage';

export const AppRouter = () => {
    
    return (
        <Router>

            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/authentication/:type" component={AuthenticationPage} />
                    <Route exact path="/reg-emp" component={RegisterEmpPage} />
                    <Route exact path="/perfil" component={PerfilPage} />
                </Switch>
            </div>

        </Router>
    )   
}
