import React from 'react';
import { NavbarComponent } from '../ui/NavbarComponent';
import { RegisterFormEmp } from './RegisterFormEmp';
import { Footer } from '../ui/Footer';

export const RegisterEmpPage = () => {
    return (
        <div>
            <NavbarComponent />
            <div style={{position:"relative"}}>
                <div className="w-100">
                    <img src="https://www.w3schools.com/howto/img_forest.jpg" alt="Forest" style={{ width: "100%", height: "400px" }} />
                </div>
                <div className="vacio">

                </div>
                <div className="register-emp-section" style={{backgroundColor:"white"}}>
                    <RegisterFormEmp/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}