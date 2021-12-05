import imgEmp from "./image_emp_01.png";

export const AnuncioBusqueda = () => {
    return (
        <div className="anuncio-busqueda">
            <a href="www.google.com">
                <div className="anuncio-busqueda-content">
                        <div className="anuncio-busqueda-text">
                            <p className="titulo-anuncio">Título del anuncio</p>
                            <p>Empresa - Lugar</p>
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