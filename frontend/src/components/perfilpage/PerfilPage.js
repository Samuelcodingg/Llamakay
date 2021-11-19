import React, { useEffect } from 'react'
import { Redirect } from 'react-router';
import { isAuthenticated } from '../../api/auth';
import { NavbarComponent } from '../ui/NavbarComponent';
import { Footer } from '../ui/Footer';
import { getUser } from '../../api/user';
import imgProfile from '../homepage/image 6.png';
import { Link } from 'react-router-dom';

export const PerfilPage = () => {

    const { token, alumno, empresa } = isAuthenticated();

    const redirectUser = () => {
        if (!token) {
            return <Redirect to="/" />
        }
    }

    const loadDataUser = () => {
        getUser({alumno, empresa }).then(data => {
            console.log(data);
        })
    }

    useEffect(() => {
        loadDataUser();
    }, []);

    return (
     
        <div>
            {redirectUser()}
            <NavbarComponent />
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4">
                        <div>
                            <div className="d-flex flex-column text-center">
                                <img src={imgProfile} className="img-perfil rounded-circle mx-auto" alt="Responsive image" />
                                
                                <form className="img-upload d-flex justify-content-end me-5">
                                    <label htmlFor="file-input" className="d-flex align-self-end pointer">
                                        <svg className="align-self-end" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.0797 35.25C12.1734 35.25 12.2672 35.2406 12.3609 35.2266L20.2453 33.8438C20.3391 33.825 20.4281 33.7828 20.4938 33.7125L40.3641 13.8422C40.4075 13.7988 40.442 13.7473 40.4655 13.6906C40.489 13.6339 40.5011 13.5731 40.5011 13.5117C40.5011 13.4503 40.489 13.3895 40.4655 13.3328C40.442 13.2761 40.4075 13.2246 40.3641 13.1813L32.5734 5.38594C32.4844 5.29688 32.3672 5.25 32.2406 5.25C32.1141 5.25 31.9969 5.29688 31.9078 5.38594L12.0375 25.2562C11.9672 25.3266 11.925 25.4109 11.9062 25.5047L10.5234 33.3891C10.4778 33.6402 10.4941 33.8986 10.5709 34.142C10.6477 34.3854 10.7826 34.6064 10.9641 34.7859C11.2734 35.0859 11.6625 35.25 12.0797 35.25ZM15.2391 27.075L32.2406 10.0781L35.6766 13.5141L18.675 30.5109L14.5078 31.2469L15.2391 27.075ZM41.25 39.1875H6.75C5.92031 39.1875 5.25 39.8578 5.25 40.6875V42.375C5.25 42.5812 5.41875 42.75 5.625 42.75H42.375C42.5812 42.75 42.75 42.5812 42.75 42.375V40.6875C42.75 39.8578 42.0797 39.1875 41.25 39.1875Z" fill="black"/>
                                        </svg>
                                    </label>
                                    <input type="file" className="d-none" id="file-input"/>
                                </form>
                            </div>
                            <h2 className="text-center mt-4">Gloria</h2>
                        </div>
                        <div className="mt-5 d-flex flex-column">
                            <Link 
                                to="/perfil"
                                className="d-flex align-items-center mt-4" 
                                
                            >
                                <i className="fab fa-linkedin icons-perfil linkedin-color"></i>
                                <h3 className="mb-0">&nbsp; Linkedin</h3>
                            </Link>
                            <Link
                                to="/perfil"
                                className="d-flex align-items-center mt-4"
                            >
                                <i className="fab fa-facebook-square icons-perfil fb-color"></i>
                                <h3 className="mb-0">&nbsp; Facebook</h3>
                            </Link>
                            <Link
                                to="/perfil"
                                className="d-flex align-items-center mt-4"
                            >
                                <i className="fab fa-twitter-square icons-perfil twitter-color"></i>
                                <h3 className="mb-0">&nbsp; Twitter</h3>
                            </Link>
                        </div>
                    </div>
                
                    <div className="col-md-8">
                        <h2 className="mb-3"> Descripción { empresa ? 'empresarial' : 'profesional' } </h2>
                        <p> Pariatur id Lorem consequat sint labore dolor sit. Officia anim nisi consequat aliqua. Magna sint cillum magna laboris dolor ullamco laboris qui nulla quis ad. Incididunt ex tempor quis reprehenderit ut id. Proident eiusmod sit nostrud quis id adipisicing eiusmod eiusmod Lorem. Duis dolore sint sunt tempor minim elit. </p>
                        <div>
                            <h2 className="text-center">Datos de la empresa</h2>   
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-row">
                                    <div className="d-flex flex-column">
                                        <p className="fw-bold mt-3">RUC: </p>
                                        <p className="fw-bold">Teléfono de contacto: </p>
                                        <p className="fw-bold">Rubro: </p>
                                        <p className="fw-bold">Dirección: </p>
                                        <p className="fw-bold">Sitio web: </p>
                                        <p className="fw-bold">Tipo de Empresa: </p>
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
