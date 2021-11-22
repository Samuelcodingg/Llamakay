import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavNotLogged = () => {
    return (
        <>
            <NavLink
                to="/reg-emp"
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
        </>
    )
}
