import React, {Component} from 'react';
import Checkbox from "./Checkbox";
import Icon from "./Icon";
import Tbody from "./Tbody";
import FiltersMsg from "./FiltersMsg";
import Dropdown from "./Dropdown";
const Filters=( <div className="dropdownGroup">
    <Dropdown ButtonData={{size:"",title:"菜单按钮",type:"xg-btn-primary"}} Icon={"icon-down"} trigger={"click"} >
        <div className="xg-dropdown xg-dropdown-placement-bottomLeft ">
            <ul className="xg-dropdown-menu xg-dropdown-menu-light xg-dropdown-menu-root " role="menu" tabIndex="0" >
                <li className="xg-dropdown-menu-item" role="menuitem" key={1}>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                        1st menu item
                    </a>
                </li>
                <li className="xg-dropdown-menu-item" role="menuitem"key={2}>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                        2nd menu item
                    </a>
                </li>
                <li className="xg-dropdown-menu-item" role="menuitem" key={3}>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                        3rd menu item
                    </a>
                </li>
            </ul>
        </div>
    </Dropdown>

</div>)
let recordArr=[];
class Thead extends Component {
    constructor(props){
        super(props);
        this.state={
            /*全选*/
            checkedList: "",
            indeterminate: false,
            checkAll: false,
            rowSelection:false,
            selectedRowKeys: [],
        }
    }
    componentWillMount() {
        // this.props.onRow
        if(this.props.checkAll){
            this.setState({
                checkAll:this.props.checkAll,
            })
        }
        // 是否有复选框框
        if(this.props.rowSelection){
            this.setState({
                rowSelection:true,
            })
        }
    }

    /*在组件接收到一个新的 prop (更新后)时被调用*/
    componentWillUpdate(nextProps){

       // console.log(nextProps)
       // console.log(this.props)
        if(nextProps.checkAll !=this.props.checkAll){
            this.setState({
                checkAll:nextProps.checkAll,
            })
        }

    }

    onChange=(e)=>{
        console.log(e)
    }
    /*排序*/
    handleSorters=(e,fn)=>{
        const dataSource=this.props.dataSource;
        dataSource.sort(fn);//排序
        console.log(dataSource)
        //
        console.log( dataSource.reverse())

        var IconParent=e.currentTarget.getElementsByClassName("xg-table-column-sorter-inner")[0];
       var dataSorter= IconParent.getAttribute("data-sorter")
        if(dataSorter==="ascend"){
            IconParent.firstChild.classList.remove("off");
            IconParent.firstChild.classList.add("on");
            IconParent.lastChild.classList.remove("on");
            IconParent.lastChild.classList.add("off");
            IconParent.setAttribute("data-sorter","descend")
        }else if(dataSorter==="descend"){
            IconParent.firstChild.classList.remove("on");
            IconParent.firstChild.classList.add("off");
            IconParent.lastChild.classList.remove("off");
            IconParent.lastChild.classList.add("on");
            IconParent.setAttribute("data-sorter","ascend")
            dataSource.reverse();//反转排序
        }else{
            IconParent.firstChild.classList.remove("off");
            IconParent.firstChild.classList.add("on");
            IconParent.lastChild.classList.remove("on");
            IconParent.lastChild.classList.add("off");
            IconParent.setAttribute("data-sorter","descend")
        }
        console.log(dataSorter)
        this.props.handlesort(dataSource)

    }
    /*筛选数据*/
    /*确定提交数据*/
    handelfiltersdata=(checkedArr)=>{
        this.props.handelfiltersdata(recordArr);
        recordArr=[];
    }
    /*重置数据  恢复初始数据*/
    handlefiltersClearData=()=>{
        this.props.handlefiltersClearData();
        recordArr=[];
    }
    /*复选*/
    selectedRowKeys=(record)=>{

        if(record instanceof Array){
            recordArr=[];
            recordArr.push(record);
            recordArr=recordArr[0]
        }else{
            if(recordArr.some(item=>item.key === record.key)){
                recordArr.splice(recordArr.findIndex(item=>item.key === record.key), 1)
            }else{
                recordArr.push(record);
            }
        }


    }
    /*单选*/
    render() {
        console.log(recordArr)
        console.log(this.state.selectedRowKeys)
        const {columns,indeterminate,onChange}=this.props;
      let {rowSelection}= this.state;
        return (
            <thead className="xg-table-thead">
            <tr>
                {rowSelection ?(
                        <th className="xg-table-selection-column">
                            <span className="xg-table-header-column">
                                <div>
                                    <span className="xg-table-column-title">
                                        <div className="xg-table-selection">
                                            <Checkbox onChange={this.onChange} indeterminate={indeterminate}  onChange={onChange} checked={this.state.checkAll}></Checkbox>
                                        </div>
                                    </span>
                                    <span className="xg-table-column-sorter"></span>
                                </div>
                            </span>
                    </th>):null
                }
                {
                    columns.map((v,k)=>{

                        return(
                            <th className={(v.filters?" xg-table-column-has-filters":"")+(v.sorter?" xg-table-column-has-actions xg-table-column-has-sorters":"") } key={k} >
                                <span className="xg-table-header-column" onClick={v.sorter?(e)=>{this.handleSorters(e,v.sorter)}:null}>
                                    <div className={v.sorter?"xg-table-column-sorters":""}>
                                        <span className="xg-table-column-title">{v.title}</span>
                                        <span className="xg-table-column-sorter">
                                            {
                                                v.sorter?(
                                                    <div title="排序" className="xg-table-column-sorter-inner xg-table-column-sorter-inner-full" data-sorter={v.defaultSortOrder?v.defaultSortOrder:""}>
                                                       <Icon title="icon-caret-up xg-table-column-sorter-up"/>
                                                       <Icon title="icon-caret-down xg-table-column-sorter-down"/>
                                                    </div>
                                        ):null
                                            }
                                        </span>
                                    </div>
                                </span>
                                {
                                    v.filters?(
                                        <FiltersMsg
                                            dataIndex={v.dataIndex}
                                            icon={"icon-filter"}
                                            filters={v.filters}
                                            handelfiltersdata={this.handelfiltersdata}
                                            handlefiltersClearData={this.handlefiltersClearData}
                                            onFilter={v.onFilter}
                                            filterMultiple={v.filterMultiple}
                                            record={this.props.dataSource}
                                            selectedRowKeys={this.selectedRowKeys}
                                        />):null
                                }
                            </th>
                        )
                    })
                }


                {/*<th className=""><span className="xg-table-header-column"><div><span
                    className="xg-table-column-title">Tags</span><span
                    className="xg-table-column-sorter"></span></div></span>
                </th>
                <th className=""><span className="xg-table-header-column"><div><span
                    className="xg-table-column-title">Action</span><span
                    className="xg-table-column-sorter"></span></div></span>
                </th>*/}
            </tr>

            </thead>
        );
    }
}

export default Thead;