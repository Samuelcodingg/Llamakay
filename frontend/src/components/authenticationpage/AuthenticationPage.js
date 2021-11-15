import React from 'react';
import saly from './Saly-1.png';
import { useParams } from 'react-router-dom';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';


export const AuthenticationPage = () => {

    const { type } = useParams();

    return (
        <div className="bg-oscuro">
            <img src={saly} alt="Saly" className="img-fluid position-absolute saly d-none d-md-block" />
            <div className="container me-0">
                <div className="row">
                    <div className="offset-md-3 col-md-9 bg-white py-5 rounded-25 remove-border-right">
                        <div className="text-center">
                            { type === 'login' ? <LoginForm /> : <RegisterForm /> }
                        </div>
                    </div>
                </div>    
            </div>   
        </div>
    )
}
