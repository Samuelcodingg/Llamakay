import React from 'react'

export const EditarAlumno = ({ datos }) => {


    return (
        <form className="mt-4">

            {datos === 0 ?
                <>
                    <div className="form-group form-group-perfil d-flex align-items-center">
                        <label htmlFor="dni" className="mb-0 w-50">DNI</label>
                        <input type="text" className="form-control just-bottom-border remove-focus" id="dni" placeholder="DNI" />
                    </div>
                    <div className="form-group form-group-perfil d-flex align-items-center mt-3">
                        <label htmlFor="genero" className="mb-0 w-50">Género</label>
                        <div className="d-flex flex-column form-control border-0 ps-0">
                            <div className="form-check form-check-inline ps-0 ">
                                <input type="checkbox" name="genero" value="Masculino" /><label>&nbsp; Masculino</label><br />
                            </div>
                            <div className="form-check form-check-inline ps-0">
                                <input type="checkbox" name="genero" value="Femenino" /><label>&nbsp; Femenino</label><br />
                            </div>
                            <div className="form-check form-check-inline ps-0">
                                <input type="checkbox" name="genero" value="Otro" /><label>&nbsp; Prefiero no decirlo</label><br />
                            </div>
                        </div>
                    </div>
                    <div className="form-group form-group-perfil d-flex align-items-center mt-3">
                        <label htmlFor="email" className="mb-0 w-50">Email</label>
                        <input type="email" className="form-control just-bottom-border remove-focus" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group form-group-perfil d-flex align-items-center mt-3">
                        <label htmlFor="celular" className="mb-0 w-50">Celular</label>
                        <input type="text" className="form-control just-bottom-border remove-focus" id="celular" placeholder="Celular" />
                    </div>
                    <div className="form-group form-group-perfil d-flex align-items-center mt-3">
                        <label htmlFor="pais" className="mb-0 w-50">País</label>
                        <input type="text" className="form-control just-bottom-border remove-focus" id="pais" placeholder="País" />
                    </div>
                    <div className="form-group form-group-perfil d-flex align-items-center mt-3">
                        <label htmlFor="departamento" className="mb-0 w-50">Departamento</label>
                        <input type="text" className="form-control just-bottom-border remove-focus" id="departamento" placeholder="Departamento" />
                    </div>
                    <div className="form-group form-group-perfil d-flex align-items-center mt-3">
                        <label htmlFor="distrito" className="mb-0 w-50">Distrito</label>
                        <input type="text" className="form-control just-bottom-border remove-focus" id="distrito" placeholder="Distrito" />
                    </div>
                    <div className="form-group form-group-perfil d-flex align-items-center mt-3">
                        <label htmlFor="direccion" className="mb-0 w-50">Dirección</label>
                        <input type="text" className="form-control just-bottom-border remove-focus" id="direccion" placeholder="Dirección" />
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
