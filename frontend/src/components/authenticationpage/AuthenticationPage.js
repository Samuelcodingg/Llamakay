import React from 'react';
import saly from './Saly-1.png';
import { useParams } from 'react-router-dom';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';


export const AuthenticationPage = () => {

    const { type } = useParams();

    return (
        <div className="bg-oscuro">
            <div className="position-absolute saly d-none d-lg-block">
                <img src={saly} alt="Saly" className="position-relative img-fluid saly-img" />
            </div>
            <div className="container me-0">
                <div className="row">
                    <div className="offset-sm-3 col-sm-9 bg-white py-5 rounded-25 remove-border-right form-ll-container">
                        <div className="text-center">
                            { type === 'login' ? <LoginForm /> : <RegisterForm /> }
                        </div>
                    </div>
                </div>    
            </div>   
        </div>
    )
}
