import React, {Component} from 'react';

class Radio extends Component {
    constructor(props) {
        super(props);
        this.state={
            checked:false,
            disabled:false,
            value:"radio",
        }
    }
    onChange=(e)=>{
        console.log(e.currentTarget.checked)
        if(e.currentTarget.checked){
            this.setState({
                checked:true,
            })
        }else{
            this.setState({
                checked:false
            })
        }

        if(this.props.onChange){
            this.props.onChange(e)
        }


    }
    componentWillMount() {
        this.setState({
            checked:this.props.defaultChecked
        })
        this.setState({
            disabled:this.props.disabled
        })
        if(this.props.checked){
            this.setState({
                checked:this.props.checked
            })
        }
        this.setState({
            value:this.props.value
        })
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
        if(nextProps.disabled != this.props.disabled){
            this.setState({
            disabled:nextProps.disabled
            })
        }
        if(nextProps.checked != this.props.checked){
            this.setState({
                checked:nextProps.checked
            })
        }
        if(nextProps.checkbox != this.props.checkbox){
            this.setState({
                checked:nextProps.checkbox
            })
        }
    }

    render() {
        console.log(this.props)
        const {disabled,value,checked}=this.state;

        return (
            <label className={"xg-radio-wrapper"+(disabled?" xg-radio-wrapper-disabled":"")} style={this.props.style}>
                <span className={"xg-radio"+(checked?" xg-radio-checked":"")+(disabled?" xg-radio-disabled":"")}>
                    <input type="radio" className="xg-radio-input" disabled={disabled||""} checked={checked||""} value={this.props.value||""} onChange={this.onChange} name={this.props.name ||""}/>
                    <span className="xg-radio-inner"></span>
                </span>
                <span>{this.props.children}</span>
            </label>
        );
    }
}

export default Radio;