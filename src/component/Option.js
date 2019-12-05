import React, {Component} from 'react';

class Option extends Component {
    constructor(props) {
        super(props);

    }
    componentWillMount() {
    }
    handleOption=(e)=>{
        console.log(e.currentTarget.getAttribute("value"))
        const text=e.currentTarget.innerText
        const value=e.currentTarget.getAttribute("value")
        if(this.props.onChange){
            if(e.currentTarget.getAttribute("aria-disabled") !="true"){
                this.props.onChange(text,value)
            }

        }
    }

    render() {
        console.log( this.props)
        return (
            <li
                role="option"
                unselectable="on"
                className={"xg-select-dropdown-menu-item"+(this.props.disabled==="true"?" xg-select-dropdown-menu-item-disabled":"")}
                aria-selected="false"
                aria-disabled={this.props.disabled==="true"?"true":""}
                style={{userSelect: "none"}}
                onClick={this.handleOption}
                value={this.props.value}
            >
                {this.props.children}
            </li>
        );
    }
}

export default Option;