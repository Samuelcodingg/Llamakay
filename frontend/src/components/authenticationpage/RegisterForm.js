import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
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
            return <Redirect to='/' />
        }
    }

    const clickSubmit = event => {
        event.preventDefault();
        setValues(values);

        if(correo === '' || password === '' || tipo_usuario === ''){
            alert('Todos los campos son obligatorios')
            return;
        }

        if(password.length < 6){
            alert('El password debe tener al menos 6 caracteres')
            return;
        }

        signup({ correo, password, tipo_usuario })
            .then(data => {
                if (data.error) {
                    alert(data.error)
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
                        <div className="btns-container-fg">
                            <div className="d-flex justify-content-between mt-4">
                                <button className="border-btn shadow rounded bg-white text-secondary fs-ltl px-2 py-1">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M29.074 13.3887H28V13.3334H16V18.6667H23.5353C22.436 21.7714 19.482 24 16 24C11.582 24 7.99996 20.418 7.99996 16C7.99996 11.582 11.582 8.00002 16 8.00002C18.0393 8.00002 19.8946 8.76935 21.3073 10.026L25.0786 6.25469C22.6973 4.03535 19.512 2.66669 16 2.66669C8.63663 2.66669 2.66663 8.63669 2.66663 16C2.66663 23.3634 8.63663 29.3334 16 29.3334C23.3633 29.3334 29.3333 23.3634 29.3333 16C29.3333 15.106 29.2413 14.2334 29.074 13.3887Z" fill="#FFC107" />
                                        <path d="M4.20398 9.79402L8.58465 13.0067C9.76998 10.072 12.6406 8.00002 16 8.00002C18.0393 8.00002 19.8946 8.76935 21.3073 10.026L25.0786 6.25469C22.6973 4.03535 19.512 2.66669 16 2.66669C10.8786 2.66669 6.43731 5.55802 4.20398 9.79402Z" fill="#FF3D00" />
                                        <path d="M16 29.3333C19.444 29.3333 22.5733 28.0153 24.9393 25.872L20.8127 22.38C19.429 23.4322 17.7383 24.0013 16 24C12.532 24 9.58734 21.7886 8.478 18.7026L4.13 22.0526C6.33667 26.3706 10.818 29.3333 16 29.3333Z" fill="#4CAF50" />
                                        <path d="M29.074 13.3886H28V13.3333H16V18.6666H23.5353C23.0095 20.1443 22.0622 21.4354 20.8107 22.3806L20.8127 22.3793L24.9393 25.8713C24.6473 26.1366 29.3333 22.6666 29.3333 16C29.3333 15.106 29.2413 14.2333 29.074 13.3886Z" fill="#1976D2" />
                                    </svg>
                                    Registrarse con Google
                                </button>
                                <button className="border-btn shadow rounded bg-white text-secondary fs-ltl px-2 py-1 ms-2 ms-md-0">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_25_77)">
                                            <path d="M30.2339 32.0001C31.2091 32.0001 32 31.2094 32 30.234V1.76612C32 0.790625 31.2091 0 30.2339 0H1.76612C0.7905 0 0 0.790625 0 1.76612V30.234C0 31.2094 0.7905 32.0001 1.76612 32.0001H30.2339Z" fill="#395185" />
                                            <path d="M22.0793 32.0001V19.608H26.2389L26.8616 14.7786H22.0793V11.6951C22.0793 10.2969 22.4676 9.344 24.4728 9.344L27.0301 9.34288V5.0235C26.5876 4.96463 25.0696 4.83313 23.3036 4.83313C19.6164 4.83313 17.0921 7.08375 17.0921 11.217V14.7786H12.9219V19.608H17.0921V32.0001H22.0793Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_25_77">
                                                <rect width="32" height="32" rx="5" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    &nbsp;Registrarse con Facebook
                                </button>
                            </div>
                            <div className="d-flex justify-content-center mt-4">
                                <svg width="56" height="20" viewBox="0 0 56 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.0526 19.468C26.3006 19.468 24.8246 19.036 23.6246 18.172C22.4486 17.284 21.5606 16.132 20.9606 14.716C20.3846 13.3 20.0966 11.788 20.0966 10.18C20.0966 8.57203 20.4086 7.04803 21.0326 5.60803C21.6806 4.14402 22.6166 2.95602 23.8406 2.04402C25.0646 1.13203 26.5406 0.676025 28.2686 0.676025C30.0446 0.676025 31.5206 1.10803 32.6966 1.97202C33.8966 2.83603 34.7846 3.97603 35.3606 5.39202C35.9606 6.80803 36.2606 8.33202 36.2606 9.96402C36.2606 11.596 35.9486 13.144 35.3246 14.608C34.7006 16.048 33.7766 17.224 32.5526 18.136C31.3286 19.024 29.8286 19.468 28.0526 19.468ZM28.0886 17.2C29.0246 17.2 29.8046 16.984 30.4286 16.552C31.0766 16.096 31.5926 15.508 31.9766 14.788C32.3846 14.068 32.6726 13.3 32.8406 12.484C33.0086 11.644 33.0926 10.84 33.0926 10.072C33.0926 9.28003 33.0086 8.47602 32.8406 7.66002C32.6966 6.82002 32.4446 6.05202 32.0846 5.35603C31.7246 4.63603 31.2206 4.06003 30.5726 3.62803C29.9486 3.17203 29.1686 2.94403 28.2326 2.94403C27.2966 2.94403 26.5046 3.17203 25.8566 3.62803C25.2326 4.06003 24.7286 4.63603 24.3446 5.35603C23.9606 6.07603 23.6846 6.85602 23.5166 7.69602C23.3486 8.51202 23.2646 9.30403 23.2646 10.072C23.2646 10.816 23.3486 11.608 23.5166 12.448C23.6846 13.264 23.9486 14.032 24.3086 14.752C24.6926 15.472 25.1966 16.06 25.8206 16.516C26.4446 16.972 27.2006 17.2 28.0886 17.2Z" fill="#8E8E8E" />
                                    <path d="M47.6214 8.23602H55.9374V10.936H47.6214V8.23602Z" fill="#8E8E8E" />
                                    <path d="M0.772949 8.23602H9.08895V10.936H0.772949V8.23602Z" fill="#8E8E8E" />
                                </svg>
                            </div>
                        </div>

                        <div className="form-group mt-4">
                            <input 
                                onChange={handleChange('correo')}
                                type="email" 
                                className="form-control remove-focus just-bottom-border" 
                                placeholder="Email" 
                                value={correo}
                            />
                        </div>
                        <div className="form-group mt-4">
                            <select
                                className="form-control remove-focus just-bottom-border text-secondary"
                                onChange={handleChange('tipo_usuario')}
                                value={tipo_usuario}
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
