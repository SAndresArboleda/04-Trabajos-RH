import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./navPpal.css"

export const NavPpal = () => {
    return (
        <div id="contNavPpal">
            <header>
                <div className="container">
                    <a href="/">
                        <img src="src\Componentes\Fotos\Firma.JPG" alt="logo" className="logo"/>
                    </a>
                    <nav>
                        <a href="#Inicio">Inicio</a>
                        <a href="#Closet">Closet</a>
                        <a href="#Cocinas">Cocinas</a>
                        <a href="#Gabinetes">Gabinetes</a>
                    </nav>
                    <FontAwesomeIcon icon="fa-solid fa-bars" />
                    <a href="#" className="hamb"><i className="fas fa-bars"></i></a>
                </div>
            </header>
            h1 soy nav ppal
        </div>
    )
}