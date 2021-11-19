import React, { useState } from 'react';
import { EditarAlumno } from './EditarAlumno';

export const InfoAlumno = ({alumno}) => {

    const [datos, setDatos] = useState(0);

    return (
        <>
            <div className="d-md-flex justify-content-evenly">
                <div 
                    className={`${datos === 0 ? 'bg-oscuro' : '' } px-5 py-2 rounded pointer border border-dark shadow`}
                    onClick={() => setDatos(0)}
                >
                    <h3 className={`${datos === 0 ? 'text-white' : ''} text-center`}>Datos Personales</h3>
                </div>
                <div 
                    className={`${datos === 1 ? 'bg-oscuro' : '' } px-5 py-2 rounded pointer border border-dark shadow mt-4 mt-md-0`}
                    onClick={() => setDatos(1)}
                >
                    <h3 className={`${datos === 1 ? 'text-white' : ''} text-center`}>Perfil Profesional</h3>
                </div>
            </div>

            <EditarAlumno datos={datos} alumno={alumno} />
        </>
    )
}
