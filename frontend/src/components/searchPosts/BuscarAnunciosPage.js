import React, { useState } from "react";
import { NavbarComponent } from "../ui/NavbarComponent";
import { Footer } from "../ui/Footer";
import { AnuncioBusqueda } from "./AnuncioBusqueda";
import { listarAnuncios } from "../../api/anuncio";
import { API } from "../../config";

export const BuscarAnunciosPage = () => {

    /*Tengo que insertar el elemento que se haya seleccionado*/
    /*Tengo que eliminar la sección de filtros del filtro seleccionado*/ 
    /*Si se cancela uno de los filtros, tengo que restablecer la sección del filtro*/ 
    const [anuncios, setAnuncios] = useState([]);

    const getAnuncios = () => {
        listarAnuncios().then(response => {
            setAnuncios(response.data);
            console.log(response.data);
        });
    }

    const seleccionarFiltro = evento => {
        const filtrosSelectedContenedor = document.querySelector(".filtros-seleccionados")
            , filtros = document.querySelectorAll(".filtros div a"), filtrosSelected = document.querySelectorAll(".filtro-seleccionado");

        filtros.forEach(el => {
            if (evento.target === el) {
                let filtroCreado = document.createElement("div");
                filtroCreado.classList.add("filtro-seleccionado");
                filtroCreado.innerHTML = `<div><p>${el.textContent}</p></div>
                                <div><a href="#"><i class='bx bx-x'></i></a></div>`;
                filtrosSelectedContenedor.insertAdjacentElement("afterbegin", filtroCreado);
                el.parentElement.classList.add("visibilidad");
            } 
        })

        filtrosSelected.forEach(el => {
            if (evento.target === el.querySelector("div a i")) {
                filtros.forEach(filt => {
                    if (filt.textContent === el.querySelector("div p").textContent) {
                        filt.parentElement.classList.remove("visibilidad");
                    }
                })
                el.remove();
            }
        })

        if (document.querySelectorAll(".filtros-seleccionados .filtro-seleccionado").length === 0) {
            document.querySelector(".filtros-seleccionados").parentElement.classList.add("visibilidad");
        } else {
            document.querySelector(".filtros-seleccionados").parentElement.classList.remove("visibilidad");
        }
    };

    const cargarFiltros = evento => {
        if (document.querySelectorAll(".filtros-seleccionados .filtro-seleccionado").length === 0) {
            document.querySelector(".filtros-seleccionados").parentElement.classList.add("visibilidad");
        } else {
            document.querySelector(".filtros-seleccionados").parentElement.classList.remove("visibilidad");
        }
    }

    React.useEffect(() => {
        window.addEventListener("DOMContentLoaded", cargarFiltros);

        getAnuncios();

        // return () => {
        //     window.removeEventListener("click", seleccionarFiltro);
        //     window.removeEventListener("DOMContentLoaded", cargarFiltros);

        // }
    }, []);

    return (
        <div>
            <NavbarComponent/><br></br>
            <h2 style={{ textAlign: "center" }}>Ofertas de trabajo</h2><br></br>
            <div className="buscar-anuncio-content-container" style={{width:"95%", marginLeft:"2.5%", marginRight:"2.5%"}}>
                <div className="filtro-container">
                    <div className="filtros mt-3">
                        <div className="filtros-seleccionados-contenedor">
                            <h3>Filtros seleccionados</h3>
                            <div className="filtros-seleccionados" onClick={seleccionarFiltro} >
                            </div>
                        </div>
                        <div className="filtros-busqueda">
                            <h3>Palabra clave</h3>
                            <input type="text" placeholder="Cargo / Área"></input>
                        </div>
                        <div className="filtros-fecha">
                            <h3>Fecha de publicación</h3>
                            <a href="#" onClick={seleccionarFiltro} >Urgente</a>
                            <a href="#" onClick={seleccionarFiltro}>Últimos 3 días</a>
                            <a href="#" onClick={seleccionarFiltro}>Última semana</a>
                            <a href="#" onClick={seleccionarFiltro}>Últimos 15 días</a>
                            <a href="#" onClick={seleccionarFiltro}>Último mes</a>
                        </div>
                        <div className="filtros-distrito">
                            <h3>Distrito</h3>
                            <a href="#" onClick={seleccionarFiltro}>Lima</a>
                            <a href="#" onClick={seleccionarFiltro}>Miraflores</a>
                            <a href="#" onClick={seleccionarFiltro}>Chosica</a>
                            <a href="#" onClick={seleccionarFiltro}>Ate</a>
                            <a href="#" onClick={seleccionarFiltro}>Lince</a>
                        </div>

                        <div className="filtros-salario">
                            <h3>Salario</h3>
                            <a href="#" onClick={seleccionarFiltro}>Menos de S/.750</a>
                            <a href="#" onClick={seleccionarFiltro}>Más de S/.750</a>
                            <a href="#" onClick={seleccionarFiltro}>Más de S/.1500</a>
                            <a href="#" onClick={seleccionarFiltro}>Más de S/.2500</a>
                            <a href="#" onClick={seleccionarFiltro}>Más de S/.3500</a>
                        </div>

                        <div className="filtros-jornada">
                            <h3>Jornada</h3>
                            <a href="#" onClick={seleccionarFiltro}>Tiempo Completo</a>
                            <a href="#" onClick={seleccionarFiltro}>Tiempo parcial</a>
                            <a href="#" onClick={seleccionarFiltro}>Desde casa</a>
                        </div>

                    </div>
                </div>
                <div className="anuncios-container">
                    <div className="anuncios-container-cabecera">
                        <div className="anuncios-notificacion">
                            <p><i class='bx bx-bell-plus bx-tada bx-rotate-180' style={{fontSize:"1.2rem"}}></i>Avísame de trabajos similares</p>
                        </div>
                        <div className="anuncios-ordenar">
                            <p>Ordenar por:  &nbsp;</p>
                            
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Relevancia</option>
                                <option value="1">Fecha</option>
                                <option value="2">Otra cosa</option>
                            </select>
                        </div>
                    </div>
                    <div className="anuncios-container-body">
                        {
                            anuncios.map(anuncio => (
                                <AnuncioBusqueda 
                                    key={anuncio._id} 
                                    title={anuncio.titulo}
                                    img={`${API}/auth/empresas/photo/${anuncio.id_empresa}`}
                                    id_empresa={anuncio.id_empresa}
                                    descripcion_breve={anuncio.des_puesto.substring(0, 100)}
                                    fecha_publicacion={anuncio.fecha_publicacion.substring(0, 10)}
                                    id_anuncio={anuncio._id}
                                />
                            ))
                        }
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}