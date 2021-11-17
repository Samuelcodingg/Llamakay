import React from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../../api/auth';
import logo from './Logo-blanco.png';
import { NavLogged } from './NavLogged';
import { NavNotLogged } from './NavNotLogged';

export const NavbarComponent = () => {
    
    const { token } = isAuthenticated();
    
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-oscuro">
            <div className="container-fluid">
                <Link
                    to="/"
                >
                    <img src={logo} alt="logo-llamakay" className="img-fluid" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-md-flex justify-content-md-end" id="navbarNav">
                    <ul className="navbar-nav d-flex align-items-center text-center">
                        { token ? <NavLogged /> : <NavNotLogged /> }
                    </ul>
                </div>
            </div>
        </nav>

    )
}
