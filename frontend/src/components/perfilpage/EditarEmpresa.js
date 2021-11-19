import React from 'react'
import { Link } from 'react-router-dom'

export const EditarEmpresa = () => {
    return (
        <form className="mt-4">
            <div className="form-group form-group-perfil d-flex align-items-center mt-3">
                <label htmlFor="ruc" className="mb-0 w-50">RUC</label>
                <input type="text" className="form-control just-bottom-border remove-focus" id="ruc" placeholder="RUC" />
            </div>
            <div className="form-group form-group-perfil d-flex align-items-center mt-3">
                <label htmlFor="celular" className="mb-0 w-50">Celular</label>
                <input type="text" className="form-control just-bottom-border remove-focus" id="celular" placeholder="Celular" />
            </div>
            <div className="form-group form-group-perfil d-flex align-items-center mt-3">
                <label htmlFor="Rubro" className="mb-0 w-50">Rubro</label>
                <input type="text" className="form-control just-bottom-border remove-focus" id="Rubro" placeholder="Rubro" />
            </div>
            <div className="form-group form-group-perfil d-flex align-items-center mt-3">
                <label htmlFor="direccion" className="mb-0 w-50">Dirección</label>
                <input type="text" className="form-control just-bottom-border remove-focus" id="direccion" placeholder="Dirección" />
            </div>
            <div className="form-group form-group-perfil d-flex align-items-center mt-3">
                <label htmlFor="web" className="mb-0 w-50">Sitio web</label>
                <input type="text" className="form-control just-bottom-border remove-focus" id="web" placeholder="Sitio web" />
            </div>
            <div className="d-flex justify-content-evenly mt-5">
                <button
                    type="submit"
                    className="rounded shadow border border-dark text-white px-5 fs-4 py-2 bg-oscuro"
                >
                    Editar información
                </button>
                <Link
                    to="/perfil"
                    className="shadow rounded border border-dark px-4 fs-4 py-2"
                >
                    Ver mis publicaciones
                </Link>
            </div>
        </form>
    )
}
