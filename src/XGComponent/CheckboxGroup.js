import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Checkbox from "./Checkbox";

class CheckboxGroup extends Component {
    constructor(props) {
        super(props);
        this.state={
            options:"",
            defaultValue:"",//默认选中数组
            onChange:"",
            allValue:"",//选中了多少个
            indeterminate:"",//没有全选，选中了一个以上
        }

    }
    /*在渲染前调用*/
    componentWillMount(){
        this.setState({
            options:this.props.options,
            defaultValue:this.props.defaultValue ||this.props.allValue,
            onChange:this.props.onChange,
            allValue:this.props.allValue,
            indeterminate:this.props.indeterminate,
        })
    }
    /*返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。 */
    /*可以在你确认不需要更新组件时使用。*/
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    /*在组件接收到一个新的 prop (更新后)时被调用*/
    componentWillUpdate(nextProps){
        //console.log("componentWillUpdate")
      //  console.log(nextProps)
       // console.log(this.props)
        if(nextProps.allValue !=this.props.allValue){
            this.setState({
                defaultValue:nextProps.allValue,
                allValue:nextProps.allValue,
                indeterminate:nextProps.indeterminate,
            })



        }else{
            return false
        }

        //console.log(this.props)
        // console.log(newProps)
    }
    onChangeAll=()=>{
        if(this.refs.allValue){
            const allValueArr=[];
            const allValue=this.refs.allValue.getElementsByTagName("input");
            const len=allValue.length
          //  console.log(len)
            for(var i=0;i<allValue.length;i++){
                if(allValue[i].checked===true){
                    allValueArr.push(allValue[i].value)
                 //   console.log(allValue[i].value)
                }

            }
            // console.log(allValueArr)
            this.props.onChange(allValueArr)
        }

    }
    render() {
      //  console.log(this.props.allValue)
        const {options,defaultValue,onChange,allValue,indeterminate}=this.state
        if(options){
            return (
                <div ref={allValue?"allValue":""}>
                    {
                        options.map((v,k)=>{
                            return(
                                <Checkbox
                                    key={k}
                                    defaultValue={defaultValue}
                                    allValue={allValue}
                                    onChange={this.onChangeAll}
                                    disabled={this.props.disabled}
                                    value={v.value?v.value:v}
                                    indeterminate={indeterminate}
                                >
                                    {v.label?v.label:v}
                                </Checkbox>

                            )
                        })
                    }
                </div>
            );
        }else{
            return <div>{this.props.children}</div>
        }

    }
}

export default CheckboxGroup;