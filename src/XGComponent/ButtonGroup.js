import React, {Component} from 'react';

class ButtonGroup extends Component {
    constructor(props){
        super(props)
    }


    render() {
        console.log(this.context)
        return (
            <div className="xg-btn-group xg-btn-group-lg">
                {this.props.children}
            </div>
        );
    }
}

export default ButtonGroup;