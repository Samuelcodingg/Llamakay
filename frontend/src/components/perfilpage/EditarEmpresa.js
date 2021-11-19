import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../api/user';

export const EditarEmpresa = ({empresa}) => {

    const [datosEmpresa, setDatosEmpresa] = useState({
        ruc_empresa: '',
        celular: '',
        rubro: '',
        direccion: '',
        web: '',
    });

    const {  ruc_empresa, celular, rubro, direccion, web } = datosEmpresa;

    const loadDataUser = () => {
        getUser({ empresa }).then(data => {
            empresa = data;
            console.log(data);
            setDatosEmpresa({
                ruc_empresa: data.ruc_empresa,
                celular: data.cel_empresa,
                rubro: data.rubro,
                direccion: data.direccion_empresa,
                web: data.web_empresa,
            });
            console.log(datosEmpresa);
        })
    }

    const handleChange = name => event => {
        setDatosEmpresa({ ...datosEmpresa, [name]: event.target.value });
    };

    useEffect(() => {
        loadDataUser();
    }, []);

    return (
        <form className="mt-4">
            <div className="form-group form-group-perfil d-flex align-items-center mt-3">
                <label htmlFor="ruc" className="mb-0 w-50">RUC</label>
                <input 
                    type="text" 
                    className="form-control just-bottom-border remove-focus" 
                    id="ruc" 
                    placeholder="RUC" 
                    onChange={handleChange('ruc_empresa')}
                    value={ruc_empresa}
                />
            </div>
            <div className="form-group form-group-perfil d-flex align-items-center mt-3">
                <label htmlFor="celular" className="mb-0 w-50">Celular</label>
                <input 
                    type="text" 
                    className="form-control just-bottom-border remove-focus" 
                    id="celular" 
                    placeholder="Celular" 
                    onChange={handleChange('celular')}
                    value={celular}
                />
            </div>
            <div className="form-group form-group-perfil d-flex align-items-center mt-3">
                <label htmlFor="Rubro" className="mb-0 w-50">Rubro</label>
                <input 
                    type="text" 
                    className="form-control just-bottom-border remove-focus" 
                    id="Rubro" 
                    placeholder="Rubro" 
                    onChange={handleChange('rubro')}
                    value={rubro}
                />
            </div>
            <div className="form-group form-group-perfil d-flex align-items-center mt-3">
                <label htmlFor="direccion" className="mb-0 w-50">Dirección</label>
                <input 
                    type="text" 
                    className="form-control just-bottom-border remove-focus" 
                    id="direccion" 
                    placeholder="Dirección" 
                    onChange={handleChange('direccion')}
                    value={direccion}
                />
            </div>
            <div className="form-group form-group-perfil d-flex align-items-center mt-3">
                <label htmlFor="web" className="mb-0 w-50">Sitio web</label>
                <input 
                    type="text" 
                    className="form-control just-bottom-border remove-focus" 
                    id="web" 
                    placeholder="Sitio web" 
                    onChange={handleChange('web')}
                    value={web}
                />
            </div>
            <div className="d-md-flex text-center text-md-start justify-content-evenly mt-5">
                <button
                    type="submit"
                    className="rounded shadow border border-dark d-block d-md-inline text-white px-5 fs-4 py-2 bg-oscuro w-100-sm"
                >
                    Editar información
                </button>
                <Link
                    to="/perfil"
                    className="shadow rounded border border-dark d-block d-md-inline px-md-4 fs-4 py-2 mt-3 mt-md-0"
                >
                    Ver mis publicaciones
                </Link>
            </div>
        </form>
    )
}
