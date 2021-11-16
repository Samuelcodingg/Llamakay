import { API } from '../config';

export const signin = async (user) => {

    let usuario = '';

    if(user.tipo_usuario === '1'){
        usuario = 'Empresa'
    }
    else if(user.tipo_usuario === '2'){
        usuario = 'Alumno'
    }

    const response = await fetch(`${API}/auth/signin${usuario}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    });
    return response.json();
};

export const authenticate = (data, next) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(data));
        next();
    }
};

export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false;
    }
    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'));
    } else {
        return false;
    }
};