import React, {Component,Fragment} from 'react';
import ReactDOM from 'react-dom';
import {CSSTransition} from "react-transition-group";
import CssFade from "./CssFade";

class Dropdown extends Component {
    constructor(props){
        super(props);
        this.state={
            showBox:false,
            BoxH:'',
            isClickable:false,
        }
    }
    DropdownOver(e){
        var el =e.target;
        if(el.nextSibling){
            el.nextSibling.classList.remove("xg-dropdown-hidden");
           // el.nextSibling.classList.add("fade");
        }
        console.log(el)
    }
    toggleBox=()=>{
        this.setState({
            showBox:!this.state.showBox
        })
    };
    componentDidMount(){
        this.boxDOM = ReactDOM.findDOMNode(this.refs.box);
        console.log(this.boxDOM)
        this.setState({
           // BoxH:this.boxDOM.offsetHeight,
        })

    }
    handleonMouseOver=()=>{
        this.setState({
            showBox:true,
        })
    }
    handleonMouseLeave=()=>{
        this.setState({
            showBox:false,
        })
    }

    render() {
        console.log(this.props)
        const {size,title,type}=this.props.ButtonData;

        const defaultDOM=(
            <div
            onMouseOver={this.handleonMouseOver}
            onMouseLeave={this.handleonMouseLeave}
       >

           <button className={"xg-btn xg-btn-"+size+" "+type}>
               {title?(<span>{title}</span>):""}{this.props.Icon?(<i className={"iconfont "+this.props.Icon}></i>):""}</button>
                <div style={{position:"absolute",width:"100%",height:"100%"}}>
                    <CssFade in={this.state.showBox}>
                        {this.props.children}
                    </CssFade>
            </div>
       </div>)
        const ClickMOD=(
            <div onClick={this.toggleBox}>

                <button className={"xg-btn xg-btn-"+size+" "+type}>
                    {title?(<span>{title}</span>):""}{this.props.Icon?(<i className={"iconfont "+this.props.Icon}></i>):""}</button>
                <div style={{position:"absolute",width:"100%",height:"100%"}}>
                    <CssFade in={this.state.showBox}>
                        {this.props.children}
                    </CssFade>
                </div>
            </div>
        )
        if (this.props.trigger==="click") {
            return (
                <Fragment>
                    {ClickMOD}
                </Fragment>
            )
        }else{
            return(
                <Fragment>
                    {defaultDOM}
                </Fragment>
                )

        }

    }
}

export default Dropdown;