import React, { useEffect } from 'react'
import { Redirect } from 'react-router';
import { isAuthenticated } from '../../api/auth';
import { NavbarComponent } from '../ui/NavbarComponent';
import { Footer } from '../ui/Footer';
import { getUser } from '../../api/user';

export const PerfilPage = () => {

    const { token, alumno, empresa } = isAuthenticated();

    const redirectUser = () => {
        if (!token) {
            return <Redirect to="/login" />
        }
    }

    const loadDataUser = () => {
        getUser({alumno, empresa }).then(data => {
            console.log(data);
        })
    }

    useEffect(() => {
        loadDataUser();
    }, []);

    return (
     
        <div>
            {redirectUser()}
            <NavbarComponent />
            <h1>PerfilPage</h1>

            <Footer />
        </div>
    )
}
