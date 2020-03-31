import React, {Component} from 'react';
import Icon from "./Icon";
import store from "./store"
import CssFade from "./CssFade";
import Option from "./Option";

class Select extends Component {
    constructor(props) {
        super(props);
        this.state={
            text:"",
            valueText:"",
            showBox:false,
            BoxH:0,
            searchValue:"",//搜索框 value 值
            placeholder:"",//搜索框 placeholder 值
            textShow:true,//text 是否显示
            handleBlurFla:true,// onBlur是否可执行
            childrenArr:[],
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
        this.setState({
            childrenArr:this.props.children
        })
    }
    toggleBox=(e)=>{
        if(this.props.disabled){
            return;
        }

        console.log(document.body.offsetHeight)
        const targetTop=e.currentTarget.parentNode.offsetTop;
        const bodyH=document.body.offsetHeight;
        console.log(e.currentTarget.nextSibling.firstChild.childNodes[0].offsetHeight)
        if(targetTop>bodyH){
            console.log(e.currentTarget.nextSibling.firstChild.childNodes[0].offsetHeight)
            const tH=e.currentTarget.nextSibling.firstChild.childNodes[0].offsetHeight
            e.currentTarget.nextSibling.style.top=(-tH)+"px";
        }


    }
    componentWillUpdate(nextProps, nextState, nextContext) {

        if(nextProps.defaultValue !=this.props.defaultValue){
            this.setState({
                text:nextProps.defaultValue
            })
        }
        if(nextProps.children !=this.props.children){
            this.setState({
                    childrenArr:nextProps.children
            }
            )
        }

    }
    componentWillUnmount() {    // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    }

    // 组件更新结束之后执行，在初始化render时不执行
    componentDidUpdate(){
        if(this.textInput){
            this.textInput.focus();
        }

    }

    handleSelect=(text,value)=>{

        let newText=this.state.text;
        if(typeof newText ==="object"){


            if(newText.indexOf(text)>-1){
                newText.splice(newText.indexOf(text),1)
            }else{
                newText.push(text)
            }
        }else{
            newText=text;
        }

        this.setState({
            text:newText,
            textShow:true,
            showBox:!this.state.showBox,
        })
        if(this.props.onChange){
            //console.log(value)
            this.props.onChange(value)
        }
    }
    /*input 获得焦点*/
    handleFocus=()=>{
      //  console.log("handleFocus")
        this.setState({
            searchValue:"",
            childrenArr:this.props.children
        })

    }
    /*监听 input value*/
    handleInputonChange=(e)=>{
       // console.log(e.currentTarget.value)
        const childrenProps=this.props.children;
        const inputValue=e.currentTarget.value;
        const newChidren=[]
        console.log(childrenProps)
        for(let item in childrenProps){

            if(childrenProps[item].props.children.indexOf(inputValue)>-1){
                //console.log(childrenProps[item])
                newChidren.push(childrenProps[item])
            }
        }

        this.setState({
            searchValue:e.currentTarget.value,
            valueText:inputValue,
            childrenArr:newChidren,
            textShow:false
        })
        if(this.props.mode){
            if(e.currentTarget.value.length>0){
                e.currentTarget.style.width=e.currentTarget.value.length*12+"px"
            }
        }

    }
    /*input 失去焦点*/
    handleBlur=(e)=>{
        let text=this.state.text;
        let childrenArr=this.props.children;
        let newchildrenArr=[];
        let textShow="";
        let inputValue=e.currentTarget.value;
        if(text){
            textShow=true
        }else{
            textShow=false
        }
       // console.log(childrenArr)

        if(this.props.mode==="tags"){
            console.log(inputValue)
            if(inputValue){
                if(text.indexOf(inputValue)<=-1){
                    text.push(inputValue);

                    childrenArr.push(<Option key={inputValue}>{inputValue}</Option>)
                }
            }
        }
       // console.log(newchildrenArr)
      //  console.log(childrenArr)
        this.setState({
            searchValue:"",
            textShow,
            text,
            childrenArr,
        })
        e.currentTarget.style="";
    }
    handleMouseLeave=()=>{
        this.setState({
            handleBlurFla:true,
        })
    }
    handleMoUSEnter=()=>{
        this.setState({
            handleBlurFla:false,
        })
    }
    /*select 获得焦点*/
    handleSelectFocus=(e)=>{
        this.setState({
             showBox:true,
        })


    }
    /*select 失去焦点*/
    handleSelectBlur=()=>{
        if(this.state.handleBlurFla){
            this.setState({
               showBox:false
            })
        }
    }
    textObj = (text) => {
        return (
            <ul>
                {
                    text.map((v, key) => {
                        return (
                            <li key={key} unselectable="on" className="xg-select-selection__choice" role="presentation" title="a10" style={{userSelect: "none"}}>
                                <div className="xg-select-selection__choice__content"> {v}</div>
                                <span className="xg-select-selection__choice__remove">
                                    <Icon title="icon-close" onChange={this.handleCloseSelect}/>
                                </span>
                            </li>)
                    })
                }

            </ul>
        )

    }
    handleCloseSelect=(e)=>{
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

        const closeText=e.currentTarget.parentNode.previousSibling.innerText;
        const text=this.state.text;
       if( text.indexOf(closeText)>-1){
           text.splice(text.indexOf(closeText),1)
       }
    /*   if(this.props.mode==="tags"){
           const oldChildrenArr=this.props.children;
           const childrenArr=this.state.childrenArr;
           console.log(oldChildrenArr,childrenArr)
           console.log(oldChildrenArr.indexOf(closeText))
           if(oldChildrenArr.indexOf(closeText)<=-1){
               childrenArr.splice(childrenArr.indexOf(closeText),1)
           }
           this.setState({
               childrenArr
           })
       }*/
       this.setState({
           text,
       })
    }
    render() {
        const {text,showBox,searchValue,placeholder,textShow,valueText,childrenArr}=this.state;
        const {mode,disabled,size}=this.props;
        /*console.log(this.props.onChange)*/
        let sizeClass="";
        if(size==="large"){
            sizeClass="xg-select-lg "
        }else if(size==="small"){
            sizeClass="xg-select-sm "
        }
        const CssFadeNode=( <div style={{position:"absolute",width:"100%",height:"100%"}}>
            <CssFade in={this.state.showBox}>
                <div className={"xg-select-dropdown xg-select-dropdown-placement-bottomLeft"+(mode?" xg-select-dropdown--multiple ":" xg-select-dropdown--single")} style={{width:this.props.style.width,left: "0", top: "0"}} onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMoUSEnter}>
                    <div style={{overflow: "auto", transform: "translateZ(0px)"}}>
                        <ul role="listbox" className="xg-select-dropdown-menu  xg-select-dropdown-menu-root xg-select-dropdown-menu-vertical" tabIndex="0" >

                            {
                                typeof childrenArr ==="object" && childrenArr.length>0?(


                                        childrenArr.map((v,k)=>{

                                            return(

                                                <v.type key={k} className={text.indexOf(v.props.children)!=-1?" xg-select-dropdown-menu-item-selected":""} Icon={typeof text==="object"?"icon-check xg-select-selected-icon":""} onChange={this.handleSelect} disabled={v.props.disabled?"true":"false"} value={v.props.value} lable={v.props.lable}>{v.props.children}</v.type>
                                            )
                                        })

                                    ):
                                    (
                                        Object.keys(childrenArr).length !== 0?(<childrenArr.type onChange={this.handleSelect} disabled={childrenArr.props.disabled?"true":"false"} value={childrenArr.props.value} lable={childrenArr.props.lable}>{childrenArr.props.children}</childrenArr.type>)
                                    :(
                                    <li role="option" unselectable="on" className="xg-select-dropdown-menu-item xg-select-dropdown-menu-item-disabled" aria-disabled="true" aria-selected="false" style={{userSelect: "none"}}>
                                        <div className="xg-empty xg-empty-normal xg-empty-small">
                                            <div className="xg-empty-image">
                                                <svg width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
                                                    <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
                                                        <ellipse fill="#F5F5F5" cx="32" cy="33" rx="32"
                                                                 ry="7"></ellipse>
                                                        <g fill-rule="nonzero" stroke="#D9D9D9">
                                                            <path
                                                                d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
                                                            <path
                                                                d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
                                                                fill="#FAFAFA"></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <p className="xg-empty-description">No Data</p></div>
                                    </li>
                                )
                                    )
                            }

                        </ul>
                    </div>
                </div>
            </CssFade>
        </div>)



        return (
            <div className={(size?sizeClass:"")+"xg-select"+(disabled?" xg-select-disabled":" xg-select-enabled")+(this.state.showBox?" xg-select-open":"")} style={this.props.style}>
                <div className={"xg-select-selection "+(mode?" xg-select-selection--multiple":" xg-select-selection--single")}
                     role="combobox"
                     aria-autocomplete="list"
                     aria-haspopup="true"
                     aria-controls="a2b55a97-c258-4729-e59f-e82e4be99d22"
                     aria-expanded={this.state.showBox}
                     tabIndex="0"
                     onClick={this.toggleBox}
                     onFocus={this.handleSelectFocus}
                     onBlur={this.handleSelectBlur}
                >
                    <div className="xg-select-selection__rendered">
                        {
                            this.props.placeholder?(<div unselectable="on" className="xg-select-selection__placeholder" style={{display: (text !="" || searchValue !=""  ?"none":"block"), userSelect: "none"}}>
                                {placeholder}
                            </div>):null
                        }
                            {
                                typeof text==="object"?(this.textObj(text)):( <div className="xg-select-selection-selected-value" title={text} style={{display: (textShow?"block":"none"), opacity: "1"}}>{text}</div>)
                            }


                        {
                            this.props.showSearch?(<div className="xg-select-search xg-select-search--inline" style={{display: (showBox?"block":"none")}}>
                                <div className="xg-select-search__field__wrap">
                                    <input autoComplete="off" className="xg-select-search__field"  value={searchValue} onChange={this.handleInputonChange} ref={(input) => { this.textInput = input; }} onFocus={this.handleFocus} onBlur={this.handleBlur} />
                                    <span className="xg-select-search__field__mirror">&nbsp;</span>
                                </div>
                            </div>):null
                        }

                    </div>
                    <span className="xg-select-arrow" unselectable="on" style={{userSelect: "none"}}>
                        <Icon title="icon-down xg-select-arrow-icon"/>
                    </span>
                </div>

                    {
                        CssFadeNode
                    }

            </div>
        );



    }
}

export default Select;