import React, {Component} from 'react';

import Dropdown from "../XGComponent/Dropdown";
import Button from "../XGComponent/Button";
import {CSSTransition,TransitionGroup} from "react-transition-group"
import Menu from "../XGComponent/Menu";
import SubMenu from "../XGComponent/SubMenu";
import Item from "../XGComponent/Item";
class Navigation extends Component {
    constructor(props){
        super(props);
        this.state={
            fSize:32,
            show: true,
            showBox:true,
        }
    }
    /*hover*/
    DropdownOut(e){
        e.stopPropagation();
        var el=e.currentTarget;
        el.classList.add("xg-dropdown-hidden");
       // el.classList.remove("fade");
        console.log(el)
    }
    handleToggole() {
    this.setState({
                      show: this.state.show ? false : true
})
}

    render() {
        return (
            <div>
                <div className={"titleColor fSize"+this.state.fSize}>NAVIGATION 导航</div>
                <div>
                    <div className={"titleColor fSize"+24}>Dropdown  下拉菜单</div>
                    <div className="fSize14 bodyColor">
                        <p>向下弹出的列表。</p>
                    </div>
                    <br/>
                    <section>
                        <div className="dropdownGroup dropdownGroup_lg" >
                            <Dropdown ButtonData={{size:"lg",title:"菜单按钮",type:"xg-btn-primary"}} Icon={"icon-down"}  >
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

                          {/*  <div className="xg-dropdown xg-dropdown-placement-bottomLeft " onMouseLeave={this.DropdownOut.bind(this)}>
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
*/}
                        </div>
                        <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
                        <div className="dropdownGroup">
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

                        </div>
                        <br/> <br/> <br/> <br/>
                        <div className="dropdownGroup dropdownGroup_sm">
                            <Dropdown ButtonData={{size:"sm",title:"菜单按钮",type:"xg-btn-primary aaaaa"}} Icon={"icon-down"}>
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
                        </div>
                        <br/> <br/> <br/> <br/> <br/>
                        <div className="dropdownGroup">
                            <Dropdown ButtonData={{size:"sm",title:"更多",type:"xg-btn-link"}} Icon={"icon-down"}>
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
                        </div>
                    </section>
                    <br/> <br/> <br/> <br/> <br/>
                    <section>
                        <div className="dropdownGroup dropdownGroup_lg"   >
                            <Dropdown ButtonData={{size:"lg",title:"菜单按钮",type:""}} Icon={"icon-down"} >
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
                        </div>
                        <br/> <br/> <br/> <br/> <br/>
                        <div className="dropdownGroup"   >
                            <Dropdown ButtonData={{size:"",title:"菜单按钮",type:""}} Icon={"icon-down"} >
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
                        </div>
                        <br/> <br/> <br/> <br/> <br/>
                        <div className="dropdownGroup dropdownGroup_sm"   >
                            <Dropdown ButtonData={{size:"sm",title:"菜单按钮",type:""}} Icon={"icon-down"} >
                                <Menu style={"256"} mode={"inline"}>
                                    <Item>AAAAAAAAAA</Item>
                                    <Item>AAAAAAAAAA</Item>
                                    <Item>AAAAAAAAAA</Item>
                                </Menu>
                            </Dropdown>
                        </div>

                    </section>
                </div>

                <section className="code-box-demo">
                    <a className="xg-dropdown-link xg-dropdown-trigger"  onClick={this.handleToggole.bind(this)}>
                        Hover me
                    </a>
                </section>


            </div>
        );
    }
}

export default Navigation;