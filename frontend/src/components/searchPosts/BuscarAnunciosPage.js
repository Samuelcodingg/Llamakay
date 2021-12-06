import { NavbarComponent } from "../ui/NavbarComponent";
import { AnuncioBusqueda } from "./AnuncioBusqueda";

export const BuscarAnunciosPage = () => {
    return (
        <div>
            <NavbarComponent/><br></br>
            <h2 style={{ textAlign: "center" }}>Ofertas de trabajo</h2><br></br>
            <div className="buscar-anuncio-content-container" style={{width:"95%", marginLeft:"2.5%", marginRight:"2.5%"}}>
                <div className="filtro-container">
                    <div className="filtros mt-3">
                        <div className="filtros-busqueda">
                            <h3>Palabra clave</h3>
                            <input type="search"></input>
                        </div>
                        <div className="filtros-fecha">
                            <h3>Fecha de publicación</h3>
                            <p>Urgente</p>
                            <p>Últimos 3 días</p>
                            <p>Última semana</p>
                            <p>Últimos 15 días</p>
                            <p>Último mes</p>
                        </div>
                        <div className="filtros-distrito">
                            <h3>Distrito</h3>
                            <p>Lima</p>
                            <p>Miraflores</p>
                            <p>Chosica</p>
                            <p>Ate</p>
                            <p>Lince</p>
                        </div>

                        <div className="filtros-salario">
                            <h3>Salario</h3>
                            <p>Menos de S/.750</p>
                            <p>Más de S/.750</p>
                            <p>Más de S/.1500</p>
                            <p>Más de S/.2500</p>
                            <p>Más de S/.3500</p>
                        </div>

                        <div className="filtros-jornada">
                            <h3>Jornada</h3>
                            <p>Tiempo Completo</p>
                            <p>Tiempo parcial</p>
                            <p>Desde casa</p>
                        </div>

                    </div>
                </div>
                <div className="anuncios-container">
                    <div className="anuncios-container-cabecera">
                        <div className="anuncios-notificacion">
                            <p><i class='bx bx-bell-plus bx-tada bx-rotate-180'></i>Avísame de trabajos similares</p>
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
                    <AnuncioBusqueda/>
                </div>
            </div>
        </div>
    )
}