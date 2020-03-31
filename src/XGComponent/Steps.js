import React, {Component} from 'react';
import ReactDOM from 'react-dom';
class Steps extends Component {
    constructor(props){
        super(props);
        this.state={
            current:this.props.current
        }
        this.handleParentCurrent=this.handleParentCurrent.bind(this)
    }
    /*在第一次渲染后调用，只在客户端。*/
    componentDidMount(){


    }
    handleParentCurrent=(currentIndex)=>{

        this.setState({
            current:currentIndex
        })
        if(this.props.onChange){
            this.props.onChange(currentIndex-1)
        }

    }
    render() {
        console.log(this.props)
        const {size,current,onChange,direction,icon}=this.props;
        return (
            <div className={"xg-steps"+(size?(" xg-steps-"+size):"")+(direction?(" xg-steps-"+direction):" xg-steps-horizontal xg-steps-label-horizontal")}>
                {
                    this.props.children.map((v,k)=>{
                        if(current>k){
                            return(
                                <v.type key={k} title={v.props.title} subTitle={v.props.subTitle} description={v.props.description} className={"xg-steps-item-finish"+(v.props.icon?" xg-steps-item-custom":"")} index={k+1} deleteFunc={onChange?(this.handleParentCurrent.bind(this)):""}>
                                    {v.props.icon?(v.props.icon):(<i className="iconfont icon-check"></i>)}
                                </v.type>
                            )
                        }else if(current<k){
                            return(
                                <v.type key={k} title={v.props.title} subTitle={v.props.subTitle} description={v.props.description} className={"xg-steps-item-wait"+(v.props.icon?" xg-steps-item-custom":"")} index={k+1} deleteFunc={onChange?(this.handleParentCurrent.bind(this)):""}>
                                    {v.props.icon?(v.props.icon):(k+1)}
                                </v.type>
                            )
                        }else{
                            return(
                                <v.type key={k} title={v.props.title} subTitle={v.props.subTitle} description={v.props.description} className={"xg-steps-item-process xg-steps-item-active"+(v.props.icon?" xg-steps-item-custom":"")} index={k+1} deleteFunc={onChange?(this.handleParentCurrent.bind(this)):""}>
                                    {v.props.icon?(v.props.icon):(k+1)}
                                </v.type>
                            )
                        }

                    })
                }
            </div>
        );
    }
}

export default Steps;