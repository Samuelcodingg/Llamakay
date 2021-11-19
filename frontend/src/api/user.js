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

export const editEmpresa = async (user) => {
    const response = await fetch(`${API}/auth/empresas/${user._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    const data = await response.json();
    return data;
}

export const updatePhotoEmpresa = async (photo) => {
    const response = await fetch(`${API}/auth/empresas/updatePhotoEmpresa/${photo._id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
        },
        body: JSON.stringify(photo)
    });
    return response.json();
};