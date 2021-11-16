import React from "react";
import '../scss/index.css';

class Buttons extends React.Component {
    render() {
        return (
            <button className="btn-primary">
                {this.props.content}
            </button>
        )
    }
}




export default Buttons;