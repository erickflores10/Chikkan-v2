import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../scss/index.css';

class ButtonAction extends Component {
    render() {
        return(
            <Link className="btn-primary" to="/posts">{this.props.content}</Link>
        )
    }
}

export default ButtonAction;