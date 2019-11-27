import React, {Component} from 'react';
import Steps from "../component/Steps";
import Step from "../component/Step";
import Icon from "../component/Icon";
import Button from "../component/Button";
const steps = [
    {
        title: 'First',
        content: 'First-content',
    },
    {
        title: 'Second',
        content: 'Second-content',
    },
    {
        title: 'Last',
        content: 'Last-content',
    },
];
class PageSteps extends Component {
    constructor(props){
        super(props);
        this.state={
            fSize:24,
            current:0
        }
    }
    handlePageCurrent=(currentIndex)=>{
        console.log("pageCurrent"+currentIndex)

        this.setState({
            current:currentIndex
        })

    }
    next=()=> {
        const current = this.state.current + 1;
        console.log(current)
        this.setState({ current:current });
    }

    prev=()=>{
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render() {
        const {current}=this.state;

        return (
            <div>
                <div className={"titleColor fSize"+this.state.fSize}>Steps  步骤条</div>
                <div className="fSize14 bodyColor">
                    <p>引导用户按照流程完成任务的导航条，当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。</p>
                </div>
                <div>
                    <p>Basic Step  通用步骤条 </p>
                    <Steps current={current} onChange={this.handlePageCurrent}>

                        <Step title="提交完成" description="This is a description." />
                        <Step title="正在处理" subTitle="Left 00:00:08" description="This is a description." />
                        <Step title="审核通过" description="This is a description." />
                    </Steps>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <p>通常配合内容及按钮使用，表示一个流程的处理进度。 </p>
                    <Steps current={current} onChange={this.handlePageCurrent}>

                        {steps.map(item => (
                            <Step key={item.title} title={item.title} />
                        ))}
                    </Steps>
                    <div className="steps-content">{steps[current].content}</div>
                    <div className="steps-action">

                        {current < steps.length - 1 ?( <button type="button" className="xg-btn xg-btn-primary" xg-click-animating-without-extra-node="false" onClick={this.next}><span>Next</span></button>):""
                        }

                        {current>0?(<button type="button" className="xg-btn" style={{marginLeft:"8px"}} onClick={this.prev}><span>Previous</span></button>):""}

                        {current === steps.length - 1 ?(<button type="button" className="xg-btn xg-btn-primary" style={{marginLeft:"8px"}} ><span>Done</span></button>):""}

                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <p>Small Step  小型步骤条  </p>
                    <Steps current={1} size="small">
                        <Step title="已完成" description="This is a description." />
                        <Step title="当前项" subTitle="Left 00:00:08" description="This is a description." />
                        <Step title="未完成" description="This is a description." />
                    </Steps>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <p>Icon Step  图标步骤条  </p>
                    <Steps current={1} onChange={this.handlePageCurrent}>

                        <Step title="登录系统"  icon={<Icon title="icon-user"/>} />
                        <Step title="信息核对"  icon={<Icon title="icon-solution"/>} />
                        <Step title="付款成功"  icon={<Icon title="icon-credit-card"/>} />
                        <Step title="完成"  icon={<Icon title="icon-credit-card"/>} />
                    </Steps>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <p>Basic Step  通用步骤条 </p>
                    <Steps current={2} onChange={this.handlePageCurrent}>

                        <Step title="提交完成" description="提交描述有点多有点多" />
                        <Step title="正在处理" subTitle="Left 00:00:08" description="处理描述有点多有点多不得不换行" />
                        <Step title="审核通过" description="内容已通过已通过已经通过了" />
                        <Step title="完成" description="已经完成了" />
                    </Steps>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <p>Vertical Step 垂直步骤条</p>
                    <Steps current={3} direction="vertical">
                        <Step title="安装协议" description="这是一句描述文案" />
                        <Step title="安装位置" subTitle="Left 00:00:08" description="这是一句描述文案" />
                        <Step title="正在安装" description="这是一句描述文案" />
                        <Step title="安装完毕" description="这是一句描述文案" />
                    </Steps>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <p>简单的竖直方向的小型步骤条。</p>
                    <Steps current={2} size="small" direction="vertical">
                        <Step title="安装协议" description="这是一句描述文案" />
                        <Step title="安装位置" subTitle="Left 00:00:08" description="这是一句描述文案" />
                        <Step title="正在安装" description="这是一句描述文案" />
                        <Step title="安装完毕" description="这是一句描述文案" />
                    </Steps>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                </div>
            </div>
        );
    }
}

export default PageSteps;