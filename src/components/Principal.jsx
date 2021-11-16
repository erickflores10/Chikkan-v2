import React from 'react';
import '../scss/index.css';

class Principal extends React.Component {
    render() {
        return(
            <div className="principal">
                <div className="principal-container">
                    <span className="card-title" style={{fontSize: 40, color: '#fff'}}>Hola soy un titulo general de la pagina para primera impresion</span>
                </div>
            </div>
        )
    }
}

export default Principal;