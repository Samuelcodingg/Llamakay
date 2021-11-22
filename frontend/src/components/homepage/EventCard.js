import React from 'react';
import imgFlavia from './Flavia.png';

export const EventCard = () => {
    return (

        <div className="sombra col-lg-3 mx-auto bg-white mt-5 mt-lg-0">
            <div>
                <img src={imgFlavia} alt="example" style={{objectFit:"cover", width:"100%", aspectRatio:"25/18"}} />
            </div>
            <div className="p-2">
                <div>
                    <h5 className="color-sec">Nombre</h5>
                    <p>
                        I want to talk about the hard stuff people wonder about but maybe are embarassed
                    </p>
                </div>
            </div>
        </div>
    )
}