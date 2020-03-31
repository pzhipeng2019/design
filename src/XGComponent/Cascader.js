import React, {Component,Fragment} from 'react';
import {Link} from "react-router-dom"
import Icon from "./Icon";
import CssFade from "./CssFade";

class Cascader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBox: false,
            optionArr: [],
            newArr:[],
            cascaderText:[],
            valueText:"",
            select:"Please select"
        }
        this.childrenArr=this.childrenArr.bind(this);
        this.addArrOptions=this.addArrOptions.bind(this)
    }
    /*第一次加载 render*/
    componentWillMount() {
        this.setState({
            optionArr:this.props.options
        })
        this.childrenArr(this.props.options);
        if(this.props.defaultValue){
            this.setState({
                cascaderText:this.props.defaultValue
            })
            this.handleValueTextShow(this.props.defaultValue)
        }
    }
   componentWillUpdate(nextProps, nextState, nextContext) {
        if(nextState.optionArr !=this.state.optionArr){
            return true
        }else{
            false
        }
   }

    handleFocus=(e)=>{

        this.setState({
            showBox:true
        })

    }
    handleBlur=()=>{
        console.log("handleBlur")
        this.setState({
            showBox:false
        })
    }

    addArrOptions=(children,disabled,e)=>{
        if(disabled){
            return
        }

        const key=children[0].key
        const old=[];

        if(this.state.optionArr[0] instanceof  Array){
            for(let item in this.state.optionArr  ){
                if(item<key-1){
                    old.push(this.state.optionArr[item])
                }
            }
        }else{
            old.push(this.state.optionArr)
        }
        if(old.indexOf(children)===-1){
            old.push(children)
        }
        this.setState({
            optionArr:old
        })
        /*设置文字 样式*/
        //console.log(e.currentTarget.innerText)
        e.currentTarget.classList.add("xg-cascader-menu-item-active");
        const textArr=[];
        const liText=e.currentTarget.innerText;
        const liKey=e.currentTarget.getAttribute("data-key")

        if(this.state.cascaderText.length>0){
            for(var i=0;i<this.state.cascaderText.length;i++){
                if(i<liKey-1){
                    textArr.push(this.state.cascaderText[i])
                }
            }
            if(textArr.indexOf(liText)===-1){
                textArr.push(liText)
            }
        }else{
            textArr.push(liText)
        }

        //textArr.push(liText)
        this.setState({
            cascaderText:textArr
        })
        if(this.props.changeOnSelect){
            this.handleValueTextShow(textArr)
        }
       console.log(textArr)
    }
    childrenArrNode=(optionArr)=>{

        const add=(
            <ul className="xg-cascader-menu" key={optionArr[0].value}>
                {
                    optionArr.map((item,key)=>{
                        return(
                        item.children?
                          ( <li key={key} data-key={item.key} className={"xg-cascader-menu-item xg-cascader-menu-item-expand"+(item.disabled?" xg-cascader-menu-item-disabled":"")} title={item.value} role="menuitem"  onClick={this.props.expandTrigger?null: (e)=>{this.addArrOptions(item.children,item.disabled,e)}}  onMouseEnter={this.props.expandTrigger && this.props.expandTrigger==="hover"?(e)=>{this.addArrOptions(item.children,item.disabled,e)}:null} >
                            {item.value}
                            <span className="xg-cascader-menu-item-expand-icon">
                                <Icon title="icon-right"/>
                            </span>
                          </li>



                       ):(
                            <li key={key} data-key={item.key} className={"xg-cascader-menu-item xg-cascader-menu-item-expand"+(item.disabled?" xg-cascader-menu-item-disabled":"")} title={item.value} role="menuitem"  onClick={(e)=>{this.handleValueText(e)}}>
                                {item.value}
                                <span className="xg-cascader-menu-item-expand-icon">

                                </span>
                            </li>
                        )
                        )
                    })
                }
            </ul>
        )


        return add

    }
    childrenArr=(optionArr)=>{

        const addArr="";
        const index="1";
        if(optionArr[0] instanceof Array){
            const addArraa=[];
            for(var i=0;i<optionArr.length;i++){
               addArraa.push(this.childrenArrNode(optionArr[i]))
            }
            return addArraa
        }else{
           const dda= this.childrenArrNode(optionArr)
            return dda
        }


    }
    handleValueText=(e)=>{
        console.log()
        let text="";
        const textArr=this.state.cascaderText;

        text=textArr.join("/")
        const liText=e.currentTarget.innerText;
        text=text+"/"+liText
        console.log(text)
        this.setState({
            valueText:text,
            showBox:false
        })
        e.currentTarget.classList.add("xg-cascader-menu-item-active");
       if( e.currentTarget.closest("span")){
           e.currentTarget.closest("span").blur();
       }else if(e.currentTarget.closest("a")){
           e.currentTarget.closest("a").blur();
       }
        if(this.props.onChange){
            this.props.onChange(text)
        }
    }
    handleValueTextShow=(cascaderText)=>{

        let text="";
        const textArr=cascaderText;

        text=textArr.join("/")
        this.setState({
            valueText:text,

        })
    }
    handleClearValueText=(e)=>{
        console.log(e)
        // 阻止合成事件的冒泡
        e.stopPropagation();
        // 阻止与原生事件的冒泡
        e.nativeEvent.stopImmediatePropagation();
        e.currentTarget.closest(".xg-cascader-picker").blur()
        this.handleBlur()
        this.setState({
            valueText:"",
            showBox:false
        })

    }
    handleClick=()=>{
        this.setState({
            showBox:!this.state.showBox,
        })
    }
    render() {

        const {optionArr,newArr,showBox,cascaderText,valueText}=this.state;
        const {size}=this.props;
        let sizeClass="";
        let inputSizeClass="";
        if(size==="large"){
             sizeClass=" xg-cascader-picker-large";
             inputSizeClass=" xg-input-lg";
        }else if(size==="sm"){
             sizeClass=" xg-cascader-picker-small";
            inputSizeClass=" xg-input-sm"
        }
        console.log(cascaderText)
        const cssFade=(
            <div style={{position: "absolute", width: "100%",height:"100%"}}>
                <CssFade in={this.state.showBox}>
                    <div>
                        <div className="xg-cascader-menus xg-cascader-menus-placement-bottomLeft" style={{left: "0", top: "0"}}>
                            <div>

                                {
                                    this.childrenArr(optionArr)
                                }
                            </div>
                        </div>
                    </div>
                </CssFade>
            </div>
        )
       // console.log(optionArr instanceof Array)
        if(this.props.children){
            const {children}=this.props
            console.log(children)
            return (
                <Fragment>
                    <span style={{position:"relative"}}  onFocus={this.handleFocus}
                           onBlur={this.handleBlur}
                         >
                        {
                            children.type === "a"?( <a className="xg-cascader-menu-item-a" href={children.props.href}>{children.props.children} {cssFade}</a>):( <children.type>{children.props.children}{cssFade}</children.type>)
                        }

                    </span>
                </Fragment>
            )
        }else{
            return (
                <Fragment>
                <span className={"xg-cascader-picker"+(showBox?" xg-cascader-picker-focused":"")+(size?(sizeClass):"")} tabIndex="0"
                      onFocus={this.handleFocus}
                      onBlur={this.handleBlur}
                >
                    <span className="xg-cascader-picker-label">{valueText}</span>
                    <input tabIndex="-1" className={"xg-input xg-cascader-input "+(size?(inputSizeClass):"")} readOnly="" autoComplete="off" type="text"  placeholder={valueText?"":"Please select"}/>
                    {
                        valueText?<Icon title="icon-solid-close-circle xg-cascader-picker-clear" onChange={this.handleClearValueText}/>:null
                    }

                    <Icon title={"icon-down xg-cascader-picker-arrow"+(showBox?" xg-cascader-picker-arrow-expand":"")}/>
                    {
                        cssFade
                    }
                </span>
                </Fragment>
            );
        }

    }
}

export default Cascader;