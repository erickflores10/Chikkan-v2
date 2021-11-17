import React from "react";
import ButtonAction from "./user/ButtonAction";

import image150x150 from '../assets/images/image-150x150.jpg';
import win11 from '../assets/images/WINDOWS 11 2.png';
import '../scss/index.css';

class MinCard extends React.Component {
    render() {
        return(
            <div className="contenedor">
                <div className="min-card">
                    <img src={win11} alt={this.props.alt}/>
                    <div className="min-card__item">
                        <span className="card-title">Titulo de noticia</span>
                        <h5 className="card-subtitle">Autor | Lugar | Fecha</h5>
                        <ButtonAction content="Leer más"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MinCard;