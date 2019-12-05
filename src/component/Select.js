import React, {Component} from 'react';
import Icon from "./Icon";

import CssFade from "./CssFade";

class Select extends Component {
    constructor(props) {
        super(props);
        this.state={
            text:"",
            showBox:false,
            BoxH:0,
            searchValue:"",//搜索框 value 值
            placeholder:"",//搜索框 placeholder 值
        }
        this.handleFocus= this.handleFocus.bind(this)
    }
    componentWillMount() {
        if(this.props.defaultValue){
            this.setState({
                text:this.props.defaultValue
            })
        }
        if(this.props.placeholder){
            this.setState({
                placeholder:this.props.placeholder
            })
        }
    }
    toggleBox=(e)=>{
        console.log(e)
        var el=e.currentTarget;

        this.setState({
            showBox:!this.state.showBox,
        })



    }
    componentWillUpdate(nextProps, nextState, nextContext) {
        if(this.props.showSearch){
            if(nextState.showBox){
                console.log(document.getElementById("field"))
                // this.input.focus()
                //  this.handleFocus();
                this.timer= setTimeout( this.handleFocus,500)

            }
        }


    }
    componentWillUnmount() {    // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }
    handleSelect=(text,value)=>{
        console.log(text)
        this.setState({
            showBox:!this.state.showBox,
            text:text
        })
        if(this.props.onChange){
            this.props.onChange(value)
        }
    }
    handleFocus=()=>{
        console.log("handleFocus")
        this.textInput.focus();
    }
    handleInputonChange=(e)=>{
        console.log(e.currentTarget.value)
        this.setState({
            searchValue:e.currentTarget.value
        })
    }
    handleBlur=()=>{
        /*this.setState({
            showBox:!this.state.showBox,
            searchValue:""
        })
*/
    }
    render() {
        console.log(this.props.style)
        const {text,showBox,searchValue,placeholder}=this.state;
        const {children}=this.props
        console.log( this.props)
        console.log(  children)
        return (
            <div className={"xg-select"+(this.props.disabled?" xg-select-disabled":" xg-select-enabled")+(this.state.showBox?" xg-select-open":"")} style={this.props.style}>
                <div className="xg-select-selection xg-select-selection--single"
                     role="combobox"
                     aria-autocomplete="list"
                     aria-haspopup="true"
                     aria-controls="a2b55a97-c258-4729-e59f-e82e4be99d22"
                     aria-expanded={this.state.showBox}
                     tabIndex="0"
                     onClick={this.props.disabled?null:(this.toggleBox)}
                >
                    <div className="xg-select-selection__rendered">
                        {
                            this.props.placeholder?(<div unselectable="on" className="xg-select-selection__placeholder" style={{display: (showBox && text !=undefined?"none":"block"), userSelect: "none"}}>
                                {placeholder}
                            </div>):null
                        }

                        <div className="xg-select-selection-selected-value" title="Lucy" style={{display: "block", opacity: "1"}}>{text}</div>
                        {
                            this.props.showSearch?(<div className="xg-select-search xg-select-search--inline" style={{display: (showBox?"block":"none")}}>
                                <div className="xg-select-search__field__wrap">
                                    <input autoComplete="off" className="xg-select-search__field" placeholder={placeholder} value={searchValue} onChange={this.handleInputonChange} ref={(input) => { this.textInput = input; }} onBlur={this.handleBlur}/>
                                    <span className="xg-select-search__field__mirror">&nbsp;</span>
                                </div>
                            </div>):null
                        }

                    </div>
                    <span className="xg-select-arrow" unselectable="on" style={{userSelect: "none"}}>
                        <Icon title="icon-down xg-select-arrow-icon"/>
                    </span>
                </div>

                <div style={{position:"absolute",width:"100%",height:"100%"}}>
                    <CssFade in={this.state.showBox} id={"sub1"}>
                        <div className="xg-select-dropdown xg-select-dropdown--single xg-select-dropdown-placement-bottomLeft " style={{width:this.props.style.width,left: "0", top: "0"}}>
                            <div id="a2b55a97-c258-4729-e59f-e82e4be99d22" style={{overflow: "auto", transform: "translateZ(0px)"}}>
                                <ul role="listbox" className="xg-select-dropdown-menu  xg-select-dropdown-menu-root xg-select-dropdown-menu-vertical" tabIndex="0" >

                                    {
                                        typeof children ==="object" && children.length>1?(
                                                children.map((v,k)=>{
                                                    return(
                                                        <v.type key={k} onChange={this.handleSelect} disabled={v.props.disabled?"true":"false"} value={v.props.value}>{v.props.children}</v.type>
                                                    )
                                                })

                                        ):(

                                        <children.type onChange={this.handleSelect} disabled={children.props.disabled?"true":"false"} value={children.props.value}>{children.props.children}</children.type>

                                        )
                                    }

                                </ul>
                            </div>
                        </div>
                    </CssFade>
                </div>

            </div>
        );



    }
}

export default Select;