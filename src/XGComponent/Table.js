import React, {Component} from 'react';
import Thead from "./Thead";
import Tbody from "./Tbody"
import CheckboxGroup from "./CheckboxGroup";


class Table extends Component {
    constructor(props) {
        super(props);
        this.state={
            plainOptions:"",
            checkedList:"",
            checkAll:false,//全选框状态
            indeterminate:"",
            selectedRowKeys: [],
            rowSelection:false,
            dataSource:"",//原数据
        }

    }
    componentWillMount() {
        // 是否有复选框框
        if(this.props.rowSelection){
            this.setState({
                rowSelection:this.props.rowSelection,
            })
        }
        //拥有那些数据，或者数据
        if(this.props.dataSource){
            this.setState({
                plainOptions:this.props.dataSource,
                dataSource:this.props.dataSource,
            })
        }
        //拥有那些数据，或者数据
        if(this.props.indeterminate){
            this.setState({
                indeterminate:this.props.indeterminate,
            })
        }


    }

    /*在组件接收到一个新的 prop (更新后)时被调用*/
    componentWillUpdate(nextState,nextProps){

          console.log(nextState)
         console.log(this.state)
        /*if(nextProps.rowSelection !=this.props.rowSelection){
            this.setState({
                checkedList:nextProps.rowSelection.selectedRowKeys,
            })
            this.onChangeAll(nextProps.rowSelection.selectedRowKeys);
        }*/
        if(nextProps.dataSource !=this.props.dataSource){
/*
            this.setState({})
*/
        }

    }

    /*全选*/
    /*表格列表选择*/
    onChangeAll = checkedList => {
        const {plainOptions}=this.state;
        console.log(checkedList)
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
            checkAll: checkedList.length === plainOptions.length,
        });
    };
    /*全选框*/
    onCheckAllChange = e => {
        console.log(e.currentTarget.checked)
        const {plainOptions}=this.state;
        const onCheckAllChangePlainOption=[];
        for(var i=0;i<plainOptions.length;i++){
            onCheckAllChangePlainOption.push(plainOptions[i].key)
        }
        console.log(onCheckAllChangePlainOption)
        this.setState({
            checkedList: e.currentTarget.checked ? onCheckAllChangePlainOption : [],
            indeterminate: false,
            checkAll: e.currentTarget.checked,
        });
        if(e.currentTarget.checked){
            this.onSelectedRowKeysChange( onCheckAllChangePlainOption)
        }else{
            this.onSelectedRowKeysChange( "")
        }

    };

    selectRow = (record) => {
        console.log(record)
        const selectedRowKeys = [...this.state.selectedRowKeys];

        if (selectedRowKeys.indexOf(record.key) >= 0) {
            selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
        } else {
            selectedRowKeys.push(record.key);
        }
        this.setState({ selectedRowKeys });
        this.onChangeAll(selectedRowKeys);
    }
    onSelectedRowKeysChange = (selectedRowKeys) => {
        this.setState({ selectedRowKeys });
    }

    handlesort=(dataSource)=>{
        this.setState({
            dataSource,
        })
    }
    /*筛选数据*/
    handelfiltersdata=(checkedArr)=>{
        console.log("筛选数据",checkedArr)
        this.setState({
            dataSource:checkedArr
        })

    }
    /*重置数据  恢复初始数据*/
    handlefiltersClearData=()=>{
        this.setState({
            dataSource:this.props.dataSource,
        })

    }
    render() {

console.log(this.props)
        const {columns,onRow,plainOptions}=this.props;
        const{checkAll,indeterminate,selectedRowKeys,rowSelection,dataSource}=this.state;


        return (
            <div className="xg-table-wrapper">
                <div className="xg-spin-nested-loading">
                    <div className="xg-spin-container">
                        <div className="xg-table xg-table-default xg-table-scroll-position-left">
                            <div className="xg-table-content">
                                <div className="xg-table-body">
                                    <table className="">

                                        <Thead
                                            columns={columns}
                                            dataSource={dataSource}
                                            rowSelection={rowSelection?rowSelection:""}
                                            onChange={this.onCheckAllChange}
                                            checkAll={checkAll}
                                            indeterminate={indeterminate}
                                            handlesort={this.handlesort}
                                            handelfiltersdata={this.handelfiltersdata}
                                            handlefiltersClearData={this.handlefiltersClearData}
                                        >
                                        </Thead>
                                        <Tbody
                                            dataSource={dataSource}
                                            rowSelection={rowSelection?rowSelection:""}
                                            onRow={this.selectRow}
                                            options={plainOptions}
                                            allValue={this.state.checkedList}
                                            onChange={this.onChangeAll}
                                            columns={columns}
                                        ></Tbody>
                                    </table>
                                </div>
                                {
                                    dataSource.length>0?null:(
                                    <div className="xg-table-placeholder">
                                    <div className="xg-empty xg-empty-normal">
                                    <div className="xg-empty-image">

                                    </div>
                                    <p className="xg-empty-description">暂无数据</p></div>
                                    </div>
                                    )
                                }
                            </div>
                        </div>
                        <ul className="xg-pagination xg-table-pagination" unselectable="unselectable">
                            <li title="上一页" className="xg-pagination-disabled xg-pagination-prev"
                                aria-disabled="true"><a className="xg-pagination-item-link"><i
                                aria-label="图标: left" className="anticon anticon-left">
                                <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="left"
                                     width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
                                </svg>
                            </i></a></li>
                            <li title="1"
                                className="xg-pagination-item xg-pagination-item-1 xg-pagination-item-active"
                                tabIndex="0"><a>1</a></li>
                            <li title="下一页" className="xg-pagination-disabled xg-pagination-next"
                                aria-disabled="true"><a className="xg-pagination-item-link"><i
                                aria-label="图标: right" className="anticon anticon-right">
                                <svg viewBox="64 64 896 896" focusable="false" className=""
                                     data-icon="right" width="1em" height="1em" fill="currentColor"
                                     aria-hidden="true">
                                    <path
                                        d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
                                </svg>
                            </i></a></li>
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}

export default Table;