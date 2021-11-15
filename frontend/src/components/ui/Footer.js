import React from 'react';
import logo from './Logo-blanco.png';
import send from './send.png';

export const Footer = () => {
    return (
        <footer className="d-flex justify-content-between align-items-center bg-oscuro text-white px-5 py-4 text-center text-md-start">

            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img src={logo} alt="logo-llamakay" className="mb-4 img-fluid" />
                        <p className="mb-1 text-center">Copyright &copy; 2021 Llamakay.</p>
                        <p className="text-center">Todos los derechos reservados.</p>
                        <div className="d-flex justify-content-center">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="me-4">
                                <i className="fab fa-instagram text-white"></i>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="me-4">
                                <i className="fab fa-twitter text-white"></i>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="me-4">
                                <i className="fab fa-linkedin-in text-white"></i>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="">
                                <i className="fab fa-facebook-square text-white"></i>
                            </a>
                        </div>
                    </div>

                    <div className="offset-md-2 col-md-2 mt-4 mt-md-0">
                        <h5 className="fw-bold">Compañía</h5>
                        <div className="d-flex flex-column">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="mt-3 text-white">Nosotros</a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="mt-3 text-white">Contáctanos</a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="mt-3 text-white">Testimonios</a>
                        </div>
                    </div>
                    <div className="col-md-2 mt-4 mt-md-0 ">
                        <h5 className="fw-bold">Soporte</h5>
                        <div className="d-flex flex-column">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="mt-3 text-white">Ayuda</a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="mt-3 text-white">Términos de uso</a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="mt-3 text-white">Legal</a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="mt-3 text-white">Política de privacidad</a>
                        </div>
                    </div>
                    <div className="col-md-2 mt-4 mt-md-0">
                        <h5 className="fw-bold">¡Mantente al día!</h5>
                        <input type="text" className="form-control shadow border-btn bg-white mt-4" placeholder="e-mail" />
                        <button className="btn btn-secundario mt-4"> <img src={send} alt="enviar" className="position-relative send-btn" /> </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
