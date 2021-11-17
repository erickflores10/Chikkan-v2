import React, { Component } from "react";
import ValueInput from '../ValueInput';
import Separator from "../Separator";
import '../../scss/Layout.css';

/*
--Hacer peticiones de datos desde Node.JS. Dejarlo listo para conectarlo con Firebase.
*/


class LayoutRegister extends Component {
    render() {
        return(
            <section className="register">
                <form className="register-container">
                    <div className="register-container__item">
                        <Separator sectionName="Registrarse" />
                    </div>
                    <div className="register-container__item">
                        <ValueInput name="Nombres" />
                    </div>
                    <div className="register-container__item">
                        <ValueInput name="Apellidos" />
                    </div>
                    <div className="register-container__item">
                        <ValueInput name="Correo electronico" />
                    </div>
                    <div className="register-container__item">
                        <ValueInput name="Contraseña" />
                    </div>
                    <div className="register-container__item">
                        <input type="checkbox" name="subscription" required style={{marginRight: 15, marginTop: 5}} />
                        <label name="subscription">Opt-in to recive occasional product updates, user research invitations, company announcements, and digests.</label>
                        <i className="fas fa-exclamation-circle" style={{marginLeft: 15, marginTop: 5, color: '#007fff'}}></i>
                    </div>
                    <div className="register-container__item">
                        <input className="btn-register" type="submit" value="Sign Up"/>
                    </div>
                    <div className="register-container__item">
                        <span>By clicking "Sign Up", you agree to our terms of service, privacy policy and cookie policy</span>
                    </div>
                </form>
            </section>
        )
    }
}


export default LayoutRegister;