import React, {Component,Fragment} from 'react';

class Td extends Component {
    constructor(props) {
        super(props);
        this.state={
            TdArr:""
        }
    }
componentWillMount() {
    const TdArr=[];
    for(var item in this.props.children){
        if(item !="key" ){
            TdArr.push(this.props.children[item]);
        }

    }
    this.setState({
        TdArr,
    })
}

    render() {


        const {TdArr}=this.state;
        console.log(TdArr)
const td=React.createElement("td",{id:"recipe","data-type":"title"},"BBB")
        return (
            <Fragment>
                {td}
            </Fragment>
        );
    }
}

export default Td;