import React from 'react';
import { Redirect } from 'react-router';
import { isAuthenticated } from '../../api/auth';

export const HomePage = () => {

    const { token } = isAuthenticated();

    const redirectUser = () => {
        if (!token) {
            return <Redirect to="/authentication/login" />
        }
    }

    return (
        <div>
            <h1>Autenticado !</h1>
            {redirectUser()}
        </div>
    )
}
