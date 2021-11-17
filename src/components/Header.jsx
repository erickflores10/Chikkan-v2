import React from 'react';
import { Link } from 'react-router-dom';
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
    
    scrollToCategory() {
        document.querySelector('.c-title').scrollIntoView({
            behavior: 'smooth'
        });
    }

    scrollToRecent() {
        document.querySelector('.r-title').scrollIntoView({
            behavior: 'smooth'
        });
    }

    scrollToFeatured() {
        document.querySelector('.f-title').scrollIntoView({
            behavior: 'smooth'
        });
    }

    //Renderizado
    render() {
        return(
            <header className="header">
                <div className="header-container nav__top">
                    {/*<img className="nav-img"/>*/}
                    <h3><Link to="/">Chikkan</Link></h3>  
                    <div className="header-container__item">
                        <a className="link-btn">Inicia sesion</a>
                        <Buttons content="Registrar"/>
                    </div>
                </div>
                <nav className="header-container nav__bottom">
                    <div className="header-container__item second-header">
                        <i className="fas fa-bars" onClick={this.menuActive}></i>
                        <a className="link-btn nav-link target" onClick={this.scrollToRecent}>Recientes</a>
                        <a className="link-btn nav-link target" onClick={this.scrollToCategory}>Categorias</a>
                        <a className="link-btn nav-link target" onClick={this.scrollToFeatured}>Destacados</a>
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