import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { authenticate, isAuthenticated, signin } from '../../api/auth';
import logo from '../ui/Logo.png';
import Swal from 'sweetalert2';


export const LoginForm = () => {

    const [values, setValues] = useState({
        correo: '',
        password: '',
        tipo_usuario: '',
        redirectToReferrer: false
    });

    const { token } = isAuthenticated();

    const { correo, password, redirectToReferrer, tipo_usuario } = values;

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        console.log('values', values);

        if(correo === '' || password === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, llena todos los campos',
            })
            return;
        } 

        setValues(values);
        signin({ correo, password, tipo_usuario })
            .then(data => {
                console.log('data', data);
                if (data.error) {
                    console.log('data.error', data.error);
                    if(redirectToReferrer === false){
                        alert('Usuario o contraseña incorrectos');
                    }            
                } else {
                    authenticate(data, () => {
                        setValues({ ...values, redirectToReferrer: true });
                    });
                }
            });
        
    };

    const redirectUser = () => {
        if (redirectToReferrer || token ) {
            return <Redirect to='/' />
        }
    }

    return (
        <>
            {redirectUser()}
            <img src={logo} alt="logo" className="img-fluid" />
            <p>Pensando en tu futuro y en tu carrera profesional</p>
            <div className="container">
                <div className="row">
                    <form className="col-md-6 mx-auto">
                        <div className="form-group mt-5">
                            <input 
                                onChange={handleChange('correo')}
                                type="email" 
                                className="form-control remove-focus just-bottom-border" 
                                placeholder="Email"
                                value={correo}  
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
                            <select
                                className="form-control remove-focus just-bottom-border text-secondary"
                                value={tipo_usuario}
                                onChange={handleChange('tipo_usuario')}
                            >
                                <option value="">Seleccione un tipo de usuario</option>
                                <option value="1">Empresa</option>
                                <option value="2">Estudiante</option>
                            </select>

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
