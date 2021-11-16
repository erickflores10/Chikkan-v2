import React from "react";
import Buttons from './Buttons';

import image150x150 from '../assets/images/image-150x150.jpg';
import '../scss/index.css';

class MinCard extends React.Component {
    render() {
        return(
            <div className="contenedor">
                <div className="min-card">
                    <img src={image150x150} alt={this.props.alt}/>
                    <div className="min-card__item">
                        <span className="card-title">Titulo de noticia</span>
                        <h5 className="card-subtitle">Autor | Lugar | Fecha</h5>
                        <Buttons content="Leer mas"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MinCard;