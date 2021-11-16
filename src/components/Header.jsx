import React from 'react';
import Buttons from './Buttons';






class Header extends React.Component {

    // Menu responsive
    menuActive() {
        console.log("Click!");
        const linkNav = document.querySelectorAll('.nav-link');
        const secondHeader= document.querySelector('.second-header');
        
        linkNav.forEach(
            linkNav => linkNav.classList.toggle('menu-active')
        );
        secondHeader.classList.toggle('header-active');
    }


    //Renderizado
    render() {
        return(
            <header className="header">
                <div className="header-container nav__top">
                    {/*<img className="nav-img"/>*/}
                    <h3>Chikkan</h3>  
                    <div className="header-container__item">
                        <a className="link-btn">Inicia sesion</a>
                        <Buttons content="Registrar"/>
                    </div>
                </div>
                <nav className="header-container nav__bottom">
                    <div className="header-container__item second-header">
                        <i className="fas fa-bars" onClick={this.menuActive}></i>
                        <a className="link-btn nav-link">Portada</a>
                        <a className="link-btn nav-link">Recientes</a>
                        <a className="link-btn nav-link">Categorias</a>
                        <a className="link-btn nav-link">Destacados</a>
                    </div>
                    <div className="header-container__item">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fas fa-envelope"></i>
                    </div>
                </nav>
            </header>
        )
    }
}


export default Header;