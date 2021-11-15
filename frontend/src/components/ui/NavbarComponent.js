import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './Logo-blanco.png';

export const NavbarComponent = () => {
    return (
        <nav className="d-flex justify-content-between align-items-center bg-oscuro">
            <div>
                <Link
                    to="/"
                >
                    <img src={logo} alt="logo-llamakay" />
                </Link>
            </div>
            <div>
                <ul className="navbar mb-0">
                    <NavLink
                        to="/authentication/login"
                        className="me-5 text-decoration-none text-white  "  
                    >
                        Ingresar como empresa
                    </NavLink>
                    <NavLink
                        to="/authentication/register"
                        className="me-5 text-decoration-none text-white  "       
                    >
                        Crear cuenta
                    </NavLink>
                    <NavLink
                        to="/authentication/login"
                        className="me-5 text-decoration-none py-2 px-4 bg-white rounded shadow-lg border-btn"       
                    >
                        Iniciar Sesión
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}
