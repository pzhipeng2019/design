import React, {Component} from 'react';
import Pagination from "../XGComponent/Pagination";
function onShowSizeChange(current,pagesize){
    console.log(current,pagesize)
}
function itemRender(current, type, originalElement) {
    if (type === 'prev') {
        return <a>Previous</a>;
    }
    if (type === 'next') {
        return <a>Next</a>;
    }
    return originalElement;
}
class PagePagination extends Component {
    render() {
        return (
            <div>
                <div className={"titleColor fSize24"}>Pagination分页</div>
                <div className="fSize14 bodyColor">
                    <p>采用分页的形式分隔长列表，每次只加载一个页面。</p>
                </div>
                <section className="">
                    <div>基础分页。</div>
                    <Pagination defaultCurrent={1} total={51} showSizeChanger/>
                </section>
                <br/><br/><br/>
                <section className="">
                    <div>更多分页。</div>
                    <Pagination defaultCurrent={2} total={100} onShowSizeChange={onShowSizeChange}/>
                </section>
                <br/><br/><br/>
                <section className="">
                    <div>快速跳转到某一页。</div>
                    <Pagination defaultCurrent={2} total={100} showQuickJumper onShowSizeChange={onShowSizeChange}/>
                </section>
                <br/><br/><br/>
                <section className="">
                    <div>改变每页显示条目数。</div>
                    <Pagination defaultCurrent={2} total={100} showSizeChanger onShowSizeChange={onShowSizeChange}/>
                </section>
                <br/><br/><br/>
                <section className="">
                    <div>组合分页。</div>
                    <Pagination defaultCurrent={2} total={100} showSizeChanger showQuickJumper onShowSizeChange={onShowSizeChange}/>
                </section>
                <br/><br/><br/>
                <section className="">
                    <div>禁用分页</div>
                    <Pagination defaultCurrent={2} total={100} showSizeChanger showQuickJumper onShowSizeChange={onShowSizeChange} disabled/>
                </section>
                <br/><br/><br/>
                <section className="">
                    <div>迷你版本。</div>
                    <Pagination size="small" defaultCurrent={2} total={100} showSizeChanger showQuickJumper onShowSizeChange={onShowSizeChange}/>
                </section>
                <br/><br/><br/>
                <section className="">
                    <div>简单的翻页。</div>
                    <Pagination size="small" defaultCurrent={2} total={100} showSizeChanger showQuickJumper simple onShowSizeChange={onShowSizeChange}/>
                </section>
                <br/><br/><br/>
                <section className="">
                    <div>通过设置 showTotal 展示总共有多少数据。</div>
                    <Pagination showTotal={total => `Total ${total} items`} defaultCurrent={2} total={100} showSizeChanger showQuickJumper onShowSizeChange={onShowSizeChange}/>

                    <Pagination  showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`} defaultCurrent={2} total={101} showSizeChanger showQuickJumper onShowSizeChange={onShowSizeChange}/>
                </section>
                <br/><br/><br/>
                <section className="">
                    <div>修改上一步和下一步为文字链接。</div>
                    <Pagination total={500} itemRender />
                </section>
                <section className="">
                    <div>通过设置 showTotal 展示总共有多少数据。</div>
                    <Pagination showTotal={total => `Total ${total} items`} defaultCurrent={2} total={100} showSizeChanger showQuickJumper onShowSizeChange={onShowSizeChange}/>

                    <Pagination  showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`} defaultCurrent={2} total={101} showSizeChanger showQuickJumper onShowSizeChange={onShowSizeChange}/>
                </section>
            </div>
        );
    }
}

export default PagePagination;