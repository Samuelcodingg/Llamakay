import React from 'react';
import { NavbarComponent } from '../ui/NavbarComponent';
import  imgMaleta  from '../ui/assets/maleta.png';

export const RegisterFormEmp = () => {
    return (
        <div>
            <div className="form-emp-section">
                <div className="col">
                    <div className="circle">
                        <img src={imgMaleta} alt="icono-maleta" style={{ width:"50px", height:"50px", position:"relative", marginTop:"25px"}} />
                    </div>
                    <div className="row my-2 justify-content-end">
                        <div className="col-md-3">
                            <button type="button" className="btn btn-primary btn-llamakay" style={{width:"100%"}}>Ya tengo una cuenta</button>
                        </div>
                    </div>
                    <div className="row my-2">
                        <h2 className="text-center my-3">CREA TU CUENTA</h2>
                        <p className="my-3">Información del usuario *</p>
                        <div className="col">
                            <input type="text" placeholder="Nombre" className="form-control my-2" />
                            <input type="text" placeholder="Apellido" className="form-control my-2" />
                            <input type="email" placeholder="Email" className="form-control my-2" />
                            <input type="password" placeholder="Contraseña" className="form-control my-2" />
                        </div>
                    </div>

                    <div className="row my-2">
                        <p className="my-3">Información de la empresa *</p>
                        <div className="col-md-6">
                            <select className="form-select my-2">
                                <option selected>Condición fiscal</option>
                                <option value="opcion 1">Opcion 1</option>
                                <option value="opcion 2">Opción 2</option>
                                <option value="opcion 3">Opción 3</option>
                            </select>    
                            <input type="text" placeholder="Razón social" className="form-control my-2" />
                            <input type="text" placeholder="Industria" className="form-control my-2" />
                        </div>
                        <div className="col-md-6">
                            <input type="number" placeholder="RUC" className="form-control my-2" />
                            <input type="number" placeholder="Teléfono" className="form-control my-2" />
                            <input type="number" placeholder="Cantidad de empleados" className="form-control my-2" />
                        </div>
                    </div>

                    <div className="row my-3">
                        <div className="col-md-9">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckTermCond"/>
                            <label className="form-check-label ms-1" for="flexCheckTermCond">
                                Acepto los <a href="#reg-emp" className="text-decoration-underline">términos y condiciones</a>
                            </label>
                        </div>
                        <div className="col-md-3">
                            <button type="button" className="btn btn-primary btn-llamakay" style={{width:"100%"}}>Crear cuenta</button>
                        </div>
                    </div>
                    <br></br>
                </div>
            </div>
        </div>
    )
}