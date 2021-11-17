import React, { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";
import '../scss/index.css';


//Aside ayudara en la lectura dependiendo de cuantos subtitulos tenga la redaccion.

class PostAside extends Component {
    render() {
        return(
            <Fragment>
                <aside className="aside">
                    <h4>Indice</h4>
                    <ul className="aside-container">
                        <li className="aside-container__item">Indice 1</li>
                        <li className="aside-container__item">Indice 2</li>
                        <li className="aside-container__item">Indice 3</li>
                        <li className="aside-container__item">Indice 4</li>
                    </ul>
                </aside>
            </Fragment>
        )
    }
}


export default PostAside;