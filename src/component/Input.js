import React, {Component,Fragment} from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state={
            style:""
        }
    }
    componentWillMount() {
        this.setState({
            style:this.props.style
        })
    }

    render() {
        const {style}=this.state
        return (
            <Fragment>
                <input type="text" defaultValue="" className="xg-input" style={style} />
            </Fragment>
        );
    }
}

export default Input;