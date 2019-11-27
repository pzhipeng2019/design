import React, {Component} from 'react';
import {CSSTransition} from "react-transition-group";
import SubMenu from "./SubMenu";
import ItemGroup from "./ItemGroup";
import Item from "./Item";
import PropTypes from "prop-types"

class Menu extends Component {

    constructor(props){
        super(props);
    }
    static childContextTypes = {
        propA: PropTypes.string,
        defaultOpenKeys: PropTypes.string,
        methodA: PropTypes.func
    }

    // 返回Context对象，方法名是约定好的
    getChildContext () {
        return {
            propA: this.props.mode,
            defaultOpenKeys:this.props.defaultOpenKeys,
            methodA: () => 'methodA'
        }
    }
    handleSubMen(e){

    }
    /*子菜单 subnav  li 点击事件*/
    subNav(){
        var subNav=document.getElementsByClassName("xg-menu-item");
        if(subNav.length>0){
            for (var i=0;i<subNav.length;i++){

                subNav[i].onclick=function(){
                    for (var j=0;j<subNav.length;j++){
                        subNav[j].classList.remove("xg-menu-item-selected");
                    }
                    console.log(this);
                    this.classList.add("xg-menu-item-selected");

                }
            }
        }
    }
    /*父菜单 submenu div 点击事件*/
    subMenu(){
        var submenu=document.getElementsByClassName("xg-menu-submenu-title");
        if(submenu.length>0){
            for(var divI=0; divI<submenu.length; divI++){
                submenu[divI].onclick=function(){
                    var el=this;

                    var subId=el.attributes["aria-owns"].nodeValue;
                    var subFla=el.attributes["aria-expanded"].nodeValue;
                    var subMenu=document.getElementById(subId);
                    var tagerH=0;//目标高度
                    var len=subMenu.childNodes.length;
                    for(var i=0;i<len;i++) {
                        tagerH += subMenu.childNodes[i].offsetHeight+4;//计算目标高度
                    }
                    var items;
                    if(subFla==="true"){

                        subMenu.parentNode.classList.remove("xg-menu-submenu-open");
                        clearInterval(items)
                        items= setInterval(function(){
                            var currentH=parseInt(subMenu.offsetHeight);//当前高度

                            var speed=currentH/2;//当前高度/2 获得变速高度

                            if(currentH>1){
                                currentH=currentH-speed;
                                subMenu.style.height=currentH+"px";
                            }else{
                                subMenu.style.height=0;
                                clearInterval(items)
                                el.setAttribute("aria-expanded","false");

                            }
                        },30);



                    }else{
                        subMenu.classList.remove("xg-menu-hidden")

                        setTimeout(function () {
                            clearInterval(items)
                            items= setInterval(function(){
                                var currentH=parseInt(subMenu.offsetHeight);//当前高度

                                var speed=(tagerH-currentH)/2;//速度
                                if(currentH>=tagerH){
                                    clearInterval(items)
                                    subMenu.style.height=tagerH+"px";
                                    el.setAttribute("aria-expanded","true");
                                    subMenu.style=""
                                }else{
                                    subMenu.style.height=currentH+speed+"px";
                                    el.setAttribute("aria-expanded","false");

                                }
                            },30);
                        },30)

                    }
                }
            }
        }
    }
    /*动画*/
    animate(){

    }
    componentDidMount(){
        this.subNav()
        document.getElementsByClassName("xg-menu-item")[1].classList.add("xg-menu-item-selected");
    }
    render() {
console.log(this.props.defaultOpenKeys)
        return (

                    <menu>
                        <ul className={"xg-menu xg-menu-dark xg-menu-root xg-menu-"+this.props.mode} role="menu" style={{width:this.props.style+"px"}}>
                            {this.props.children}
                        </ul>
                    </menu>

        );
    }
}

export default Menu;