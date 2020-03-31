import React, {Component} from 'react';

class Tag extends Component {
    render() {
        return (
            <span className={"xg-tag"+(this.props.color?" xg-tag-"+this.props.color:"")}>
                {this.props.children}
            </span>
        );
    }
}

export default Tag;