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
        direccion_alumno: '',
        formacion: [],
        idiomas: [],
        conocimientos: []
    })

    const { dni_alumno, genero, correo, conocimientos, cel_alumno, pais, departamento, formacion, idiomas, distrito, direccion_alumno } = datosAlumno;

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
                direccion_alumno: data.direccion_alumno,
                formacion: data.formacion,
                idiomas: data.idiomas,
                conocimientos: data.conocimientos
            })
            console.log(data);
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
                                <input type="checkbox" name="genero" value="0" defaultChecked={genero === 0 ? true : false} /><label>&nbsp; Masculino</label><br />
                            </div>
                            <div className="form-check form-check-inline ps-0">
                                <input type="checkbox" name="genero" value="1" defaultChecked={genero === 1 ? true : false} /><label>&nbsp; Femenino</label><br />
                            </div>
                            <div className="form-check form-check-inline ps-0">
                                <input type="checkbox" name="genero" value="2" defaultChecked={genero === 2 ? true : false} /><label>&nbsp; Prefiero no decirlo</label><br />
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
                    <div className="form-group">
                        <h5 className="text-center">Formación</h5>
                        <div className="border border-dark shadow text-center rounded py-4 px-5">
                            <button className="text-center border-0 bg-white">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 12H8M12 8V12V8ZM12 12V16V12ZM12 12H16H12Z" stroke="black" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="black" strokeWidth="2" />
                                </svg>
                                &nbsp; Añadir
                            </button>
                            <div className="border border-secondary mt-3 min-height-80 rounded">
                                {
                                    formacion ? formacion.map((item, index) =>
                                        <div className="px-4 my-2" key={index}>
                                            <div className="d-flex justify-content-between border border-secondary border-top-0 border-start-0 border-end-0">
                                                <p className="mb-0"> {item.nivel} </p>
                                                <div>
                                                    <svg width="8" className="pointer" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7 1L1 7M7 7L1 1L7 7Z" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" />
                                                    </svg>
                                                    <svg width="20" className="pointer ms-2" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.03984 15.625C4.08672 15.625 4.13359 15.6203 4.18047 15.6133L8.12266 14.9219C8.16953 14.9125 8.21406 14.8914 8.24688 14.8563L18.182 4.92109C18.2038 4.89941 18.221 4.87366 18.2328 4.8453C18.2445 4.81695 18.2506 4.78656 18.2506 4.75586C18.2506 4.72516 18.2445 4.69477 18.2328 4.66642C18.221 4.63806 18.2038 4.61231 18.182 4.59063L14.2867 0.692969C14.2422 0.648438 14.1836 0.625 14.1203 0.625C14.057 0.625 13.9984 0.648438 13.9539 0.692969L4.01875 10.6281C3.98359 10.6633 3.9625 10.7055 3.95312 10.7523L3.26172 14.6945C3.23892 14.8201 3.24707 14.9493 3.28545 15.071C3.32384 15.1927 3.39132 15.3032 3.48203 15.393C3.63672 15.543 3.83125 15.625 4.03984 15.625ZM5.61953 11.5375L14.1203 3.03906L15.8383 4.75703L7.3375 13.2555L5.25391 13.6234L5.61953 11.5375ZM18.625 17.5938H1.375C0.960156 17.5938 0.625 17.9289 0.625 18.3438V19.1875C0.625 19.2906 0.709375 19.375 0.8125 19.375H19.1875C19.2906 19.375 19.375 19.2906 19.375 19.1875V18.3438C19.375 17.9289 19.0398 17.5938 18.625 17.5938Z" fill="#579CFF" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-0"> {item.nombre_institucion} </p>
                                                <p className="mb-0 text-secondary"> {item.fecha_inicio} - {item.fecha_fin} </p>
                                            </div>
                                        </div>
                                    )

                                        : ''
                                }
                            </div>

                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <h5 className="text-center">Idiomas</h5>
                        <div className="border border-dark shadow text-center rounded py-4 px-5">
                            <button className="text-center border-0 bg-white">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 12H8M12 8V12V8ZM12 12V16V12ZM12 12H16H12Z" stroke="black" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="black" strokeWidth="2" />
                                </svg>
                                &nbsp; Añadir
                            </button>
                            {
                                idiomas ? idiomas.map((item, index) =>
                                    <div className="border border-secondary mt-3 min-height-80 rounded" key={index}>
                                        <div className="px-4 my-2">
                                            <div className="d-flex justify-content-between border border-secondary border-top-0 border-start-0 border-end-0">
                                                <p className="mb-0"> {item.idioma} </p>
                                                <div>
                                                    <svg width="8" className="pointer" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7 1L1 7M7 7L1 1L7 7Z" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" />
                                                    </svg>
                                                    <svg width="20" className="pointer ms-2" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.03984 15.625C4.08672 15.625 4.13359 15.6203 4.18047 15.6133L8.12266 14.9219C8.16953 14.9125 8.21406 14.8914 8.24688 14.8563L18.182 4.92109C18.2038 4.89941 18.221 4.87366 18.2328 4.8453C18.2445 4.81695 18.2506 4.78656 18.2506 4.75586C18.2506 4.72516 18.2445 4.69477 18.2328 4.66642C18.221 4.63806 18.2038 4.61231 18.182 4.59063L14.2867 0.692969C14.2422 0.648438 14.1836 0.625 14.1203 0.625C14.057 0.625 13.9984 0.648438 13.9539 0.692969L4.01875 10.6281C3.98359 10.6633 3.9625 10.7055 3.95312 10.7523L3.26172 14.6945C3.23892 14.8201 3.24707 14.9493 3.28545 15.071C3.32384 15.1927 3.39132 15.3032 3.48203 15.393C3.63672 15.543 3.83125 15.625 4.03984 15.625ZM5.61953 11.5375L14.1203 3.03906L15.8383 4.75703L7.3375 13.2555L5.25391 13.6234L5.61953 11.5375ZM18.625 17.5938H1.375C0.960156 17.5938 0.625 17.9289 0.625 18.3438V19.1875C0.625 19.2906 0.709375 19.375 0.8125 19.375H19.1875C19.2906 19.375 19.375 19.2906 19.375 19.1875V18.3438C19.375 17.9289 19.0398 17.5938 18.625 17.5938Z" fill="#579CFF" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-0"> {item.nivel} </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                                    :
                                    ''
                            }
                        </div>
                    </div>
                    <div className="form-group mt-5">
                        <h5 className="text-center">Conocimientos y Habilidades</h5>
                        <div className="border border-dark shadow text-center rounded py-4 px-5">
                            <button className="text-center border-0 bg-white">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 12H8M12 8V12V8ZM12 12V16V12ZM12 12H16H12Z" stroke="black" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="black" strokeWidth="2" />
                                </svg>
                                &nbsp; Añadir
                            </button>
                            {
                                conocimientos ? conocimientos.map((item, index) =>
                                    <div className="border border-secondary mt-3 min-height-80 rounded" key={index}>
                                        <div className="px-4 my-2">
                                            <div className="d-flex justify-content-between border border-secondary border-top-0 border-start-0 border-end-0">
                                                <p className="mb-0"> {item.nombre} </p>
                                                <div>
                                                    <svg width="8" className="pointer" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7 1L1 7M7 7L1 1L7 7Z" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" />
                                                    </svg>
                                                    <svg width="20" className="pointer ms-2" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.03984 15.625C4.08672 15.625 4.13359 15.6203 4.18047 15.6133L8.12266 14.9219C8.16953 14.9125 8.21406 14.8914 8.24688 14.8563L18.182 4.92109C18.2038 4.89941 18.221 4.87366 18.2328 4.8453C18.2445 4.81695 18.2506 4.78656 18.2506 4.75586C18.2506 4.72516 18.2445 4.69477 18.2328 4.66642C18.221 4.63806 18.2038 4.61231 18.182 4.59063L14.2867 0.692969C14.2422 0.648438 14.1836 0.625 14.1203 0.625C14.057 0.625 13.9984 0.648438 13.9539 0.692969L4.01875 10.6281C3.98359 10.6633 3.9625 10.7055 3.95312 10.7523L3.26172 14.6945C3.23892 14.8201 3.24707 14.9493 3.28545 15.071C3.32384 15.1927 3.39132 15.3032 3.48203 15.393C3.63672 15.543 3.83125 15.625 4.03984 15.625ZM5.61953 11.5375L14.1203 3.03906L15.8383 4.75703L7.3375 13.2555L5.25391 13.6234L5.61953 11.5375ZM18.625 17.5938H1.375C0.960156 17.5938 0.625 17.9289 0.625 18.3438V19.1875C0.625 19.2906 0.709375 19.375 0.8125 19.375H19.1875C19.2906 19.375 19.375 19.2906 19.375 19.1875V18.3438C19.375 17.9289 19.0398 17.5938 18.625 17.5938Z" fill="#579CFF" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-0"> {item.nivel} </p>
                                            </div>
                                        </div>
                                    </div>

                                )
                                    : ''
                            }




                        </div>
                    </div>

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
