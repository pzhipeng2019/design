import React, {Component} from 'react';

class Col extends Component {
    constructor(props) {
        super(props);
        this.state={
            spanCol:"",
            marginNum:0
        }
    }
    componentWillMount() {
        if(this.props.span){
            this.setState({
                spanCol:" xg-col-"+this.props.span
            })
        }
        if(this.props.marginNum>0 || this.props.marginNum){
            this.setState({
                marginNum:this.props.marginNum
            })
        }
    }

    render() {
        console.log(this.props)
        const {spanCol,marginNum}=this.state
        const styleCss={
            paddingLeft:marginNum,
            paddingRight:marginNum
        }
        return (
            <div className={"xg-col"+spanCol+(this.props.className? this.props.className:"")} style={styleCss}>
                {this.props.children}
            </div>
        );
    }
}

export default Col;