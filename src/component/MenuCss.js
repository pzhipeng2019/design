import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import {CSSTransition} from 'react-transition-group';
class MenuCss extends Component {
    constructor(props){
        super(props);
        this.state={
            showBox:false,
            BoxH:0,
        }
    }
    componentDidMount(){
        this.boxDOM = ReactDOM.findDOMNode(this.refs.box);
        console.log(this.boxDOM)
        this.setState({
            BoxH:this.boxDOM.offsetHeight,

        })
        console.log(this.boxDOM.offsetHeight)
        this.boxDOM.classList.add("xg-menu-hidden")
        var obj=document.getElementById(this.context.defaultOpenKeys);
        if(obj){
            //obj.classList.remove("xg-menu-hidden");
            obj.previousElementSibling.click();
        }

    }
    static contextTypes = {
        propA: PropTypes.string,
        defaultOpenKeys: PropTypes.string,
        methodA: PropTypes.func
    }
    render() {
        const {
            propA,
            defaultOpenKeys,
            methodA
        } = this.context
        const { in: inProp,id:obj} = this.props;
        return (
            <CSSTransition in={inProp} classNames="menuslide-up" timeout={300}
                //onEnter <Transition>组件的回调函数，当组件enter或appear时会立即调用。
                           onEnter={()=>{
                               this.boxDOM.classList.remove("xg-menu-hidden") ;
                               //this.boxDOM.style.height="0px"
                           }}
                //onEntering也是一个过渡组件的回调函数，当组件enter-active或appear-active时，立即调用此函数
                           onEntering={()=>{
                               this.boxDOM.style.height=this.state.BoxH+"px"
                               this.boxDOM.style.opacity=1;
                           }}
                //onEntered同样是回调函数，当组件的enter,appearclassName被移除时，意即调用此函数
                           onEntered={()=>{
                               this.boxDOM.style="";
                           }}
                //onExit当组件应用exit类名时，调用此函数
                           onExit={()=>{
                               this.boxDOM.style.height=this.state.BoxH+"px"
                               this.boxDOM.style.opacity=1;
                           }}
                //onExiting 当组件应用exit-active类名时，调用此函数
                           onExiting={()=>{
                               this.boxDOM.style.height="0px"
                               // this.boxDOM.style.opacity=0;
                           }}
                //onExited 当组件exit类名被移除，且添加了exit-done类名时，调用此函数
                           onExited={()=>{
                               //this.boxDOM.style.display = "none";
                               this.boxDOM.classList.add("xg-menu-hidden");
                               this.boxDOM.style="";
                               // this.boxDOM.style.height="0px"
                           }}
            >

                <ul id={obj} className={"xg-menu xg-menu-sub xg-menu-"+propA} role="menu" ref="box">

                    {this.props.children}
                </ul>
            </CSSTransition>
        );
    }
}

export default MenuCss;