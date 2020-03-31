import React, {Component} from 'react';



class Button extends Component {
    constructor(props){
        super(props)
    }

    render() {

        console.log(this.props.disabled)

        const {size,title,type}=this.props.ButtonData;
        if(this.props.disabled){
            return (
                <button disabled className={"xg-btn xg-btn-"+size+" "+type}>{this.props.Icon?(<i className={"iconfont "+this.props.Icon}></i>):""}{title?(<span>{title}</span>):""}</button>
            );
        }else{
            return (
                <button className={"xg-btn xg-btn-"+size+" "+type}>{this.props.Icon?(<i className={"iconfont "+this.props.Icon}></i>):""}{title?(<span>{title}</span>):""}</button>
            );
        }

    }
}

export default Button;