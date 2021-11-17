import { API } from '../config';

export const getUser = async (user) => {

    let usuario = '';
    let id = '';

    if(user.empresa) {
        usuario = 'empresas';
        id = user.empresa._id;
    }
    else if(user.alumno) {
        usuario = 'alumnos';
        id = user.alumno._id;
    }

    const response = await fetch(`${API}/auth/${usuario}/${id}`);
    const data = await response.json();
    return data;
}