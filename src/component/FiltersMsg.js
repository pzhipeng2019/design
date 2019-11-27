import React, {Component,Fragment} from 'react';
import Icon from "./Icon";
import CssFade from "./CssFade";
import Checkbox from "./Checkbox";
import Radio from "./Radio";

function onChange(e) {
    // console.log(`checked = ${e.target.checked}`);
}
class FiltersMsg extends Component {
    constructor(props) {
        super(props);
        this.state={
            show:false,
            checked:"",
            checkedArr:[],
            selectedRowKeys:[],
            value:"",
        }

    }
    handleIcon=(e)=>{
        console.log(e.currentTarget);
        var dataFilters=e.currentTarget.parentNode.getAttribute("data-filters");
        console.log(dataFilters);

        this.setState({
            show:!this.state.show
        })
        if(dataFilters !="false"){
            e.currentTarget.parentNode.getElementsByClassName("xg-dropdown")[0].style="";
            e.currentTarget.parentNode.setAttribute("data-filters",false);
        }else{
            e.currentTarget.parentNode.getElementsByClassName("xg-dropdown")[0].style.right="0px";
            e.currentTarget.parentNode.getElementsByClassName("xg-dropdown")[0].style.left="0px";
            e.currentTarget.parentNode.getElementsByClassName("xg-dropdown")[0].style.top="0px";
            e.currentTarget.parentNode.getElementsByClassName("xg-dropdown")[0].style.marginTop=e.currentTarget.clientHeight+"px";
            e.currentTarget.parentNode.getElementsByClassName("xg-dropdown")[0].style.display="flex";
            e.currentTarget.parentNode.getElementsByClassName("xg-dropdown")[0].style.justifyContent="flex-end";
            e.currentTarget.parentNode.setAttribute("data-filters",true)
        }
        e.stopPropagation()
    }
    /*复选*/
    handleonChange=(e)=>{

        var value=e.currentTarget.value;
        var dataIndex=this.props.dataIndex;
        var record=this.props.record;
        var newRecourdArr=[];
        for(let item in record){
            if(this.props.onFilter(value,record[item])){
                //newRecourdArr.push(record[item])
                this.props.selectedRowKeys(record[item])
            }
        }

       // this.props.selectedRowKeys(newRecourdArr)
console.log(newRecourdArr)
    }
    /*单选*/
    handleRadioOnChange=(e)=>{
        var value=e.currentTarget.value;
        var dataIndex=this.props.dataIndex;
        var record=this.props.record;
        var newRecourdArr=[];
        this.setState({
            value
        })
        for(let item in record){
            if(this.props.onFilter(value,record[item])){
                newRecourdArr.push(record[item])
               // this.props.selectedRowKeys(record[item])
            }
        }

         this.props.selectedRowKeys(newRecourdArr)
        console.log(newRecourdArr)
    }
    /*重置*/
    handleClear=(e)=>{
        console.log("clear")
       this.setState({
           checked:false,
           value:"",
       })
        /*可优化代码*/
        console.log(e);
        var dataFilters=e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("data-filters");
        console.log(dataFilters);

        this.setState({
            show:!this.state.show
        })
        if(dataFilters !="false"){
            e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("xg-dropdown")[0].style="";
            e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.setAttribute("data-filters",false);
        }else{
            e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("xg-dropdown")[0].style.right="0px";
            e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("xg-dropdown")[0].style.left="0px";
            e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("xg-dropdown")[0].style.top="0px";
            e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("xg-dropdown")[0].firstChild.style.paddingTop =e.currentTarget.clientHeight+"px";
            e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("xg-dropdown")[0].style.display="flex";
            e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("xg-dropdown")[0].style.justifyContent="flex-end";
            e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.setAttribute("data-filters",true)
        }
        this.props.handlefiltersClearData()
        e.stopPropagation()
    }
    /*确定*/
    handleConfirm=(e)=>{
        console.log(e.currentTarget)
        const checkedArr=[]
        var parentNodeInput=e.currentTarget.parentNode.parentNode.getElementsByTagName("input");
        console.log(parentNodeInput.length)
        for(var i=0;i<parentNodeInput.length;i++){
            if(parentNodeInput[i].checked===true){
                checkedArr.push( parentNodeInput[i].value)
            }
        }
        this.setState({
            checkedArr,
        })

        /*可优化代码*/
        console.log(e);
        var dataFilters=e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("data-filters");
        console.log(dataFilters);

        this.setState({
            show:!this.state.show
        })
        if(dataFilters !="false"){
            e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("xg-dropdown")[0].style="";
            e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.setAttribute("data-filters",false);
        }else{
            e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("xg-dropdown")[0].style.right="0px";
            e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("xg-dropdown")[0].style.left="0px";
            e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("xg-dropdown")[0].style.top="0px";
            e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("xg-dropdown")[0].style.marginTop=e.currentTarget.clientHeight+"px";
            e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("xg-dropdown")[0].style.display="flex";
            e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("xg-dropdown")[0].style.justifyContent="flex-end";
            e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.setAttribute("data-filters",true)
        }
        /*确定提交数据*/
        this.props.handelfiltersdata(checkedArr)
        e.stopPropagation()

    }
    handleonMouseLeave=(e)=>{
        e.stopPropagation()
        console.log(e)
        e.currentTarget.parentNode.parentNode.style="";
        e.currentTarget.parentNode.parentNode.parentNode.setAttribute("data-filters",false)
        this.setState({
            checked:false,
            show:false,
            value:"",
        })


    }

    render() {
       // console.log(this.props.filterMultiple)
        return (
            <div data-filters="false">
                <i aria-label={this.props.icon+" xgicon-filter xg-dropdown-trigger" }className={"iconfont "+this.props.icon+" xgicon-filter xg-dropdown-trigger"} onClick={this.handleIcon}></i>

                    <div className="xg-dropdown"   >
                        <CssFade in={this.state.show}>
                        <div className="xg-table-filter-dropdown">
                            <ul className="xg-dropdown-menu xg-dropdown-menu-without-submenu xg-dropdown-menu-root xg-dropdown-menu-vertical" role="menu" tabIndex="0">
                                {
                                    this.props.filters.map((v,k)=>{
                                        console.log(v.filterMultiple)
                                        return(
                                            <li key={k} className="xg-dropdown-menu-item" role="menuitem">
                                                { this.props.filterMultiple !=false ?
                                                    (<Checkbox value={v.value} checkbox={this.state.checked} onChange={this.handleonChange}>{v.text}</Checkbox>)
                                                    :(<Radio value={v.value} checkbox={this.state.value !=v.value?false:true} name="filter" checkedValue={this.state.value} onChange={this.handleRadioOnChange}>{v.text}</Radio>)}

                                            </li>
                                            )

                                    })
                                }


                            </ul>
                            <div className="xg-table-filter-dropdown-btns">
                                <a className="xg-table-filter-dropdown-link confirm" onClick={this.handleConfirm}>确定</a>
                                <a className="xg-table-filter-dropdown-link clear" onClick={this.handleClear}>重置</a>
                            </div>
                        </div>
                        </CssFade>
                    </div>

            </div >


        );
    }
}

export default FiltersMsg;