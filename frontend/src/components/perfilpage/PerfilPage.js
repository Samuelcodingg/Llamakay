import React from 'react'
import { Redirect } from 'react-router';
import { isAuthenticated } from '../../api/auth';
import { NavbarComponent } from '../ui/NavbarComponent';
import { Footer } from '../ui/Footer';

export const PerfilPage = () => {

    const { token } = isAuthenticated();

    const redirectUser = () => {
        if (!token) {
            return <Redirect to="/login" />
        }
    }

    return (
     
        <div>
            {redirectUser()}
            <NavbarComponent />
            <h1>PerfilPage</h1>

            <Footer />
        </div>
    )
}
