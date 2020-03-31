import React, {Component} from 'react';
import ReactDOM from "react-dom";
class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state={
            checkbox:"",
            disabled:"",
            value:"",
            allValue:"",
            checked:"",
            defaultChecked:"",
            indeterminate:"",
            name:"",
            rowkey:""
        }
    }
    /*在渲染前调用*/
    componentWillMount() {
      //  console.log(this.props)
        if(this.props.name){
            this.setState({
                name:this.props.name
            })
        }
        if(this.props.rowkey){
            this.setState({
                rowkey:this.props.rowkey
            })
        }
        /*是否已选择*/
        if(this.props.defaultChecked || this.props.checked){
            this.setState({
                checkbox:this.props.defaultChecked || this.props.checked,
            })
        }
        /*是否禁用*/
        if(this.props.disabled){
            this.setState({
                disabled:this.props.disabled,
            })
        }
        /*是否value*/
        if(this.props.value){
            this.setState({
                value:this.props.value
            })
        }
        /*是否默认选中*/
        if(this.props.defaultValue){
            this.handleDefaultValue()
        }
        /*是否全选*/
        if(this.props.allValue){
            this.setState({
                allValue:this.props.allValue
            })
        }
        if(this.props.checked){
            this.setState({
                checkbox:this.props.checked
            })
        }
        if(this.props.indeterminate){
            this.setState({
                indeterminate:this.props.indeterminate,
            })
        }
    }
    /*在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用*/
    componentWillReceiveProps(newProps) {
       // console.log(this.props.allValue)
       // console.log('Component WILL RECEIVE PROPS!')
    }
    /*返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。 */
    /*可以在你确认不需要更新组件时使用。*/
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    /*在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用*/
    componentWillUpdate(nextProps, nextState) {
        console.log(nextProps)
        console.log(this.props)
        if(nextProps.allValue != this.props.allValue){
            if(nextProps.allValue && nextProps.allValue.length>0){
                for(var i=0;i<nextProps.allValue.length;i++){
                    if(nextProps.allValue[i]===nextProps.value){
                        this.setState({
                            checkbox:true
                        })

                    }
                }
            }else{
                this.setState({
                    checkbox:false
                })
            }
        }
        if(nextProps.checked !=this.props.checked){
            this.setState({
                checkbox:nextProps.checked
            })
        }
        if(this.props.checkbox !=undefined){
            if(nextProps.checkbox !=this.state.checkbox){
                this.setState({
                    checkbox:nextProps.checkbox
                })
            }
        }

        if(nextProps.indeterminate !=this.props.indeterminate){
            this.setState({
                indeterminate:nextProps.indeterminate
            })
        }else{
            return false
        }


        //console.log(nextState)
       // console.log('Component WILL UPDATE!');
    }
    /*在组件完成更新后立即调用。在初始化时不会被调用*/
    componentDidUpdate(prevProps, prevState) {
       // console.log('Component DID UPDATE!')
    }


    /*简单checkbox*/
    onChange=(e)=>{
      //  console.log(e.currentTarget.checked)
        if(e.currentTarget.checked){
            this.setState({
                checkbox:true,
            })
        }else{
            this.setState({
                checkbox:false
            })
        }

        /*联动 checkbox。*/
        if(this.props.onChange){
            this.props.onChange(e)
        }
        /*判断是不全选*/
        if(this.props.checked){

        }
    }

    /*是否选中*/
    handleDefaultValue=()=>{
        //console.log(this.props)
        var DefaultValueArr=this.props.defaultValue;
        for(var i=0;i<DefaultValueArr.length;i++){
            if(DefaultValueArr[i]===this.props.value){
                this.setState({
                    checkbox:true,
                })
            }
        }

    }
    render() {
      // console.log(this.props.allValue)

        const{checkbox,disabled,allValue,defaultChecked,indeterminate,name,rowkey}=this.state
        console.log(checkbox)
        console.log(this.props.checked)

        return (
            <label className={"xg-checkbox-wrapper"+(this.props.disabled?" xg-checkbox-wrapper-disabled":"")}>
                <span className={"xg-checkbox"+(checkbox?" xg-checkbox-checked":"")+(this.props.checked?" xg-checkbox-checked":"")+(this.props.disabled?" xg-checkbox-disabled":"")+(indeterminate?" xg-checkbox-indeterminate":"")}>
                  <input
                      type="checkbox"
                      className={"xg-checkbox-input"}
                      name={name}
                      data-row-key={rowkey}
                      checked={this.props.checked?this.props.checked:checkbox}
                      disabled={this.props.disabled}
                      value={this.state.value}
                      onChange={this.onChange}/>

                    <span className="xg-checkbox-inner"></span>
                </span>
                <span>{this.props.children}</span>
            </label>
        );
    }
}

export default Checkbox;