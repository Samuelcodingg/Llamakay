import React from 'react';

export const InfoEmpresa = () => {
    return (
        <>
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
        </>
    )
}
