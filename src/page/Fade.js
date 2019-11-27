import React, {Component,Fragment} from 'react';
import {CSSTransition,TransitionGroup} from "react-transition-group";
import Button from "../component/Button";
import Menu from "../component/Menu";
import ButtonGroup from "../component/ButtonGroup";
import SubMenu from "../component/SubMenu";
import ItemGroup from "../component/ItemGroup";
import Item from "../component/Item";

class Fade extends Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <Fragment>
                <ButtonGroup key="button1">

                    <Button ButtonData={{size:"sm",title:"保存",type:"xg-btn-danger",p:this.props.key}} icon={"icon-save"}><i className="iconfont icon-down"></i></Button>
                </ButtonGroup>
                <Menu style={"256"} mode={"horizontal"}>
                    <SubMenu id={"sub1"} title={<span><i className="iconfont icon-down"></i><span>sub1</span></span>}>

                        <ItemGroup title={"group"}>
                            <Item>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Item>
                            <Item>bbbbb</Item>
                            <Item>cccccc</Item>
                        </ItemGroup>
                    </SubMenu>
                    <SubMenu id={"sub2"} title={"sub2"}>
                        <ItemGroup title={"group"}>
                            <Item>AAAAAA</Item>
                            <Item>bbbbb</Item>
                            <Item>cccccc</Item>
                            <SubMenu id={"sub3"} title={"sub3"}>
                                <ItemGroup title={"group"}>

                                    <Item>AAAAAA</Item>
                                    <Item>bbbbb</Item>
                                    <Item>cccccc</Item>
                                </ItemGroup>
                            </SubMenu>
                        </ItemGroup>
                    </SubMenu>
                </Menu>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Menu style={"256"} mode={"inline"} defaultOpenKeys={'sub2'}>
                <SubMenu id={"sub1"} title={<span><i className="iconfont icon-down"></i><span>sub1</span></span>}>

                    <ItemGroup title={"group"}>
                        <Item>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Item>
                        <Item>bbbbb</Item>
                        <Item>cccccc</Item>
                    </ItemGroup>
                </SubMenu>
                <SubMenu id={"sub2"} title={"sub2"}>
                    <ItemGroup title={"group"}>
                        <Item>AAAAAA</Item>
                        <Item>bbbbb</Item>
                        <Item>cccccc</Item>
                        <SubMenu id={"sub3"} title={"sub3"}>
                            <ItemGroup title={"group"}>

                                <Item>AAAAAA</Item>
                                <Item>bbbbb</Item>
                                <Item>cccccc</Item>
                            </ItemGroup>
                        </SubMenu>
                    </ItemGroup>
                </SubMenu>
            </Menu>
            </Fragment>
        );
    }
}

export default Fade;