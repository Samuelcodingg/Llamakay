import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../ui/Footer';
import { NavbarComponent } from '../ui/NavbarComponent';
import imgLogo from './image 6.png'

export const HomePage = () => {

    return (
        <div>
            <NavbarComponent />
            <div className="w-100">
                <img src="https://www.w3schools.com/howto/img_forest.jpg" alt="Forest" style={{ width: "100%", height: "400px" }} />
            </div>

            <div className="container my-3">
                <div className="row">
                    <form className="col-md-7 py-2 mx-auto d-md-flex justify-content-md-between border container-searching border-dark rounded-form shadow">
                        <div className="form-group">
                            <input type="text" className="form-control fontAwesome border-0 remove-focus" placeholder="&#xf0b1; Cargo o área" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control fontAwesome border-0 remove-focus lugar-input" placeholder="&#xf3c5; Lugar" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="form-control bg-oscuro border-0 text-white rounded-pill just-left-border px-3"><i className="fas fa-search"></i> Buscar Empleos</button>
                        </div>
                    </form>
                </div>

                <div className="container my-4">
                    <h2>Anuncios más recientes</h2>
                    <div className="row border border-dark rounded-plus shadow mt-4 pointer d-flex">
                        <div className="col-md-10 ps-5 py-3">
                            <h5>Por eso friki frikitona</h5>
                            <div className="text-secondary d-flex justify-content-start align-items-center">
                                <p className="mb-0">Gloria S.A</p>
                                <div className="d-flex align-items-center ms-5">
                                    <i className="fas fa-star"></i>
                                    <p className="mb-0">&nbsp; 5.0</p>
                                </div>
                                <p className="mb-0 ms-5">Lima, La Molina</p>
                            </div>
                            <div className="text-secondary mt-2">
                                Requisitos: Sexo: No definido - Egresado.........
                            </div>
                            <p className="mb-0 text-secondary mt-2">Hace 14 horas</p>
                        </div>
                        <div className="col-md-2 my-auto text-center text-md-start">
                            <img src={imgLogo} alt="Logo" className="img-fluid" />
                        </div>
                    </div>

                    <div className="row border border-dark rounded-plus shadow mt-4 pointer d-flex">
                        <div className="col-md-10 ps-5 py-3">
                            <h5>Por eso friki frikitona</h5>
                            <div className="text-secondary d-flex justify-content-start align-items-center">
                                <p className="mb-0">Gloria S.A</p>
                                <div className="d-flex align-items-center ms-5">
                                    <i className="fas fa-star"></i>
                                    <p className="mb-0">&nbsp; 5.0</p>
                                </div>
                                <p className="mb-0 ms-5">Lima, La Molina</p>
                            </div>
                            <div className="text-secondary mt-2">
                                Requisitos: Sexo: No definido - Egresado.........
                            </div>
                            <p className="mb-0 text-secondary mt-2">Hace 14 horas</p>
                        </div>
                        <div className="col-md-2 my-auto text-center text-md-start">
                            <img src={imgLogo} alt="Logo" className="img-fluid" />
                        </div>
                    </div>

                    <div className="row border border-dark rounded-plus shadow mt-4 pointer d-flex">
                        <div className="col-md-10 ps-5 py-3">
                            <h5>Por eso friki frikitona</h5>
                            <div className="text-secondary d-flex justify-content-start align-items-center">
                                <p className="mb-0">Gloria S.A</p>
                                <div className="d-flex align-items-center ms-5">
                                    <i className="fas fa-star"></i>
                                    <p className="mb-0">&nbsp; 5.0</p>
                                </div>
                                <p className="mb-0 ms-5">Lima, La Molina</p>
                            </div>
                            <div className="text-secondary mt-2">
                                Requisitos: Sexo: No definido - Egresado.........
                            </div>
                            <p className="mb-0 text-secondary mt-2">Hace 14 horas</p>
                        </div>
                        <div className="col-md-2 my-auto text-center text-md-start">
                            <img src={imgLogo} alt="Logo" className="img-fluid" />
                        </div>
                    </div>

                    <div className="row border border-dark rounded-plus shadow mt-4 pointer d-flex">
                        <div className="col-md-10 ps-5 py-3">
                            <h5>Por eso friki frikitona</h5>
                            <div className="text-secondary d-flex justify-content-start align-items-center">
                                <p className="mb-0">Gloria S.A</p>
                                <div className="d-flex align-items-center ms-5">
                                    <i className="fas fa-star"></i>
                                    <p className="mb-0">&nbsp; 5.0</p>
                                </div>
                                <p className="mb-0 ms-5">Lima, La Molina</p>
                            </div>
                            <div className="text-secondary mt-2">
                                Requisitos: Sexo: No definido - Egresado.........
                            </div>
                            <p className="mb-0 text-secondary mt-2">Hace 14 horas</p>
                        </div>
                        <div className="col-md-2 my-auto text-center text-md-start">
                            <img src={imgLogo} alt="Logo" className="img-fluid" />
                        </div>
                    </div>
                </div>

                <div className="text-center d-flex justify-content-center">
                    <Link
                        to="/anuncios"
                        className="btn bg-oscuro mt-2 text-white w-300"
                    >
                        Ver más
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    )
}
