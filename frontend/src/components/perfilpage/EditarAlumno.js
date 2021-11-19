import React, { useEffect, useState } from 'react';
import { getUser } from '../../api/user';

export const EditarAlumno = ({ datos, alumno }) => {

    const [datosAlumno, setDatosAlumno] = useState({
        dni: '',
        genero: 0,
        email: '',
        celular: '',
        pais: '',
        departamento: '',
        distrito: '',
        direccion: ''
    })

    const {  dni, genero, email, celular, pais, departamento, distrito, direccion } = datosAlumno;

    const loadDataUser = () => {
        getUser({ alumno }).then(data => {
            setDatosAlumno({
                dni: data.dni_alumno,
                genero: data.genero,
                email: data.correo,
                celular: data.cel_alumno,
                pais: data.pais,
                departamento: data.departamento,
                distrito: data.distrito,
                direccion: data.direccion_alumno
            })
            console.log(data);
        })
    }

    const handleChange = name => event => {
        setDatosAlumno({ ...datosAlumno, [name]: event.target.value });
    }

    useEffect(() => {
        loadDataUser();
    }, []);

    return (
        <form className="mt-4">

            {datos === 0 ?
                <>
                    <div className="form-group form-group-perfil d-flex align-items-center">
                        <label htmlFor="dni" className="mb-0 w-50">DNI</label>
                        <input 
                            type="text" 
                            className="form-control just-bottom-border remove-focus" 
                            id="dni" 
                            placeholder="DNI" 
                            value={dni}
                            onChange={handleChange('dni')}
                        />
                    </div>
                    <div className="form-group form-group-perfil d-flex align-items-center mt-3">
                        <label htmlFor="genero" className="mb-0 w-50">Género</label>
                        <div className="d-flex flex-column form-control border-0 ps-0">
                            <div className="form-check form-check-inline ps-0 ">
                                <input type="checkbox" name="genero" value="0" defaultChecked={ genero === 0 ? true : false } /><label>&nbsp; Masculino</label><br />
                            </div>
                            <div className="form-check form-check-inline ps-0">
                                <input type="checkbox" name="genero" value="1" defaultChecked={ genero === 1 ? true : false } /><label>&nbsp; Femenino</label><br />
                            </div>
                            <div className="form-check form-check-inline ps-0">
                                <input type="checkbox" name="genero" value="2" defaultChecked={ genero === 2 ? true : false } /><label>&nbsp; Prefiero no decirlo</label><br />
                            </div>
                        </div>
                    </div>
                    <div className="form-group form-group-perfil d-flex align-items-center mt-3">
                        <label htmlFor="email" className="mb-0 w-50">Email</label>
                        <input 
                            type="email" 
                            className="form-control just-bottom-border remove-focus" 
                            id="email" 
                            placeholder="Email" 
                            value={email}
                            onChange={handleChange('email')}
                        />
                    </div>
                    <div className="form-group form-group-perfil d-flex align-items-center mt-3">
                        <label htmlFor="celular" className="mb-0 w-50">Celular</label>
                        <input 
                            type="text" 
                            className="form-control just-bottom-border remove-focus" 
                            id="celular" 
                            placeholder="Celular" 
                            value={celular}
                            onChange={handleChange('celular')}
                        />
                    </div>
                    <div className="form-group form-group-perfil d-flex align-items-center mt-3">
                        <label htmlFor="pais" className="mb-0 w-50">País</label>
                        <input 
                            type="text" 
                            className="form-control just-bottom-border remove-focus" 
                            id="pais" 
                            placeholder="País" 
                            value={pais}
                            onChange={handleChange('pais')}
                        />
                    </div>
                    <div className="form-group form-group-perfil d-flex align-items-center mt-3">
                        <label htmlFor="departamento" className="mb-0 w-50">Departamento</label>
                        <input 
                            type="text" 
                            className="form-control just-bottom-border remove-focus" 
                            id="departamento" 
                            placeholder="Departamento" 
                            value={departamento}
                            onChange={handleChange('departamento')}
                        />
                    </div>
                    <div className="form-group form-group-perfil d-flex align-items-center mt-3">
                        <label htmlFor="distrito" className="mb-0 w-50">Distrito</label>
                        <input 
                            type="text" 
                            className="form-control just-bottom-border remove-focus" 
                            id="distrito" 
                            placeholder="Distrito" 
                            value={distrito}
                            onChange={handleChange('distrito')}    
                        />
                    </div>
                    <div className="form-group form-group-perfil d-flex align-items-center mt-3">
                        <label htmlFor="direccion" className="mb-0 w-50">Dirección</label>
                        <input 
                            type="text" 
                            className="form-control just-bottom-border remove-focus" 
                            id="direccion" 
                            placeholder="Dirección" 
                            value={direccion}
                            onChange={handleChange('direccion')}
                        />
                    </div>

                </> 
                :
                <>


                </>
            }
            <div className="text-center mt-5">
                <button
                    type="submit"
                    className="rounded-pill text-white px-5 fs-4 py-2 bg-oscuro shadow"
                >
                    Editar información
                </button>
            </div>
        </form>
    )
}
