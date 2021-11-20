import React, { useEffect, useState } from 'react';
import { editAlumno, getUser } from '../../api/user';

export const EditarAlumno = ({ datos, alumno }) => {

    const [datosAlumno, setDatosAlumno] = useState({
        _id: '',
        dni_alumno: '',
        genero: '',
        correo: '',
        cel_alumno: '',
        pais: '',
        departamento: '',
        distrito: '',
        direccion_alumno: ''
    })

    const {  dni_alumno, genero, correo, cel_alumno, pais, departamento, distrito, direccion_alumno } = datosAlumno;

    const loadDataUser = () => {
        getUser({ alumno }).then(data => {
            setDatosAlumno({
                _id: data._id,
                dni_alumno: data.dni_alumno,
                genero: data.genero,
                correo: data.correo,
                cel_alumno: data.cel_alumno,
                pais: data.pais,
                departamento: data.departamento,
                distrito: data.distrito,
                direccion_alumno: data.direccion_alumno
            })
        })
    }

    const handleChange = name => event => {
        setDatosAlumno({ ...datosAlumno, [name]: event.target.value });
    }

    const clickSubmit = event => {
        event.preventDefault();
        editAlumno(datosAlumno)
            .then(data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    console.log(data);
                    alert('Datos actualizados');
                }
            }
            )
    }

    useEffect(() => {
        loadDataUser();
    }, []);

    return (
        <form className="mt-4">

            {datos === 0 ?
                <>
                    <div className="form-group form-group-perfil d-flex align-items-center">
                        <label htmlFor="dni_alumno" className="mb-0 w-50">DNI</label>
                        <input 
                            type="text" 
                            className="form-control just-bottom-border remove-focus" 
                            id="dni_alumno" 
                            placeholder="DNI" 
                            value={dni_alumno}
                            onChange={handleChange('dni_alumno')}
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
                        <label htmlFor="correo" className="mb-0 w-50">Email</label>
                        <input 
                            type="email" 
                            className="form-control just-bottom-border remove-focus" 
                            id="correo" 
                            placeholder="Email" 
                            value={correo}
                            onChange={handleChange('correo')}
                        />
                    </div>
                    <div className="form-group form-group-perfil d-flex align-items-center mt-3">
                        <label htmlFor="cel_alumno" className="mb-0 w-50">Celular</label>
                        <input 
                            type="text" 
                            className="form-control just-bottom-border remove-focus" 
                            id="cel_alumno" 
                            placeholder="Celular" 
                            value={cel_alumno}
                            onChange={handleChange('cel_alumno')}
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
                        <label htmlFor="direccion_alumno" className="mb-0 w-50">Dirección</label>
                        <input 
                            type="text" 
                            className="form-control just-bottom-border remove-focus" 
                            id="direccion_alumno" 
                            placeholder="Dirección" 
                            value={direccion_alumno}
                            onChange={handleChange('direccion_alumno')}
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
                    onClick={clickSubmit}
                >
                    Editar información
                </button>
            </div>
        </form>
    )
}
