import React, {Component} from 'react';

class TextArea extends Component {
    constructor(props) {
        super(props);
        this.state={
            HeightValue:31,
            textareaValue:""
        }
    }
    handleValueChange = (e) => {
       console.log(e.currentTarget.scrollHeight)
        if(e.currentTarget.scrollHeight>31){
            this.setState({
                HeightValue:e.currentTarget.scrollHeight
            })
        }
        this.setState({
            textareaValue:e.currentTarget.value
        })
    };
    render() {
        const {HeightValue,textareaValue}=this.state;
        return (

            <textarea className="xg-input" style={{height: HeightValue}} value={textareaValue} onChange={this.handleValueChange} placeholder={this.props.placeholder}/>
        );
    }
}

export default TextArea;