import React from 'react';
import { EditarEmpresa } from './EditarEmpresa';

export const InfoEmpresa = ({empresa}) => {

    return (
        <>
            <h2 className="text-center">Datos de la empresa</h2>
            <EditarEmpresa empresa={empresa} />
        </>
    )
}
