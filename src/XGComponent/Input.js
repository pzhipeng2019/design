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
        const {style}=this.state;
        const {placeholder,size,addonBefore,addonAfter,defaultValue}=this.props;
        let sizeClass="";
        if(size==="large"){
            sizeClass=" xg-input-lg"
        }else if(size==="small"){
            sizeClass=" xg-input-sm"
        }

        return (
            <Fragment>{
                addonBefore||addonAfter?( <span className="xg-input-group-wrapper">
                    <span className="xg-input-wrapper xg-input-group">
                        {
                            addonBefore?(<span className="xg-input-group-addon">{addonBefore}</span>):null
                        }

                        <input type="text" defaultValue={defaultValue} placeholder={placeholder} className={"xg-input"+(size?sizeClass:"")} style={style} />
                        {addonAfter?(<span className="xg-input-group-addon">{addonAfter}</span>):null}

                    </span>
                </span>):(<input type="text" defaultValue={defaultValue} placeholder={placeholder} className={"xg-input"+(size?sizeClass:"")} style={style} />)
            }
            </Fragment>
        );
    }
}

export default Input;