import imgEmp from "./image_emp_01.png";

export const AnuncioBusqueda = ({title}) => {
    return (
        <div className="anuncio-busqueda">
            <a href="https://www.google.com" target="_blank" rel="noreferrer">
                <div className="anuncio-busqueda-content">
                        <div className="anuncio-busqueda-text">
                        <p className="titulo-anuncio">{title}</p>
                            <p>Empresa - Lugar - ⭐5</p>
                            <p>Resumen de la publicación, one two, onw two three four five. Poquitas palabras ra</p>
                            <p>Fecha de publi</p>
                        </div>
                        <div className="anuncio-busqueda-img">
                            <img src={imgEmp} alt="img-empresa"/>
                        </div>
                </div>
            </a>
        </div>


    )
}