import React, { useState, useEffect } from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import { Footer } from '../ui/Footer';
import { NavbarComponent } from '../ui/NavbarComponent';
import { isAuthenticated } from '../../api/auth';
import { getAnuncioById, isPostulado, postular } from '../../api/anuncio';
import { OfertaSection } from './OfertaSection';
import { EmpresaSection } from './EmpresaSection';
import { API } from '../../config';
import { getUser } from '../../api/user';
import Swal from 'sweetalert2';

export const AnuncioPage = () => {

    const { idEmpresa, idAnuncio } = useParams();

    const [ofertaSection, setOfertaSection] = useState(0);

    const [postulado, setPostulado] = useState(false);

    const [datosAnuncio, setDatosAnuncio] = useState({
        _id: idAnuncio,
        titulo: '',
        provincia: '',
        distrito: '',
        des_puesto: '',
        requisitos: '',
        funciones: ''
    });

    const [datosEmpresa, setDatosEmpresa] = useState({
        _id: idEmpresa,
        rs_empresa: '',
        departamento: '',
        distrito: '',
        rubro: '',
        correo: ''
    });

    const { titulo, provincia, distrito } = datosAnuncio;

    const { rs_empresa } = datosEmpresa;

    const { token, alumno } = isAuthenticated();

    const loadAnuncio = () => {
        getAnuncioById({ idAnuncio }).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setDatosAnuncio({
                    _id: data._id,
                    titulo: data.titulo,
                    provincia: data.provincia,
                    distrito: data.distrito,
                    des_puesto: data.des_puesto,
                    requisitos: data.requisitos,
                    funciones: data.funciones
                });
            }
        });
    }

    const loadEmpresa = () => {
        getUser({ empresa: { _id: idEmpresa } }).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setDatosEmpresa({
                    _id: data._id,
                    rs_empresa: data.rs_empresa,
                    descripcion: data.descripcion,
                    departamento: data.departamento,
                    distrito: data.distrito,
                    rubro: data.rubro,
                    correo: data.correo
                });
            }
        })
    }

    const redirectUser = () => {
        if (!token || !alumno) {
            return <Redirect to='/' />
        }
    }

    const postularAnuncio = () => {
        const data = {
            idAnuncio,
            idAlumno: alumno._id
        }

        postular(data).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                Swal.fire({
                    title: 'Postulación exitosa',
                    text: 'Se ha postulado correctamente',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                });
            }
        })
    }

    const estadoPostulacion = () => {
        isPostulado({ idAnuncio, idAlumno: alumno._id }).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setPostulado(data.message);
            }
        })
    }

    useEffect(() => {
        loadAnuncio();
        loadEmpresa();
        estadoPostulacion();
    }, [])

    return (
        <div>
            {redirectUser()}
            <NavbarComponent />

            <div className="container-banner-anuncio">
                <div className="py-5">
                    <Link
                        to="/buscar-anuncios"
                        className="ms-5 rounded-pill bg-oscuro text-white px-4 py-2"
                    >
                        <i className="fas fa-search"></i> Volver al listado
                    </Link>
                    <div className="container my-4">
                        <h2> {titulo} </h2>
                        <div className="d-flex">
                            <p>{rs_empresa}</p>
                            <p className="ms-5">{provincia}, {distrito}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="bg-oscuro rounded-pill px-3 py-2 text-white d-flex justify-content-evenly nav-anuncio align-items-center">
                            <div
                                className={`${ofertaSection === 0 ? "bg-white text-black" : ''} rounded-pill px-4 py-1 pointer`}
                                onClick={() => setOfertaSection(0)}
                            >
                                Oferta
                            </div>
                            <div
                                className={`${ofertaSection === 1 ? "bg-white text-black" : ''} rounded-pill px-4 py-1 pointer`}
                                onClick={() => setOfertaSection(1)}
                            >
                                Empresa
                            </div>
                        </div>

                        {ofertaSection === 0 ? <OfertaSection datosEmpresa={datosEmpresa} datosAnuncio={datosAnuncio} /> : null}
                        {ofertaSection === 1 ? <EmpresaSection datosEmpresa={datosEmpresa} /> : null}
                    </div>
                    <div className="col-md-4">
                        <div className="border border-dark p-3 container-postular bg-white" >
                            <div className="container">
                                <div className="text-center">
                                    <img
                                        src={`${API}/auth/empresas/photo/${idEmpresa}`}
                                        alt="logo"
                                        className="img-fluid"
                                    />
                                </div>
                                <div>
                                    <h5 className="text-center text-secondary"> {rs_empresa} </h5>
                                    <div className="text-success text-center">
                                        <i className="fas fa-check-circle fs-6"></i> Empresa Verificada
                                    </div>
                                    <h5>{titulo}</h5>
                                    <p className="text-secondary"> {provincia} , {distrito}</p>
                                    <div className="text-center">

                                        {
                                            postulado === true ?
                                                <button
                                                    className={`bg-disabled px-4 py-2 rounded-pill text-white border-0 `}
                                                    disabled={true}
                                                >
                                                    Ya has postulado
                                                </button>
                                                :
                                                <button
                                                    className="bg-oscuro px-4 py-2 rounded-pill text-white border-0"
                                                    onClick={postularAnuncio}
                                                >
                                                    Postular
                                                </button>
                                        }
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
