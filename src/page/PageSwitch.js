import React, {Component} from 'react';
import Switch from "../component/Switch";

class PageSwitch extends Component {
    constructor(props){
        super(props);
        this.state={
            fSize:24,
        }
    }
    render() {
        return (
            <div>
                <div className={"titleColor fSize"+this.state.fSize}>Switch  开关</div>
                <div className="fSize14 bodyColor">
                    <p>开关选择器，需要表示开关状态/两种状态之间的切换时；直接触发状态改变。</p>
                </div>
                <Switch defaultChecked disabled></Switch>
                <p>Switch 失效状态</p>
                <br/><br/><br/><br/>
                <Switch disabled></Switch>
                <p>Switch 失效状态</p>
                <br/><br/><br/><br/>
                <Switch defaultChecked></Switch>
                <p>最简单的用法。</p>
                <br/><br/><br/><br/>
                <Switch size={"small"}></Switch>
                <p>size="small" 表示小号开关。</p>
                <br/><br/><br/><br/>
                <Switch checkedChildren="1" unCheckedChildren="0"  />
                <br/><br/><br/><br/>
                <Switch checkedChildren="开" unCheckedChildren="关"  />
                <p>带有文字。</p>
                <br/><br/><br/><br/>
                <Switch checkedChildren={<i className="iconfont icon-check"></i>} unCheckedChildren={<i className="iconfont icon-close"></i>}  />
                <p>带有图标。</p>
            </div>
        );
    }
}

export default PageSwitch;