import React, {Component} from 'react';
import {CSSTransition} from "react-transition-group";

class Item extends Component {
    constructor(props){
        super(props);
    }
    render() {
        //console.log(this)
        return (
            <li className="xg-menu-item" role="menuitem" style={{paddingLeft:"48px"}}>{this.props.children}</li>
        );
    }
}

export default Item;