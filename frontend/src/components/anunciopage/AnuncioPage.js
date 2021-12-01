import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../ui/Footer';
import { NavbarComponent } from '../ui/NavbarComponent';
import logo from '../ui/Logo.png';

export const AnuncioPage = () => {
    return (
        <div>
            <NavbarComponent />

            <div className="container-banner-anuncio">
                <div className="py-5">
                    <Link
                        to="/anuncios"
                        className="ms-5 rounded-pill bg-oscuro text-white px-4 py-2"
                    >
                        <i className="fas fa-search"></i> Volver al listado
                    </Link>
                    <div className="container my-4">
                        <h2>Programador backend</h2>
                        <div className="d-flex">
                            <p>Gloria S.A</p>
                            <p className="ms-5">Lima, La Molina</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="bg-oscuro rounded-pill px-3 py-2 text-white d-flex justify-content-between nav-anuncio align-items-center">
                            <div className="bg-white text-black rounded-pill px-4 py-1 pointer" >
                                Oferta
                            </div>
                            <div className="rounded-pill px-4 py-1 pointer">
                                Empresa
                            </div>
                            <div className="rounded-pill px-4 py-1 pointer">
                                Evaluaciones
                            </div>
                            <div className="rounded-pill px-4 py-1 pointer">
                                Avisos similares
                            </div>
                        </div>

                        <div>
                            <h4>Descripción de la oferta</h4>
                            <p>
                                Deserunt cupidatat in reprehenderit ullamco cupidatat nulla. Sunt proident esse aute tempor quis ullamco incididunt proident sunt. Nulla enim sit ut aliqua sint qui duis sunt velit aute. Nulla culpa irure voluptate duis. Ea ullamco adipisicing magna sint deserunt sint anim sunt. Eu aute in velit qui ipsum sit magna pariatur reprehenderit reprehenderit aliqua fugiat proident. Magna cillum nostrud consequat esse excepteur consequat reprehenderit ex.
                            </p>
                        </div>

                        <div>
                            <h4>Requisitos</h4>
                            <p className="mt-4">
                                -Sexo: Femenino <br /> <br />
                                -Edad: 18 años <br /> <br />
                                -Experiencia: 1 año <br /> <br />
                                -Idiomas: Español <br /> <br />
                                -Nivel de estudios: Bachillerato <br /> <br />
                            </p>
                        </div>

                        <div>
                            <h4>Funciones</h4>
                            <p className="mt-4">
                                -Desarrollar aplicaciones web <br /> <br />
                                -Desarrollar aplicaciones móviles <br /> <br />
                                -Desarrollar aplicaciones web <br /> <br />
                                -Desarrollar aplicaciones móviles <br /> <br />
                            </p>
                        </div>

                        <div>
                            <h4>Acerca de Gloria S.A.</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quibusdam.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quibusdam.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quibusdam.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="border border-dark p-3 container-postular bg-white" >
                            <div className="container">
                                <div>
                                    <img src={logo} alt="logo" className="img-fluid" />
                                </div>
                                <div> 
                                    <h5 className="text-center text-secondary">Gloria S.A</h5>
                                    <div className="text-success text-center">
                                        <i className="fas fa-check-circle fs-6"></i> Empresa Verificada 
                                    </div>
                                    <h5>Programador Backend</h5>
                                    <p className="text-secondary">Lima, La Molina</p>
                                    <div className="text-center">
                                        <button
                                            className="bg-oscuro px-4 py-2 rounded-pill text-white border-0"
                                        >
                                            Postular
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
