import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { publicarAnuncio } from '../../api/anuncio'
import { isAuthenticated } from '../../api/auth'
import { Footer } from '../ui/Footer'
import { NavbarComponent } from '../ui/NavbarComponent'
import Swal from 'sweetalert2';

export const PublicarAnunPage = () => {

    const { _id } = isAuthenticated().empresa;

    const [valuesForm, setValuesForm] = useState({
        titulo: '',
        des_puesto: '',
        requisitos: '',
        funciones: '',
        id_empresa: _id
    });

    const handleChange = name => event => {
        setValuesForm({ ...valuesForm, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();

        setValuesForm({ ...valuesForm });

        if(valuesForm.titulo === '' || valuesForm.des_puesto === '' || valuesForm.requisitos === '' || valuesForm.funciones === '') {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Por favor, llene todos los campos'
            })
            return;
        }

        publicarAnuncio(valuesForm)
            .then(data => {
                if(data.error) {
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: data.error
                    })
                } else {
                    Swal.fire({
                        type: 'success',
                        title: 'Exito',
                        text: 'Anuncio publicado con exito'
                    })
                    setValuesForm({
                        titulo: '',
                        des_puesto: '',
                        requisitos: '',
                        funciones: '',
                        id_empresa: _id
                    })
                }
            })
    }

    return (
        <div>
            <NavbarComponent />
            <div className='banner-size bg-primary'>
            </div>
            <div className='container border border-dark position-relative pub-form bg-white'>
                <div className='text-center'>
                    <svg className='position-relative icon-pub' width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="75" cy="75" r="75" fill="#010E20" />
                        <g filter="url(#filter0_d_97_692)">
                            <path d="M103.667 56.5H45.3333C40.731 56.5 37 60.231 37 64.8333V98.1667C37 102.769 40.731 106.5 45.3333 106.5H103.667C108.269 106.5 112 102.769 112 98.1667V64.8333C112 60.231 108.269 56.5 103.667 56.5Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M62 52.3333C62 50.1232 62.878 48.0036 64.4408 46.4408C66.0036 44.878 68.1232 44 70.3333 44H78.6667C80.8768 44 82.9964 44.878 84.5592 46.4408C86.122 48.0036 87 50.1232 87 52.3333V56.5H62V52.3333Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M66.1667 77.3334L67.0459 77.775C69.3603 78.9324 71.9124 79.5349 74.5001 79.5349C77.0877 79.5349 79.6398 78.9324 81.9542 77.775L82.8334 77.3334" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <filter id="filter0_d_97_692" x="30.5" y="41.5" width="88" height="75.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_97_692" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_97_692" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                    <h2>PUBLICA UN AVISO</h2>
                </div>
                
                <form className='p-4'>
                    <div className="form-group">
                        <p>Puesto / Título del aviso <span className='text-danger'>*</span> </p>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Ingresa el puesto o título del aviso" 
                            value={valuesForm.titulo}
                            onChange={handleChange('titulo')}    
                        />
                    </div>
                    <div className="form-group mt-4">
                        <p>Descripción del aviso <span className='text-danger'>*</span> </p>
                        <textarea 
                            className="form-control" 
                            rows="5" 
                            placeholder="Ingresa la descripción del aviso"
                            value={valuesForm.des_puesto}
                            onChange={handleChange('des_puesto')}
                        ></textarea>
                    </div>
                    <div className="form-group mt-4">
                        <p>Requisitos <span className='text-danger'>*</span> </p>
                        <textarea 
                            className="form-control" 
                            rows="5" 
                            placeholder="Ingresa los requisitos del puesto"
                            value={valuesForm.requisitos}
                            onChange={handleChange('requisitos')}
                        ></textarea>
                    </div>
                    <div className="form-group mt-4">
                        <p>Funciones <span className='text-danger'>*</span> </p>
                        <textarea 
                            className="form-control" 
                            rows="5" 
                            placeholder="Ingresa las funciones del puesto"
                            value={valuesForm.funciones}
                            onChange={handleChange('funciones')}
                        ></textarea>
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="form-group mt-4">
                                    <p>País <span className='text-danger'>*</span> </p>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa el país" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="form-group mt-4">
                                    <p>Provincia <span className='text-danger'>*</span> </p>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa la provincia" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="form-group mt-4">
                                    <p>Distrito <span className='text-danger'>*</span> </p>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa el distrito" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="form-group mt-4">
                                    <p>Dirección <span className='text-danger'>*</span> </p>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa la dirección" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group mt-4 d-flex justify-content-end align-items-center">
                        <Link
                            to="/"
                            className='me-5'
                        >
                            Cancelar
                        </Link>
                        <button
                            type="submit" 
                            className="btn btn-primary btn-llamakay px-5"
                            onClick={clickSubmit}
                        >
                            Continuar
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}
