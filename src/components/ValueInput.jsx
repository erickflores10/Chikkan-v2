import React from "react";


class ValueInput extends React.Component {
    render() {
        return(
            <>
                <input
                    className="input-text"
                    required
                    placeholder={this.props.name}
                ></input>
            </>
        )
    }
}

export default ValueInput;