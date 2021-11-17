import React from "react";
import { Link } from "react-router-dom";
import '../scss/index.css';

class Buttons extends React.Component {
    render() {
        return (
            <Link className="btn-primary" to="/register">{this.props.content}</Link>
        )
    }
}




export default Buttons;