import React, {Component} from 'react';

class Step extends Component {
    constructor(props){
        super(props);
    }
    handleCurrent(cindex){

        console.log(cindex);
        if(this.props.deleteFunc){
            this.props.deleteFunc(cindex);
        }


    }
    render() {
console.log(this)
        const {title,description,subTitle,className,index}=this.props;
        return (
            <div className={"xg-steps-item "+className} onClick={this.handleCurrent.bind(this,this.props.index)}>
                <div className="xg-steps-item-container">
                    <div className="xg-steps-item-tail"></div>
                    <div className="xg-steps-item-icon"><span className="xg-steps-icon">{this.props.children}</span></div>
                    <div className="xg-steps-item-content">
                        <div className="xg-steps-item-title">{title}
                            <div title={subTitle} className="xg-steps-item-subtitle">{subTitle}</div>
                        </div>
                        <div className="xg-steps-item-description">{description}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Step;