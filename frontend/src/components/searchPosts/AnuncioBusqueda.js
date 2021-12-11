import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { getUser } from "../../api/user"

export const AnuncioBusqueda = ({title, img, id_empresa, descripcion_breve, fecha_publicacion, id_anuncio}) => {

    const [empresa, setEmpresa] = useState({
        nombre: "",
        departamento: "",
    });

    const getInfoEmpresa = () => {
        getUser({empresa: {_id: id_empresa}}).then(res => {
            setEmpresa(
                {
                    nombre: res.nombre,
                    departamento: res.departamento,
                }
            );
        })
    }

    useEffect(()=>{
        getInfoEmpresa();
    },[]);

    return (
        <div className="anuncio-busqueda">
            <Link to={`/anuncio/${id_empresa}/${id_anuncio}`}>
                <div className="anuncio-busqueda-content">
                        <div className="anuncio-busqueda-text">
                        <p className="titulo-anuncio">{title}</p>
                            <p>{empresa.nombre}, {empresa.departamento}</p>
                            <p>{descripcion_breve}...</p>
                            <p>Fecha de publicación: {fecha_publicacion}</p>
                        </div>
                        <div className="anuncio-busqueda-img">
                            <img src={img} alt="img-empresa"className="img-fluid" style={{maxHeight: '120px'}}/>
                        </div>
                </div>
            </Link>
        </div>


    )
}