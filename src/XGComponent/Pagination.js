import React, {Component,Fragment} from 'react';
import Icon from "./Icon";
import Option from "./Option";
import Select from "./Select";
import Input from "./Input";

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state={

            defaultCurrent:1,//默认的当前页数
            defaultPageSize:10,//默认的每页条数
            disabled:"",//禁用分页
            hideOnSinglePage:false,//只有一页时是否隐藏分页器
            itemRender:"",//用于自定义页码的结构，可用于优化 SEO

            pageSizeOptions:"",//指定每页可以显示多少条string[]	['10', '20', '30', '40']
            showLessItems:false,//show less page items
            showQuickJumper:false,//是否可以快速跳转至某页
            showSizeChanger:false,//是否可以改变 pageSize
            showTotal:"",//用于显示数据总量和当前数据顺序Function(total, range)
            simple:"",//当添加该属性时，显示为简单分页
            size:"",//当为「small」时，是小尺寸分页
            total:0,//数据总数
            onChange:"noop",//页码改变的回调，参数是改变后的页码及每页条数Function(page, pageSize)
            onShowSizeChange:"noop",//pageSize 变化的回调	Function(current, size),
            pageNum:[],//显示页面列表
            current:'',//当前页数
            pageSize:'',//每页条数
            inputValue:"",//存放跳转到那一页 value值
            range:""//当前数据顺序
        }
    }
    componentWillMount() {
        if(this.props.defaultCurrent){
            this.setState({
                current:this.props.defaultCurrent,
                defaultCurrent:this.props.defaultCurrent,
            })

        }else{
            this.setState({
                current:this.state.defaultCurrent,
            })
        }
        this.setState({
            total:this.props.total,
        })
        if(this.props.pageSize){
            this.setState({
                pageSize:this.props.pageSize
            })
        }else{
            this.setState({
                pageSize:this.state.defaultPageSize
            })
        }
        /*是否显示可以改变 pageSize*/
        if(this.props.showSizeChanger){
            this.setState({
                showSizeChanger:true
            })
        }
        this.handlePageNum()

        if(this.props.disabled){
            this.setState({
                disabled:true,
            })
        }
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        //console.log(nextState)
        //console.log(this)
        if(nextState.current !=this.state.current || nextState.pageSize !=this.state.pageSize){
            this.props.onShowSizeChange(nextState.current,nextState.pageSize)
        }
    }

    /*点击切换页码*/
    handlePageSize=(index,e)=>{

        if(this.state.disabled){
            return;
        }
        e.stopPropagation();
        const {total,current,pageSize}=this.state;
        const pages=total%pageSize==0?(total/pageSize):(Math.floor(total/pageSize)+1);
        if(index<1){
            this.setState({
                current:1,
            })

        }else if(index>pages){
            this.setState({
                current:pages,
            })
        }
       else{
            this.setState({
                current:index,
            })
        }
       //console.log(this.props)

    }
    /*遍历页码*/
    handlePageNum=()=>{

        const total=this.props.total;
        let pageSize="";
        if(this.props.pageSize){
            pageSize=this.props.pageSize
        }else{
            pageSize=this.state.defaultPageSize
        }
        const pageNum=[];
        const pages=total%pageSize==0?(total/pageSize):(Math.floor(total/pageSize)+1);
        for(var i=1;i<=pages;i++){
            pageNum.push(i)
        }
        this.setState({
            pageNum,
        })
    }
    /*修改每页条数 pageSize*/
    handleSelect=(value,e)=>{
        if(this.state.disabled){
            return;
        }
        const total=this.props.total;
       //console.log(value)
        this.setState({
            pageSize:value
        })
        const pages=total%value==0?(total/value):(Math.floor(total/value)+1);
        const pageNum=[];
        for(var i=1;i<=pages;i++){
            pageNum.push(i)
        }
        this.setState({
            pageNum,
        })
        if(this.state.current>pages){
            this.setState({
                current:pages
            })
        }
        //console.log(e)

    }
    /*跳转到第几页*/
    handleInput=(e)=>{
        if(this.state.disabled){
            return;
        }
        //console.log("handleInput")
        //console.log(e.currentTarget.value)
        this.setState({
            inputValue:e.currentTarget.value
        })
    }
    handleInputBlur=(e)=>{
        if(this.state.disabled){
            return;
        }
        const {total,pageSize}=this.state;
        //console.log("handleInputBlur")
        //console.log(e.currentTarget.value)
        const current=e.currentTarget.value;
        const pages=total%pageSize==0?(total/pageSize):(Math.floor(total/pageSize)+1);
        if(current){
            if(current>pages){
                this.setState({
                    current:pages,
                })
            }else if(current<=0){
                this.setState({
                    current:1,
                })
            }else{
                this.setState({
                    current:parseInt(current),
                })
            }
        }

    }

    render() {
        const {current,pageNum,total,pageSize,showSizeChanger}=this.state;
        let pageNumArr=[];
        //console.log(current)
        const pages=total%pageSize==0?(total/pageSize):(Math.floor(total/pageSize)+1);
        if(pages>=10) {

            if (current > 4 && current < pages - 2) {
                pageNumArr = pageNum.slice(current - 3, current + 2)
            } else if (current >= pages - 2) {
                pageNumArr = pageNum.slice(-5, -1)
            } else {
                pageNumArr = pageNum.slice(1, 5)
            }
        }else{
            pageNumArr=pageNum;
        }
        /*当前数据顺序 range*/
        const range=[(current-1)*pageSize+1,current*pageSize>total?total:current*pageSize];

            //console.log(range)
        if(this.props.simple){
            return (
                <Fragment>
                    <ul className={"xg-pagination"+(this.props.disabled?" xg-pagination-disabled":"")+(this.props.simple?" xg-pagination-simple":"")+(this.props.size?" mini":"")} unselectable="unselectable">
                        <li title="上一页"
                            className={(current>1?"":"xg-pagination-disabled ")+"xg-pagination-prev"}
                            aria-disabled={current>1?"true":"false"}
                        >
                            {this.props.itemRender?
                                (<a onClick={this.handlePageSize.bind(this,current-1)}>Previous</a>)
                                :(<a className="xg-pagination-item-link">
                                    <Icon title="icon-left" onChange={this.handlePageSize.bind(this,current-1)}/>
                                </a>)
                            }
                        </li>


                        <li title={current+"/"+pages} className="xg-pagination-simple-pager">
                            <input type="text" size="3"  value={current}/>
                            <span className="xg-pagination-slash">/</span>
                            {pages}
                        </li>


                        <li title="下一页"
                            className={(current<pages?"":"xg-pagination-disabled ")+" xg-pagination-next"}
                            aria-disabled={current<pages?"false":"true"}
                            tabIndex="0"
                        >
                            {this.props.itemRender?(<a onClick={this.handlePageSize.bind(this,current+1)}>Next</a>):
                                ( <a className="xg-pagination-item-link"  >

                                    <Icon title="icon-right" onChange={this.handlePageSize.bind(this,current+1)}/>
                                </a>)}

                        </li>




                    </ul>
                </Fragment>
            );
        }else{
            return (
                <Fragment>
                    <ul className={"xg-pagination"+(this.props.disabled?" xg-pagination-disabled":"")+(this.props.simple?" xg-pagination-simple":"")+(this.props.size?" mini":"")} unselectable="unselectable">
                        {
                            this.props.showTotal?(<li className="xg-pagination-total-text">{this.props.showTotal(total,range)}</li>):null
                        }
                        <li title="上一页"
                            className={(current>1?"":"xg-pagination-disabled ")+"xg-pagination-prev"}
                            aria-disabled={current>1?"true":"false"}
                        >
                            {this.props.itemRender?
                                (<a onClick={this.handlePageSize.bind(this,current-1)}>Previous</a>)
                                :(<a className="xg-pagination-item-link">
                                    <Icon title="icon-left" onChange={this.handlePageSize.bind(this,current-1)}/>
                                </a>)
                            }
                        </li>

                        {
                            pages>=10?(
                                <Fragment>
                                    <li
                                        title={1}
                                        className={"xg-pagination-item"+(" xg-pagination-item-1")+(current===1?" xg-pagination-item-active":"")}
                                        tabIndex="0"
                                        onClick={this.handlePageSize.bind(this,1)}
                                    >
                                        <a>1</a>
                                    </li>
                                    {
                                        current>=5?(
                                            <li title="向前 5 页" tabIndex="0" className="xg-pagination-jump-prev xg-pagination-jump-prev-custom-icon">
                                                <a className="xg-pagination-item-link">
                                                    <div className="xg-pagination-item-container">
                                                        <Icon title="icon-double-left xg-pagination-item-link-icon" />
                                                        <span className="xg-pagination-item-ellipsis" onClick={this.handlePageSize.bind(this,current-5)}>•••</span></div>
                                                </a>
                                            </li>
                                        ):null
                                    }
                                </Fragment>):null
                        }

                        {
                            pageNumArr.map((v,k)=>{
                                return(
                                    <li key={k} title={v} className={"xg-pagination-item"+(" xg-pagination-item-"+v)+(current===v?" xg-pagination-item-active":"")} tabIndex="0" onClick={this.handlePageSize.bind(this,v)}><a>{v}</a></li>
                                )
                            })
                        }

                        {
                            (pages)>=10?(
                                <Fragment>
                                    {
                                        current>=pages-3?null:(<li title="向后 5 页" tabIndex="0" className="xg-pagination-jump-next xg-pagination-jump-next-custom-icon">
                                            <a className="xg-pagination-item-link">
                                                <div className="xg-pagination-item-container">
                                                    <Icon title="icon-double-right xg-pagination-item-link-icon"/>
                                                    <span className="xg-pagination-item-ellipsis" onClick={this.handlePageSize.bind(this,current+5)}>•••</span>
                                                </div>
                                            </a>
                                        </li>)
                                    }
                                    <li
                                        title={pages}
                                        className={"xg-pagination-item"+(" xg-pagination-item-"+pages)+(current===pages?" xg-pagination-item-active":"")}
                                        tabIndex="0"
                                        onClick={this.handlePageSize.bind(this,pages)}
                                    >
                                        <a>{pages}</a>
                                    </li>
                                </Fragment>
                            ):null
                        }
                        <li title="下一页"
                            className={(current<(pages)?"":"xg-pagination-disabled ")+" xg-pagination-next"}
                            aria-disabled={current<pages?"false":"true"}
                            tabIndex="0"
                        >
                            {this.props.itemRender?(<a onClick={this.handlePageSize.bind(this,current+1)}>Next</a>):
                                ( <a className="xg-pagination-item-link"  >

                                    <Icon title="icon-right" onChange={this.handlePageSize.bind(this,current+1)}/>
                                </a>)}
                        </li>
                        {
                            showSizeChanger?(<li className="xg-pagination-options">
                                <Select defaultValue="10条/页" style={{ width: 90 }} onChange={this.handleSelect} disabled={this.state.disabled}>
                                    <Option value="10">10条/页</Option>
                                    <Option value="20">20条/页</Option>
                                    <Option value="30">30条/页</Option>
                                    <Option value="40">40条/页</Option>
                                    <Option value="50">50条/页</Option>
                                </Select>
                            </li>):null
                        }
                        {
                            this.props.showQuickJumper?(<li className="xg-pagination-options">
                                <div className="xg-pagination-options-quick-jumper">跳至<input type="text" value={this.state.inputValue} onChange={this.handleInput} onBlur={this.handleInputBlur}  disabled={this.state.disabled}/>页</div>
                            </li>):null
                        }


                    </ul>
                </Fragment>
            );
        }


    }
}

export default Pagination;