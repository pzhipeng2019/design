import React, {Component} from 'react';
import Radio from "./Radio";

class RadioGroup extends Component {
    constructor(props) {
        super(props);
        this.state={
            value:"",
        }
    }
    componentWillMount() {
        this.setState({
            value:this.props.defaultValue || this.props.value
        })
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
        if(nextProps.defaultValue != this.props.defaultValue){
            this.setState({
                value:nextProps.defaultValue
            })
        }
        if(nextProps.value != this.props.value){
            this.setState({
                value:nextProps.value
            })
        }
    }

    onChange=(e)=>{
       // console.log(e)
        /*if(this.props.onChange){
            this.props.onChange(e)
        }*/
        this.setState({
            value:e.currentTarget.value
        })

    }
    render() {
        const {children,onChange,name}=this.props;
        const {value}=this.state;
        console.log(this.props)

        if(children){
            return (
                <div className={"xg-radio-group xg-radio-group-outline"+(this.props.buttonStyle?" xg-radio-group-solid":"")+(this.props.size?" xg-radio-group-"+this.props.size:"")}>
                    {children.map((v,k)=>{
                        return(
                            <v.type key={k} value={v.props.value} disabled={v.props.disabled} name={name} checked={value.toString()===v.props.value.toString()?true:false} onChange={this.onChange} style={v.props.style}>{v.props.children}</v.type>
                        )

                    })}
                </div>
            );
        }else{
            return (
                <div className="xg-radio-group xg-radio-group-outline">
                    {
                        this.props.options.map((v,k)=>{

                            if (typeof v === "object"){
                                return (<Radio key={k} value={v.value} checked={value===v.value?true:false} onChange={this.onChange}>{v.label}</Radio>)
                            }else{
                                return (<Radio key={k} value={v} checked={value===v?true:false} onChange={this.onChange}>{v}</Radio>)
                            }
                        })
                    }

                </div>
            )
        }

    }
}

export default RadioGroup;