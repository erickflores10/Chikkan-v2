import React from "react";
import '../scss/index.css';


class Footer extends React.Component {
    render() {
        return(
            <footer className="footer">
                <div className="footer-subcontainer">
                    <div className="footer-item">
                        <span className="footer-item__nav">Adicional</span>
                        <ul>
                            <li><a className="footer-link">Terminos y condiciones</a></li>
                            <li><a className="footer-link">Nosotros</a></li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <span className="footer-item__nav">Navegacion</span>
                        <ul>
                            <li><a className="footer-link">Inicio</a></li>
                            <li><a className="footer-link">Recientes</a></li>
                            <li><a className="footer-link">Categorias</a></li>
                            <li><a className="footer-link">Destacados</a></li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <span className="footer-item__nav">Adicional</span>
                        <ul>
                            <li><a className="footer-link">Terminos y condiciones</a></li>
                            <li><a className="footer-link">Nosotros</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-container">
                    <div className="footer-subitem">
                        <span>Riwarcanchispirw</span>
                        <span>Copyright © 2021 Material-UI SAS.</span>
                    </div>
                </div>
            </footer>
        )
    }
}


export default Footer;