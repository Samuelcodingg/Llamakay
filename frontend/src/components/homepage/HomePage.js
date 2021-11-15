import React from 'react';
import { Redirect } from 'react-router';
import { isAuthenticated } from '../../api/auth';

export const HomePage = () => {

    const { empresa } = isAuthenticated();

    const redirectUser = () => {
        if (!empresa) {
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
