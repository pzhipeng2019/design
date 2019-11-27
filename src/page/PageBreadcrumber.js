import React, {Component} from 'react';
import Breadcrumb from "../component/Breadcrumb";
import BreadcrumbItem from "../component/BreadcrumbItem";
import Icon from "../component/Icon";


class PageBreadcrumber extends Component {
    constructor(props){
        super(props);
        this.state={
            fSize:24,
            current:0
        }
    }
    render() {
        return (
            <div>

                <div className={"titleColor fSize"+this.state.fSize}> Breadcrumber  面包屑</div>
                <div className="fSize14 bodyColor">
                    <p>引导用户按照流程完成任务的导航条，当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。</p>
                </div>
                <p>Basic Breadcrumber  通用面包屑。</p>
                <Breadcrumb separator=">">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem><a href="">一级菜单</a></BreadcrumbItem>
                    <BreadcrumbItem><a href="">二级菜单</a></BreadcrumbItem>
                    <BreadcrumbItem><a href="">三级菜单</a></BreadcrumbItem>
                </Breadcrumb>
                <br/>
                <br/>
                <br/>
                <p>Icon Breadcrumber  图标面包屑。</p>
                <Breadcrumb>
                    <BreadcrumbItem href="/#/icon">
                        <Icon title="icon-home"/>

                    </BreadcrumbItem>
                    <BreadcrumbItem href="">
                        <Icon title="icon-folder-open"/>
                        <span>一级菜单</span>
                    </BreadcrumbItem>
                    <BreadcrumbItem href="">
                        <Icon title="icon-file-text"/>
                        <span>二级菜单</span>
                    </BreadcrumbItem>

                </Breadcrumb>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Icon title="icon-home"/>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <span>一级菜单</span>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
        );
    }
}

export default PageBreadcrumber;