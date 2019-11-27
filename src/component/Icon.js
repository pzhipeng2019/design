import React, {Component} from 'react';

class Icon extends Component {
    constructor(props) {
        super(props);
    }
    handleIcon=(e)=>{
        e.stopPropagation()

        if(this.props.onChange){
            this.props.onChange(e)
        }
    }

    render() {
        const {title}=this.props
        return (
            <i aria-label={title} className={"iconfont "+title} onClick={this.handleIcon}></i>
        );
    }
}

export default Icon;