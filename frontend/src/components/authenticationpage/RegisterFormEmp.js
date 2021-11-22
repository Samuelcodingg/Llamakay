import React, { useState } from 'react';
import  imgMaleta  from '../ui/assets/maleta.png';
import { Link, Redirect } from 'react-router-dom';
import { authenticate, isAuthenticated, signup } from '../../api/auth';
import Swal from 'sweetalert2';

export const RegisterFormEmp = () => {

    const [values, setValues] = useState({
        nombre : '',
        direccion_empresa : '',
        correo : '',
        password : '',
        tipo_usuario : '1',
        ruc_empresa : '',
        rs_empresa : '',
        cel_empresa : '',
        rubro: '',
        redirecToReferrer : false,
    })

    const {  nombre, correo, password, ruc_empresa, rs_empresa, rubro, cel_empresa, redirecToReferrer, direccion_empresa } = values

    const { token } = isAuthenticated();

    const redirectUser = () => {
        if (redirecToReferrer || token ) {
            return <Redirect to='/' />
        }
    }
     
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();

        setValues(values);

        if(nombre === '' || correo === '' || password === '' || ruc_empresa === '' || rs_empresa === '' || rubro === '' || cel_empresa === '' || direccion_empresa === ''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, llene todos los campos'
            })
            return;
        }

        signup(values)
            .then(data => {
                if(data.error){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: data.error
                    })
                }
                else {
                    authenticate(data, () => {
                        setValues({
                            ...values,
                            redirecToReferrer: true
                        })
                    })
                }
            })
    }

    return (
        <div>
            {redirectUser()}
            <div className="form-emp-section">
                <div className="col">
                    <div className="circle">
                        <img src={imgMaleta} alt="icono-maleta" style={{ width:"50px", height:"50px", position:"relative", marginTop:"25px"}} />
                    </div>
                    <div className="row my-2 justify-content-end">
                        <div className="col-md-3">
                            <Link 
                                className="btn btn-primary btn-llamakay text-white" 
                                to="/authentication/login"
                                style={{width:"100%"}}
                            >
                                Ya tengo una cuenta
                            </Link>
                        </div>
                    </div>
                    <div className="row my-2">
                        <h2 className="text-center my-3">CREA TU CUENTA</h2>
                        <p className="my-3">Información del usuario *</p>
                        <div className="col">
                            <input 
                                type="text" 
                                placeholder="Nombre" 
                                className="form-control my-2" 
                                value={nombre}
                                onChange={handleChange('nombre')}
                            />
                            <input 
                                type="text" 
                                placeholder="Dirección" 
                                className="form-control my-2" 
                                value={direccion_empresa}
                                onChange={handleChange('direccion_empresa')}
                            />
                            <input 
                                type="email" 
                                placeholder="Email" 
                                className="form-control my-2" 
                                value={correo}
                                onChange={handleChange('correo')}
                            />
                            <input 
                                type="password" 
                                placeholder="Contraseña" 
                                className="form-control my-2" 
                                value={password}
                                onChange={handleChange('password')}
                            />
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
                            <input 
                                type="text" 
                                placeholder="Razón social" 
                                className="form-control my-2" 
                                value={rs_empresa}
                                onChange={handleChange('rs_empresa')}    
                            />
                            <input 
                                type="text" 
                                placeholder="Industria" 
                                className="form-control my-2" 
                                value={rubro}
                                onChange={handleChange('rubro')}
                            />
                        </div>
                        <div className="col-md-6">
                            <input 
                                type="number" 
                                placeholder="RUC" 
                                className="form-control my-2" 
                                value={ruc_empresa}
                                onChange={handleChange('ruc_empresa')}
                            />
                            <input 
                                type="number" 
                                placeholder="Teléfono" 
                                className="form-control my-2" 
                                value={cel_empresa}    
                                onChange={handleChange('cel_empresa')}
                            />
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
                            <button type="button" onClick={clickSubmit} className="btn btn-primary btn-llamakay" style={{width:"100%"}}>Crear cuenta</button>
                        </div>
                    </div>
                    <br></br>
                </div>
            </div>
        </div>
    )
}