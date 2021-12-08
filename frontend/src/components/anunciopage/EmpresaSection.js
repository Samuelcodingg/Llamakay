import React from 'react';

export const EmpresaSection = ({datosEmpresa}) => {

    return (
        <>
            <h4>Descripcion empresarial</h4>
            <p>{datosEmpresa.descripcion}</p>
            <p><span className="fw-bold">Departamento:</span> {datosEmpresa.departamento} </p>
            <p><span className="fw-bold">Distrito:</span> {datosEmpresa.distrito}</p>
            <p><span className="fw-bold">Rubro:</span> {datosEmpresa.rubro}</p>
            <p><span className="fw-bold">Email:</span> {datosEmpresa.correo}</p>
        </>
    )
}
