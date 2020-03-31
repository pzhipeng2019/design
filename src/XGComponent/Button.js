import React, {Component} from 'react';



class Button extends Component {
    constructor(props){
        super(props)
    }
onClick=()=>{
        if(this.props.onClick){
            this.props.onClick()
        }
}
    render() {

        //console.log(this.props)

        const {size,title,type}=this.props.ButtonData;
        if (this.props.icon) {
           // console.log(this.props.icon);
            const { icon}=this.props.icon;
        }
        let sizeClass=""
        if(size==="large"){
            sizeClass="lg"
        }else if(size==="small"){
            sizeClass="sm"
        }else{
            sizeClass=size
        }

        return (
            <button
                className={"xg-btn xg-btn-"+sizeClass+" "+type}
                disabled={this.props.disabled}
                onClick={this.onClick}
            >
                {this.props.icon?(<i className={"iconfont "+this.props.icon}></i>):""}
                {title?title:''}
                {this.props.children}
            </button>
        );
    }
}

export default Button;