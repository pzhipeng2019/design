import React, {Component} from 'react';

class Switch extends Component {
    constructor(props){
        super(props);
        this.state={
            defaultChecked:this.props.defaultChecked,
            text:''
        }
    }
    handleOnchange=(event)=>{
       console.log(event.currentTarget.value)

        if(this.state.defaultChecked){
            this.setState({
                defaultChecked:!this.state.defaultChecked,
                text:this.props.unCheckedChildren
            })

        }else{
            this.setState({
                defaultChecked:!this.state.defaultChecked,
                text:this.props.checkedChildren
            })
        }
    }
    componentWillMount() {
        if(this.props.defaultChecked){
            this.setState({
                text:this.props.checkedChildren
            })
        }else{
            this.setState({
                text:this.props.unCheckedChildren
            })
        }
    }
    componentWillUpdate(nextProps, nextState) {
       /* console.log(nextState.defaultChecked);
        if(nextState.defaultChecked){
            this.setState({
                text:this.props.checkedChildren
            })
        }else{
            this.setState({
                text:this.props.unCheckedChildren
            })
        }*/
    }

    render() {
        console.log(this)
        const {text}=this.state;
        return (
            <button type="button" role="switch"
                    disabled={this.props.disabled}
                    aria-checked={this.state.defaultChecked}
                    className={"xg-switch "+(this.state.defaultChecked?("xg-switch-checked"):"")+(this.props.size?" xg-switch-small":"")+(this.props.disabled?" xg-switch-disabled":"")} 
                    xg-click-animating="true"
                    onClick={this.handleOnchange} value={this.state.defaultChecked?1:0}>
                <span className="xg-switch-inner">{text}</span>
                <div className="xg-click-animating-node"></div>
            </button>
        );
    }
}

export default Switch;