import React, {Component} from 'react';
import Checkbox from "./Checkbox";
import Td from "./Td";

class Tbody extends Component {
    constructor(props) {
        super(props);
        this.state={
            dataSource:"",
            defaultValue:"",
            allValue:"",
            indeterminate:"",
            rowSelection:false,
            tdElement:''
        }
    }
    componentWillMount() {
        if(this.props.dataSource){
            this.setState({
                dataSource:this.props.dataSource,
            })
        }
        // 是否有复选框框
        if(this.props.rowSelection){
            this.setState({
                rowSelection:this.props.rowSelection,
            })
        }
    }

    onChange=(e)=>{
        let newDataSource=[];

        console.log(e.currentTarget.checked);
        let key=e.currentTarget.getAttribute("data-row-key")
        let dataSource=this.state.dataSource;
        for(var i=0;i<dataSource.length;i++) {
            if (dataSource[i].key === key) {
                newDataSource.push(dataSource[i]);
            }
        }

        this.props.onRow(newDataSource[0])
        if(e.currentTarget.checked){
           //
        }

    }
    delete=()=>{
        console.log("delete")
    }


    render() {
        const {dataSource,defaultValue,allValue,indeterminate}=this.props;
        const {rowSelection}=this.state;




        return (
            <tbody className="xg-table-tbody">
            {
                dataSource.map((v,k)=>{
                    return(
                        <tr key={k} className="xg-table-row xg-table-row-level-0" data-row-key={v.key}>
                            {
                               rowSelection?(
                                    <td className="xg-table-selection-column">
                                        <span>
                                            <Checkbox
                                                onChange={this.onChange}
                                                name={v.name}
                                                rowkey={v.key}
                                                value={v.key}
                                                key={k}
                                                defaultValue={defaultValue}
                                                allValue={allValue}
                                                disabled={this.props.disabled}
                                                indeterminate={indeterminate}
                                            ></Checkbox>
                                        </span>
                                    </td>):null
                            }
                           {/* <Td children={v}></Td>*/}
                            <td>{ typeof this.props.columns[0].render === "function" || this.props.columns[0].render != undefined?this.props.columns[0].render(v.name):v.name}</td>
                            <td>{v.age}</td>
                            <td>{v.address}</td>
                            {
                                this.props.columns[3]?(<td className="">
                                    {typeof this.props.columns[3].render === "function" || this.props.columns[3].render != undefined?this.props.columns[3].render(v.tags):v.tags}

                                </td>):null
                            }
                            {
                                this.props.columns[4]?( <td className="">
                                    {typeof this.props.columns[4].render === "function" || this.props.columns[4].render != undefined?this.props.columns[4].render("",v,this.delete):""}

                                </td>):null
                            }


                        </tr>
                        )

                })
            }

            </tbody>

        );
    }
}

export default Tbody;