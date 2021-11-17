import React from 'react';
import '../scss/index.css';

class Principal extends React.Component {
    render() {
        return(
            <div className="principal">
                <div className="principal-container">
                    <span className="card-title" style={{fontSize: 40, color: '#fff'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </div>
            </div>
        )
    }
}

export default Principal;