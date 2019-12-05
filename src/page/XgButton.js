import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Button from "../component/Button";
import ButtonGroup from "../component/ButtonGroup";



class XgButton extends Component {
    constructor(props){
        super(props);
        this.state={
            fSize:24,
        }
    }

    render() {
        return (
            <div>

                <div className={"titleColor fSize"+this.state.fSize}>Buttons  按钮</div>
                <div className="fSize14 bodyColor">
                    <p>按钮有五种类型：主按钮、次按钮、虚线按钮、危险按钮和链接按钮。</p>
                    <p>按钮有大、中、小三种尺寸。通过设置 size 为 lg sm 分别把按钮设为大、小尺寸；若不设置 size，则尺寸为中。</p>
                </div>
                <div id="components-button-demo-basic">
                    <div>
                        <div>
                            <p className="fSize12 fBold">Primary Button  主按钮</p>
                            <p className="bodyColor fSize12">主按钮在同一个操作区域最多出现一次。</p>
                        </div>
                        <div style={{display:"flex"}}>
                            <Button ButtonData={{size:"sm",title:"主按钮",type:"xg-btn-primary"}}><span>aaaaa</span></Button>
                            <Button ButtonData={{size:"sm",title:"保存",type:"xg-btn-primary"}} icon={"icon-save"}/>
                            <Button ButtonData={{size:"sm",type:"xg-btn-primary xg-btn-circle"}} icon={"icon-save"}/>
                        </div>
                        <div style={{display:"flex"}}>
                            <Button ButtonData={{size:"",title:"主按钮",type:"xg-btn-primary"}}/>
                            <Button ButtonData={{size:"",title:"保存",type:"xg-btn-primary"}} icon={"icon-save"}/>
                            <Button ButtonData={{size:"",type:"xg-btn-primary xg-btn-circle"}} icon={"icon-save"}/>
                        </div>
                        <div style={{display:"flex"}}>
                            <Button ButtonData={{size:"lg",title:"主按钮",type:"xg-btn-primary"}}/>
                            <Button ButtonData={{size:"lg",title:"保存",type:"xg-btn-primary"}} icon={"icon-save"}/>
                            <Button ButtonData={{size:"lg",type:"xg-btn-primary xg-btn-circle"}} icon={"icon-save"}/>
                        </div>

                    </div>
                    <div>
                        <div>
                            <p className="fSize12 fBold">Secondary Button  次按钮</p>
                            <p className="bodyColor fSize12">主按钮在同一个操作区域最多出现一次。</p>
                        </div>
                        <div style={{display:"flex"}}>
                            <Button ButtonData={{size:"sm",title:"主按钮",type:""}}/>
                            <Button ButtonData={{size:"sm",title:"保存",type:""}} icon={"icon-save"}/>
                            <Button ButtonData={{size:"sm",type:"xg-btn-circle"}} icon={"icon-save"}/>
                        </div>
                        <div style={{display:"flex"}}>
                            <Button ButtonData={{size:"",title:"主按钮",type:""}}/>
                            <Button ButtonData={{size:"",title:"保存",type:""}} icon={"icon-save"}/>
                            <Button ButtonData={{size:"",type:"xg-btn-circle"}} icon={"icon-save"}/>
                        </div>
                        <div style={{display:"flex"}}>
                            <Button ButtonData={{size:"lg",title:"主按钮",type:""}}/>
                            <Button ButtonData={{size:"lg",title:"保存",type:""}} icon={"icon-save"}/>
                            <Button ButtonData={{size:"lg",type:"xg-btn-circle"}} icon={"icon-save"}/>
                        </div>

                    </div>
                    <div>
                        <div>
                            <p className="fSize12 fBold">Dashed Button  虚框按钮</p>
                            <p className="bodyColor fSize12">主按钮在同一个操作区域最多出现一次。</p>
                        </div>
                        <div style={{display:"flex"}}>
                            <Button ButtonData={{size:"sm",title:"主按钮",type:"xg-btn-dashed"}}/>
                            <Button ButtonData={{size:"sm",title:"保存",type:"xg-btn-dashed"}} icon={"anticon-spin icon-save"}/>
                            <Button ButtonData={{size:"sm",type:"xg-btn-dashed xg-btn-circle"}} icon={"icon-save"}/>
                        </div>
                        <div style={{display:"flex"}}>
                            <Button ButtonData={{size:"",title:"主按钮",type:"xg-btn-dashed"}}/>
                            <Button ButtonData={{size:"",title:"保存",type:"xg-btn-dashed"}} icon={"icon-save"}/>
                            <Button ButtonData={{size:"",type:"xg-btn-dashed xg-btn-circle"}} icon={"icon-save"}/>
                        </div>
                        <div style={{display:"flex"}}>
                            <Button ButtonData={{size:"lg",title:"主按钮",type:"xg-btn-dashed"}}/>
                            <Button ButtonData={{size:"lg",title:"保存",type:"xg-btn-dashed"}} icon={"icon-save"}/>
                            <Button ButtonData={{size:"lg",type:"xg-btn-dashed xg-btn-circle"}} icon={"icon-save"}/>
                        </div>

                    </div>
                    <div>
                        <div>
                            <p className="fSize12 fBold">Danger Button  危险按钮</p>
                            <p className="bodyColor fSize12">主按钮在同一个操作区域最多出现一次。</p>
                        </div>
                        <div style={{display:"flex"}}>
                            <Button ButtonData={{size:"sm",title:"主按钮",type:"xg-btn-danger"}}/>
                            <Button ButtonData={{size:"sm",title:"保存",type:"xg-btn-danger"}} icon={"icon-save"}><i className="iconfont icon-down"></i></Button>
                            <Button ButtonData={{size:"sm",type:"xg-btn-danger xg-btn-circle"}} icon={"icon-save"}/>
                        </div>
                        <div style={{display:"flex"}}>
                            <Button ButtonData={{size:"",title:"主按钮",type:"xg-btn-danger"}}/>
                            <Button ButtonData={{size:"",title:"保存",type:"xg-btn-danger"}} icon={"icon-save"}/>
                            <Button ButtonData={{size:"",type:"xg-btn-danger xg-btn-circle"}} icon={"icon-save"}/>
                        </div>
                        <div style={{display:"flex"}}>
                            <Button ButtonData={{size:"lg",title:"主按钮",type:"xg-btn-danger"}}/>
                            <Button ButtonData={{size:"lg",title:"保存",type:"xg-btn-danger"}} icon={"icon-save"}/>
                            <Button ButtonData={{size:"lg",type:"xg-btn-danger xg-btn-circle"}} icon={"icon-save"}/>
                        </div>

                    </div>
                    <div>
                        <div>
                            <p className="fSize12 fBold">Link Button 链接按钮</p>
                            <p className="bodyColor fSize12">主按钮在同一个操作区域最多出现一次。</p>
                        </div>
                        <div style={{display:"flex"}}>
                            <Button ButtonData={{size:"sm",title:"主按钮",type:"xg-btn-link"}}/>
                            <Button ButtonData={{size:"sm",title:"保存",type:"xg-btn-link"}} icon={"icon-save"}/>
                            <Button ButtonData={{size:"sm",type:"xg-btn-link xg-btn-circle"}} icon={"icon-save"}/>
                        </div>
                        <div style={{display:"flex"}}>
                            <Button ButtonData={{size:"",title:"主按钮",type:"xg-btn-link"}}/>
                            <Button ButtonData={{size:"",title:"保存",type:"xg-btn-link"}} icon={"icon-save"}/>
                            <Button ButtonData={{size:"",type:"xg-btn-link xg-btn-circle"}} icon={"icon-save"}/>
                        </div>
                        <div style={{display:"flex"}}>
                            <Button ButtonData={{size:"lg",title:"主按钮",type:"xg-btn-link"}}/>
                            <Button ButtonData={{size:"lg",title:"保存",type:"xg-btn-link"}} icon={"icon-save"}/>
                            <Button ButtonData={{size:"lg",type:"xg-btn-link xg-btn-circle"}} icon={"icon-save"}/>
                        </div>

                    </div>

                    <div>
                        <div>
                            <p className="fSize12 fBold">Disable Button  失效按钮</p>
                            <p className="bodyColor fSize12">添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。</p>
                        </div>
                        <div style={{display:"flex"}}>
                            <Button ButtonData={{size:"",title:"Default"}}/>
                            <Button disabled ButtonData={{size:"",title:"Default(disabled)"}}/>
                        </div>
                        <div style={{display:"flex"}}>
                            <Button ButtonData={{size:"",title:"primary",type:"xg-btn-primary"}}/>
                            <Button disabled ButtonData={{size:"",title:"primary(disabled)",type:"xg-btn-primary"}}/>
                        </div>
                        <div style={{display:"flex"}}>
                            <Button ButtonData={{size:"",title:"danger",type:"xg-btn-danger"}}/>
                            <Button disabled ButtonData={{size:"",title:"danger(disabled)",type:"xg-btn-danger"}}/>
                        </div>
                        <div style={{display:"flex"}}>
                            <Button ButtonData={{size:"",title:"dashed",type:"xg-btn-dashed"}}/>
                            <Button disabled ButtonData={{size:"",title:"dashed(disabled)",type:"xg-btn-dashed"}}/>
                        </div>
                        <div style={{display:"flex"}}>
                            <Button ButtonData={{size:"",title:"link",type:"xg-btn-link"}}/>
                            <Button disabled ButtonData={{size:"",title:"link(disabled)",type:"xg-btn-link"}}/>
                        </div>
                    </div>

<div>
    <div className={"titleColor fSize"+this.state.fSize}>ButtonGroup  按钮组合</div>
    <div className="fSize14 bodyColor">
    </div>
    <ButtonGroup dd={"aaaa"}>
        <Button ButtonData={{size:"sm",title:"保存",type:"xg-btn-danger"}} icon={"icon-save"}><i className="iconfont icon-down"></i></Button>
        <Button ButtonData={{size:"sm",title:"保存",type:"xg-btn-danger"}} icon={"icon-save"}><i className="iconfont icon-down"></i></Button>
    </ButtonGroup>
</div>




                </div>
            </div>

        );
    }
}


export default XgButton;