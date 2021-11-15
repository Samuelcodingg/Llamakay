import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './Logo-blanco.png';

export const NavbarComponent = () => {
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
                        <NavLink
                        to="/authentication/login"
                        className="me-md-5 text-decoration-none text-white me-0  mt-3 mt-md-0"  
                        >
                            Ingresar como empresa
                        </NavLink>
                        <NavLink
                            to="/authentication/register"
                            className="me-md-5 text-decoration-none text-white me-0 mt-3 mt-md-0"       
                        >
                            Crear cuenta
                        </NavLink>
                        <NavLink
                            to="/authentication/login"
                            className="me-md-5 text-decoration-none py-2 px-4 bg-white me-0 mt-3 mt-md-0 rounded shadow-lg border-btn"       
                        >
                            Iniciar Sesión
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
