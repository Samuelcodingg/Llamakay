import React from "react";
import { NavbarComponent } from "../ui/NavbarComponent";
import { Footer } from "../ui/Footer";
import { AnuncioBusqueda } from "./AnuncioBusqueda";

export const BuscarAnunciosPage = () => {

    /*Tengo que insertar el elemento que se haya seleccionado*/
    /*Tengo que eliminar la sección de filtros del filtro seleccionado*/ 
    /*Si se cancela uno de los filtros, tengo que restablecer la sección del filtro*/ 
    

    const seleccionarFiltro = evento => {
        const $filtrosSelectedContenedor = document.querySelector(".filtros-seleccionados")
            , $filtros = document.querySelectorAll(".filtros div a"), $filtrosSelected = document.querySelectorAll(".filtro-seleccionado");

        $filtros.forEach(el => {
            if (evento.target === el) {
                let $filtroCreado = document.createElement("div");
                $filtroCreado.classList.add("filtro-seleccionado");
                $filtroCreado.innerHTML = `<div><p>${el.textContent}</p></div>
                                <div><a href="#"><i class='bx bx-x'></i></a></div>`;
                $filtrosSelectedContenedor.insertAdjacentElement("afterbegin", $filtroCreado);
                el.parentElement.classList.add("visibilidad");
            } 
        })

        $filtrosSelected.forEach(el => {
            if (evento.target === el.querySelector("div a i")) {
                $filtros.forEach(filt => {
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
        window.addEventListener("click", seleccionarFiltro);
        window.addEventListener("DOMContentLoaded", cargarFiltros);

        return () => {
            window.removeEventListener("click", seleccionarFiltro);
            window.removeEventListener("DOMContentLoaded", cargarFiltros);

        }
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
                            <div className="filtros-seleccionados">
                            </div>
                        </div>
                        <div className="filtros-busqueda">
                            <h3>Palabra clave</h3>
                            <input type="text" placeholder="Cargo / Área"></input>
                        </div>
                        <div className="filtros-fecha">
                            <h3>Fecha de publicación</h3>
                            <a href="#">Urgente</a>
                            <a href="#">Últimos 3 días</a>
                            <a href="#">Última semana</a>
                            <a href="#">Últimos 15 días</a>
                            <a href="#">Último mes</a>
                        </div>
                        <div className="filtros-distrito">
                            <h3>Distrito</h3>
                            <a href="#">Lima</a>
                            <a href="#">Miraflores</a>
                            <a href="#">Chosica</a>
                            <a href="#">Ate</a>
                            <a href="#">Lince</a>
                        </div>

                        <div className="filtros-salario">
                            <h3>Salario</h3>
                            <a href="#">Menos de S/.750</a>
                            <a href="#">Más de S/.750</a>
                            <a href="#">Más de S/.1500</a>
                            <a href="#">Más de S/.2500</a>
                            <a href="#">Más de S/.3500</a>
                        </div>

                        <div className="filtros-jornada">
                            <h3>Jornada</h3>
                            <a href="#">Tiempo Completo</a>
                            <a href="#">Tiempo parcial</a>
                            <a href="#">Desde casa</a>
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
                        <AnuncioBusqueda title="Practicante pre profesional" />
                        <AnuncioBusqueda title="Ingeniero de Software" />
                        <AnuncioBusqueda title="Ingeniero de Sistemas"/>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}