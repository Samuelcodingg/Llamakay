import React from 'react';
import logo from './Logo.png';
import send from './send.png';

export const Footer = () => {
    return (
        <footer className="d-flex justify-content-between align-items-center bg-principal px-5 py-4 text-center text-md-start">

            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img src={logo} alt="logo-llamakay" className="mb-4" />
                        <p className="mb-1">Copyright &copy; 2021 Llamakay.</p>
                        <p>Todos los derechos reservados.</p>
                        <div className="d-flex">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="me-4">
                                <i className="fab fa-instagram text-black"></i>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="me-4">
                                <i className="fab fa-twitter text-black"></i>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="me-4">
                                <i className="fab fa-linkedin-in text-black"></i>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="me-4">
                                <i className="fab fa-facebook-square text-black"></i>
                            </a>
                        </div>
                    </div>

                    <div className="offset-md-2 col-md-2">
                        <h5 className="fw-bold">Compañía</h5>
                        <div className="d-flex flex-column">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="mt-3">Nosotros</a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="mt-3">Contáctanos</a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="mt-3">Testimonios</a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h5 className="fw-bold">Soporte</h5>
                        <div className="d-flex flex-column">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="mt-3">Ayuda</a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="mt-3">Términos de uso</a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="mt-3">Legal</a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="mt-3">Política de privacidad</a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h5 className="fw-bold">¡Mantente al día!</h5>
                        <input type="text" className="form-control shadow border-btn bg-secundario mt-4" placeholder="e-mail" />
                        <button className="btn btn-secundario mt-4"> <img src={send} alt="enviar" className="position-relative send-btn" /> </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
