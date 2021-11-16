import React from 'react';
import '../scss/index.css';

class Dropdown extends React.Component {
    render() {
        return(
            <div className="dropdown">
                <ul className="dropdown-container">
                    <li className="dropdown-container__item"><a href="#">Primer item</a></li>
                    <li className="dropdown-container__item"><a href="#">Segundo item</a></li>
                    <li className="dropdown-container__item"><a href="#">Tercer item</a></li>
                    
                    <div className="dropdown-subcontainer">
                        <li className="dropdown-container__item"><a href="#"><i className="fas fa-times"></i>Item principal</a></li>
                    </div>
                </ul>
            </div>
        )
    }
}

export default Dropdown;