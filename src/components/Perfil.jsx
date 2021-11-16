import React from 'react';
import '../scss/index.css';
import userAvatar from '../assets/icons/userFile.png';


class Perfil extends React.Component {
    render() {
        return(
            <div className="user">
                <div className="user-profile">
                    <img src={userAvatar} />
                </div>
                <div className="user-dropdown">
                    <i className="fas fa-sort-down"></i>
                </div>
            </div>
        )
    }
}


export default Perfil;