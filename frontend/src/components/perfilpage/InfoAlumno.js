import React, { useState } from 'react';
import { EditarAlumno } from './EditarAlumno';

export const InfoAlumno = () => {

    const [datos, setDatos] = useState(0);

    return (
        <>
            <div className="d-flex justify-content-evenly">
                <div 
                    className={`${datos === 0 ? 'bg-oscuro' : '' } px-5 py-2 rounded pointer border border-dark shadow`}
                    onClick={() => setDatos(0)}
                >
                    <h3 className={`${datos === 0 ? 'text-white' : ''}`}>Datos Personales</h3>
                </div>
                <div 
                    className={`${datos === 1 ? 'bg-oscuro' : '' } px-5 py-2 rounded pointer border border-dark shadow`}
                    onClick={() => setDatos(1)}
                >
                    <h3 className={`${datos === 1 ? 'text-white' : ''}`}>Perfil Profesional</h3>
                </div>
            </div>

            <EditarAlumno datos={datos} />
        </>
    )
}
