import { API } from "../config";

export const getAnuncioById = async (user) => {
    const response = await fetch(`${API}/anuncios/${user.idAnuncio}`, {
        method: "GET",
    });
    return response.json();
};

export const postular = async (data) => {
    const { idAnuncio, idAlumno } = data;

    const response = await fetch(`${API}/anuncios/postular/${idAnuncio}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json();
}

export const isPostulado = async (data) => {
    const { idAnuncio, idAlumno } = data;

    const response = await fetch(`${API}/anuncios/postulado/${idAnuncio}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

export const listarAnuncios = async () => {
    const response = await fetch(`${API}/anuncios/list`, {
        method: "GET",
    });
    return response.json();
};

export const publicarAnuncio = async (data) => {
    const response = await fetch(`${API}/anuncios/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json();
};