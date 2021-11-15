import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './Logo.png';

export const NavbarComponent = () => {
    return (
        <nav className="d-flex justify-content-between align-items-center bg-principal">
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
                        to="/login"
                        className="me-5 text-decoration-none  "  
                        style={({ isActive }) => ({ color: isActive ? 'gray' : 'black' }) }
                    >
                        Ingresar como empresa
                    </NavLink>
                    <NavLink
                        to="/register"
                        className="me-5 text-decoration-none  "       
                        style={({ isActive }) => ({ color: isActive ? 'gray' : 'black' }) }
                    >
                        Crear cuenta
                    </NavLink>
                    <NavLink
                        to="/login"
                        className="me-5 text-decoration-none  py-2 px-4 bg-secundario rounded shadow-lg border-btn"       
                        style={({ isActive }) => ({ color: isActive ? 'gray' : 'black' }) }
                    >
                        Iniciar Sesión
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}
