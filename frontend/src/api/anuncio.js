import { API } from "../config";

export const getAnuncioById = async (user) => {
    const response = await fetch(`${API}/anuncios/${user.idAnuncio}`, {
        method: "GET",
    });
    return response.json();
};

