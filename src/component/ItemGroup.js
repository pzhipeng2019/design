import React, {Component} from 'react';
import Item from "./Item";

class ItemGroup extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <li className=" xg-menu-item-group">
                <div className="xg-menu-item-group-title" title="Item 1">{this.props.title}</div>
                <ul className="xg-menu-item-group-list">
                    {this.props.children}

                </ul>
            </li>
        );
    }
}

export default ItemGroup;