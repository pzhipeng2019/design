import React, {Component} from 'react';

class Divider extends Component {
    render() {
        return (
            <div className={"xg-divider"+(this.props.type?" xg-divider-"+this.props.type:"")} role="separator"></div>
        );
    }
}

export default Divider;