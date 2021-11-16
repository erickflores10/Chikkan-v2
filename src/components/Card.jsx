import React from 'react';
import imagenPrueba from '../assets/images/imagen-prueba.png';
import '../scss/index.css';

class Card extends React.Component {
    render() {
        return(
            <div className="card">
                <img src={imagenPrueba} alt={this.props.alt}/>
                <div className="card-content">
                    <span className="card-title">Titulo de noticia</span>
                    <h5 className="card-subtitle">Autor | Lugar | Fecha</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare massa neque, vel sodales lorem accumsan sed.</p>
                </div>
                <div className="card-activity">
                    <div className="card-activity__item">
                        <i className="fas fa-comment-alt"></i>
                        <i className="far fa-eye"></i>
                    </div>
                    <div className="card-activity__item">
                        <span className="card-subtitle">Cathegory</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;