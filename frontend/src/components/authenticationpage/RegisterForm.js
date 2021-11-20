import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Swal from 'sweetalert2';
import { authenticate, isAuthenticated, signup } from '../../api/auth';

export const RegisterForm = () => {

    const [values, setValues] = useState({
        correo: '',
        password: '',
        tipo_usuario: '',
        redirecToReferrer: false,
    })

    const { correo, password, tipo_usuario, redirecToReferrer } = values

    const {token} = isAuthenticated();

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const redirectUser = () => {
        if (redirecToReferrer || token ) {
            return <Redirect to='/authentication/login' />
        }
    }

    const clickSubmit = event => {
        event.preventDefault();
        setValues(values);

        if(correo === '' || password === '' || tipo_usuario === ''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, llena todos los campos',
            })

            return;
        }

        if(password.length < 6){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El password debe tener al menos 6 caracteres',
            })
            return;
        }

        signup({ correo, password, tipo_usuario })
            .then(data => {
                if (data.error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Algo ha ocurrido mal',
                    })
                } 
                else {
                    authenticate(data, () => {
                        setValues({
                            ...values,
                            redirecToReferrer: true
                        })
                    })
                }
            })
    }

    return (
        <>
            {redirectUser()}
            <div className="container">
                <div className="row">
                    <form className="col-md-6 mx-auto">
                        <h3 className="text-start">Crear una cuenta</h3>
                        <div className="form-group mt-4">
                            <input 
                                onChange={handleChange('correo')}
                                type="email" 
                                className="form-control remove-focus just-bottom-border" 
                                placeholder="Email" 
                                name="correo"
                                value={correo}
                            />
                        </div>
                        <div className="form-group mt-4">
                            <select
                                className="form-control remove-focus just-bottom-border text-secondary"
                                onChange={handleChange('tipo_usuario')}
                                value={tipo_usuario}
                                name="tipo_usuario"
                            >
                                <option value="">Seleccione su tipo de usuario</option>
                                <option value="1" >Empresa</option>
                                <option value="2">Alumno</option>
                            </select>
                        </div>
                        <div className="form-group mt-4">
                            <input 
                                onChange={handleChange('password')}
                                type="password" 
                                placeholder="Contraseña" 
                                className="form-control remove-focus just-bottom-border" 
                                value={password}  
                                name="password"  
                            />
                        </div>
                        <div className="form-group mt-4">
                            <input type="password" placeholder="Confirmar contraseña" className="form-control remove-focus just-bottom-border" />
                        </div>
                        <div className="form-group mt-4 text-start">
                            <input type="checkbox" />
                            <span> He aceptado los <Link to="/" className="text-primary text-decoration-underline">términos y condiciones</Link> </span>
                        </div>
                        <div className="form-group mt-4">
                            <button 
                                className="w-100 rounded border-btn shadow bg-oscuro text-white py-2 fw-bold"
                                onClick={clickSubmit}
                            >
                                Crear una cuenta
                            </button>
                        </div>
                        <div className="d-flex flex-column my-4">
                            <div className="mt-2">
                                <p
                                    to="/"
                                    className="text-secondary"
                                >
                                    ¿Ya tienes cuenta? <Link to="/authentication/login" className="text-primary text-decoration-underline"> Inicia sesión  </Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
