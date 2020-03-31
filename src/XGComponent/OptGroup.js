import React, {Component} from 'react';

class OptGroup extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {children,onChange,lable}=this.props;
        //console.log(this.props)
        return (
            <li className=" xg-select-dropdown-menu-item-group">
                <div className="xg-select-dropdown-menu-item-group-title" title={lable}>{lable}</div>
                <ul className="xg-select-dropdown-menu-item-group-list">
                    {
                        typeof children[0] ==="object"?(

                                    children.map((item,index)=>{
                                        return(
                                            <item.type key={index} value={item.props.value} onChange={onChange}>{item.props.children}</item.type>
                                        )
                                    })



                        ):(<children.type value={children.props.value} onChange={onChange}>{children.props.children}</children.type>)
                    }
                </ul>
            </li>
        );
    }
}

export default OptGroup;