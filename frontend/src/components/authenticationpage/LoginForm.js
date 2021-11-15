import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import logo from '../ui/Logo.png';


export const LoginForm = () => {

    const [values, setValues] = useState({
        correo_empresa: '',
        password: '',
        redirectToReferrer: false
    });

    const { correo_empresa, password, redirectToReferrer } = values;

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        console.log('values', values);
    };

    const redirectUser = () => {
        if (redirectToReferrer) {
            return <Redirect to='/' />
        }
    }

    return (
        <>
            <img src={logo} alt="logo" className="img-fluid" />
            <p>Pensando en tu futuro y en tu carrera profesional</p>
            <div className="container">
                <div className="row">
                    <form className="col-md-6 mx-auto">
                        <div className="form-group mt-5">
                            <input 
                                onChange={handleChange('correo_empresa')}
                                type="email" 
                                className="form-control remove-focus just-bottom-border" 
                                placeholder="Email"
                                value={correo_empresa}  
                            />
                        </div>
                        <div className="form-group mt-4">
                            <input 
                                onChange={handleChange('password')}
                                type="password" 
                                placeholder="Contraseña" 
                                className="form-control remove-focus just-bottom-border" 
                                value={password}
                            />
                        </div>
                        <div className="form-group mt-4">
                            <button 
                                className="w-100 rounded border-btn shadow bg-oscuro text-white py-2 fw-bold"
                                onClick={clickSubmit}
                            >
                                Iniciar sesión
                            </button>
                        </div>
                        <div className="d-flex flex-column my-4">
                            <div className="d-flex justify-content-between ">
                                <Link
                                    to="/authentication/register"
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
                                    to="/authentication/register"
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
