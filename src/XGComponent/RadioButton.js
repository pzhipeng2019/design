import React, {Component,Fragment} from 'react';

class RadioButton extends Component {
    constructor(props) {
        super(props);
        this.state={
            checked:false,
            disabled:false,
            value:"radio",
        }
    }
    componentWillMount() {
        this.setState({
            checked:this.props.checked,
        })
        this.setState({
            disabled:this.props.disabled
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
    render() {
        console.log(this.props)
        const {checked,disabled}=this.state;
        return (
            <Fragment>
                <label className={"xg-radio-button-wrapper"+(checked?" xg-radio-button-wrapper-checked":"")+(disabled?" xg-radio-button-wrapper-disabled":"")}>
                    <span className={"xg-radio-button"+(checked?" xg-radio-button-wrapper-checked":"")+(disabled?" xg-radio-button-disabled":"")}>
                        <input type="radio" value={this.props.value||""} className={"xg-radio-button-input" +(checked?" xg-radio-button-checked":"")} onChange={this.onChange} disabled={disabled||""}/>
                            <span className="xg-radio-button-inner"></span>
                        </span>
                    <span>{this.props.children}</span>
                </label>
            </Fragment>
        );
    }
}

export default RadioButton;