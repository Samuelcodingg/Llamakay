import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { AuthenticationPage } from '../components/authenticationpage/AuthenticationPage';
import { Footer } from '../components/ui/Footer';
import { NavbarComponent } from '../components/ui/NavbarComponent';
import { HomePage } from '../components/homepage/HomePage';

export const AppRouter = () => {
    return (
        <Router>
            {/* <NavbarComponent /> */}

            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/authentication/:type" component={AuthenticationPage} />
                </Switch>
            </div>

            {/* <Footer /> */}
        </Router>
    )   
}
