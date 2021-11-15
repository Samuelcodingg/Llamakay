import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../ui/Logo.png';


export const LoginForm = () => {
    return (
        <>
            <img src={logo} alt="logo" className="img-fluid" />
            <p>Pensando en tu futuro y en tu carrera profesional</p>
            <div className="container">
                <div className="row">
                    <form className="col-md-6 mx-auto">
                        <div className="form-group mt-5">
                            <input type="email" className="form-control remove-focus just-bottom-border" placeholder="Email" />
                        </div>
                        <div className="form-group mt-4">
                            <input type="password" placeholder="Contraseña" className="form-control remove-focus just-bottom-border" />
                        </div>
                        <div className="form-group mt-4">
                            <button className="w-100 rounded border-btn shadow bg-oscuro text-white py-2 fw-bold">Iniciar sesión</button>
                        </div>
                        <div className="d-flex flex-column my-4">
                            <div className="d-flex justify-content-between ">
                                <Link
                                    to="/register"
                                    className="text-secondary"
                                >
                                    ¿Aún no estás registrado?
                                </Link>
                                <Link
                                    to="/forgotpassword"
                                    className="text-secondary"
                                >
                                    ¿Olvidaste tu contraseña?
                                </Link>
                            </div>
                            <div className="mt-3">
                                <Link
                                    to="/"
                                    className="text-secondary"
                                >
                                    ¿Eres una nueva empresa?
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
