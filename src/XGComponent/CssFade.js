import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {CSSTransition} from 'react-transition-group';
class CssFade extends Component {
    componentDidMount(){
        this.boxDOM = ReactDOM.findDOMNode(this.refs.box);
       // console.log(this.boxDOM)
        this.setState({
            BoxH:this.boxDOM.offsetHeight,
        })

    }
    render() {
        const { in: inProp,trigger:obj} = this.props;

        console.log()
        return (
            <CSSTransition in={inProp} classNames="fadeslide-up" timeout={300}
                //onEnter <Transition>组件的回调函数，当组件enter或appear时会立即调用。
                           onEnter={()=>{

                               this.boxDOM.classList.remove("xg-dropdown-hidden") ;
                              //this.boxDOM.style.opacity = 0;
                           }}
                //onEntering也是一个过渡组件的回调函数，当组件enter-active或appear-active时，立即调用此函数
                           onEntering={()=>{
                             // this.boxDOM.style.opacity = 1;

                           }}
                //onEntered同样是回调函数，当组件的enter,appearclassName被移除时，意即调用此函数
                           onEntered={()=>{
                              this.boxDOM.style = "";
                           }}
                //onExit当组件应用exit类名时，调用此函数
                           onExit={()=>{
                            //  this.boxDOM.style.opacity = 1;
                           }}
                //onExiting 当组件应用exit-active类名时，调用此函数
                           onExiting={()=>{
                             //  this.boxDOM.style.opacity = 0;

                           }}
                //onExited 当组件exit类名被移除，且添加了exit-done类名时，调用此函数
                           onExited={()=>{
                               this.boxDOM.classList.add("xg-dropdown-hidden");
                              this.boxDOM.style = "";
                               // this.boxDOM.style.height="0px"
                           }}

            >


                <div ref="box" className={"xg-dropdown-hidden"}>
                    {this.props.children}
                </div>

            </CSSTransition>
        );
    }
}

export default CssFade;