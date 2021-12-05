import { NavbarComponent } from "../ui/NavbarComponent";
import { AnuncioBusqueda } from "./AnuncioBusqueda";

export const BuscarAnunciosPage = () => {
    return (
        <div>
            <NavbarComponent/>
            <h2 style={{ textAlign: "center" }}>Ofertas de trabajo</h2>
            <div>
                
            </div>
            <AnuncioBusqueda/>
        </div>
    )
}