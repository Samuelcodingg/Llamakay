import React from 'react';
import { Redirect } from 'react-router';
import { isAuthenticated } from '../../api/auth';
import { Footer } from '../ui/Footer';
import { NavbarComponent } from '../ui/NavbarComponent';

export const HomePage = () => {

    const { token } = isAuthenticated();

    const redirectUser = () => {
        if (!token) {
            return <Redirect to="/authentication/login" />
        }
    }

    return (
        <div>
            <NavbarComponent />
            <h1>Autenticado !</h1>
            {redirectUser()}

            <Footer />
        </div>
    )
}
