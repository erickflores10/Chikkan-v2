import React, { Component } from 'react';
import '../scss/index.css';

class Categorias extends Component {
    render() {
        return(
            <div className="filter">
                <div className="filter-container">
                    <div className="filter-container__item">
                        <span className="filter-category">Ciencia</span>
                    </div>
                    <div className="filter-container__item">
                        <span className="filter-category">Arte</span>
                    </div>
                    <div className="filter-container__item">
                        <span className="filter-category">Tecnologia</span>
                    </div>
                    <div className="filter-container__item">
                        <span className="filter-category">Economia</span>
                    </div>
                    <div className="filter-container__item">
                        <span className="filter-category">eSports</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Categorias;