import React from 'react';

export const OfertaSection = ({datosEmpresa, datosAnuncio}) => {

    console.log(datosEmpresa);

    return (
        <>
            <div>
                <h4>Descripción de la oferta</h4>
                <p>
                    {datosAnuncio.des_puesto}
                </p>
            </div>

            <div>
                <h4>Requisitos</h4>
                <p className="mt-4">
                    {datosAnuncio.requisitos}
                </p>
            </div>

            <div>
                <h4>Funciones</h4>
                <p className="mt-4">
                    {datosAnuncio.funciones}
                </p>
            </div>

            <div>
                <h4>Acerca de Gloria S.A.</h4>
                <p>
                    {datosEmpresa.descripcion}
                </p>
            </div>
        </>
    )
}
