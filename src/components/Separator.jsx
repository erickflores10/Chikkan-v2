import React from 'react';
import '../scss/index.css';

class Separator extends React.Component {
    render() {
        return(
            <h1 className="separator">{this.props.sectionName}</h1>
        )
    }
}

export default Separator;