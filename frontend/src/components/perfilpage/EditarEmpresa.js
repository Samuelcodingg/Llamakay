import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { editEmpresa, getUser } from '../../api/user';

export const EditarEmpresa = ({empresa}) => {

    const [datosEmpresa, setDatosEmpresa] = useState({
        _id: '',
        ruc_empresa: '',
        cel_empresa: '',
        rubro: '',
        direccion_empresa: '',
        web_empresa: '',
    });

    const {  ruc_empresa, cel_empresa, rubro, direccion_empresa, web_empresa } = datosEmpresa;

    const loadDataUser = () => {
        getUser({ empresa }).then(data => {
            empresa = data;
            console.log(data);
            setDatosEmpresa({
                _id: data._id,
                ruc_empresa: data.ruc_empresa,
                cel_empresa: data.cel_empresa,
                rubro: data.rubro,
                direccion_empresa: data.direccion_empresa,
                web_empresa: data.web_empresa,
            });
            console.log(datosEmpresa);
        })
    }

    const handleChange = name => event => {
        setDatosEmpresa({ ...datosEmpresa, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();

        if(ruc_empresa === '' || cel_empresa === '' || rubro === '' || direccion_empresa === '' || web_empresa === ''){
            alert('Todos los campos son obligatorios');
            return;
        }

        editEmpresa(datosEmpresa)
            .then(data => {
                if(data.error){
                    console.log(data.error);
                }
                else{
                    console.log(data);
                    alert('Datos actualizados!');
                }
            })

    }

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
                <label htmlFor="cel_empresa" className="mb-0 w-50">Celular</label>
                <input 
                    type="text" 
                    className="form-control just-bottom-border remove-focus" 
                    id="cel_empresa" 
                    placeholder="Celular" 
                    onChange={handleChange('cel_empresa')}
                    value={cel_empresa}
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
                <label htmlFor="direccion_empresa" className="mb-0 w-50">Dirección</label>
                <input 
                    type="text" 
                    className="form-control just-bottom-border remove-focus" 
                    id="direccion_empresa" 
                    placeholder="Dirección" 
                    onChange={handleChange('direccion_empresa')}
                    value={direccion_empresa}
                />
            </div>
            <div className="form-group form-group-perfil d-flex align-items-center mt-3">
                <label htmlFor="web_empresa" className="mb-0 w-50">Sitio web</label>
                <input 
                    type="text" 
                    className="form-control just-bottom-border remove-focus" 
                    id="web_empresa" 
                    placeholder="Sitio web" 
                    onChange={handleChange('web_empresa')}
                    value={web_empresa}
                />
            </div>
            <div className="d-md-flex text-center text-md-start justify-content-evenly mt-5">
                <button
                    type="submit"
                    className="rounded shadow border border-dark d-block d-md-inline text-white px-5 fs-4 py-2 bg-oscuro w-100-sm"
                    onClick={clickSubmit}
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
