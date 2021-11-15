import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterForm = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <form className="col-md-6 mx-auto">
                        <h3 className="text-start">Crear una cuenta</h3>
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
                            <button className="border-btn shadow rounded bg-white text-secondary fs-ltl px-2 py-1">
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
                                Registrarse con Facebook
                            </button>
                        </div>
                        <div className="form-group mt-4">
                            <input type="email" className="form-control remove-focus just-bottom-border" placeholder="Email" />
                        </div>
                        <div className="form-group mt-4">
                            <input type="password" placeholder="Contraseña" className="form-control remove-focus just-bottom-border" />
                        </div>
                        <div className="form-group mt-4">
                            <input type="password" placeholder="Confirmar contraseña" className="form-control remove-focus just-bottom-border" />
                        </div>
                        <div className="form-group mt-4 text-start">
                            <input type="checkbox" />
                            <span> He aceptado los <Link to="/" className="text-primary text-decoration-underline">términos y condiciones</Link> </span>
                        </div>
                        <div className="form-group mt-4">
                            <button className="w-100 rounded border-btn shadow bg-oscuro text-white py-2 fw-bold">Crear una cuenta</button>
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
