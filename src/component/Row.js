import React, {Component} from 'react';

class Row extends Component {
    constructor(props) {
        super(props);
        this.state={
            paddingNum:0
        }
    }
    componentWillMount() {
        if(this.props.gutter){
            this.setState({
                paddingNum:this.props.gutter/2
            })
        }
    }


    render() {
        const {paddingNum}=this.state;
        var myStyle = {
            marginLeft: -paddingNum+"px",
            marginRight: -paddingNum+"px"
        }
        console.log(this.props)

        return (

            <div className="xg-row" style={myStyle}>
                {
                    this.props.children && this.props.children.length>0?(
                        this.props.children.map((v,k)=>{
                            return(
                                <v.type key={k} className={v.props.className} span={v.props.span} marginNum={paddingNum>0?paddingNum:''}>{v.props.children}</v.type>
                            )
                        })
                    ):(this.props.children.type.name != "Col"?
                        (<this.props.children.type className={this.props.children.props.className}>{this.props.children.props.children}</this.props.children.type>):
                        (<this.props.children.type className={this.props.children.props.className} span={this.props.children.props.span} >{this.props.children.props.children}</this.props.children.type>))

                }
            </div>
        );
    }
}

export default Row;