import React, {Component,Fragment} from 'react';
import ItemGroup from "./ItemGroup";
import {CSSTransition} from 'react-transition-group';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import MenuCss from "./MenuCss";

class SubMenu extends Component {
    constructor(props){
        super(props);
        this.state={
            showBox:false,
            BoxH:0,
        }
    }

    toggleBox=(e)=>{
        console.log(e)
        var el=e.currentTarget;
        this.setState({
            showBox:!this.state.showBox
        })
    };
    handleonMouseOver=()=>{
        this.setState({
            showBox:true,
        })
    }
    handleonMouseLeave=()=>{
        this.setState({
            showBox:false,
        })
    }
    static contextTypes = {
        propA: PropTypes.string,
        defaultOpenKeys: PropTypes.string,
        methodA: PropTypes.func
    }

    render() {
        const {
            propA,
            defaultOpenKeys,
            methodA
        } = this.context
        const inline=(//垂直
            <li className={"xg-menu-submenu xg-menu-submenu-selected xg-menu-submenu-"+propA+(this.state.showBox?(" xg-menu-submenu-open"):"")} role="menuitem">
                <div className="xg-menu-submenu-title" aria-expanded={this.state.showBox} aria-haspopup="true" aria-owns={this.props.id} style={{paddingLeft:"24px"}} onClick={this.toggleBox}>
                    {this.props.title}
                    <i className="xg-menu-submenu-arrow"></i>
                </div>
                <MenuCss in={this.state.showBox} id={this.props.id}>
                    {this.props.children}
                </MenuCss>

            </li>
        );

        const horizontal=(//水平

                   <li className={"xg-menu-submenu xg-menu-submenu-open xg-menu-submenu-selected xg-menu-submenu-"+propA} role="menuitem"
                       onMouseOver={this.handleonMouseOver}
                       onMouseLeave={this.handleonMouseLeave}
                   >
                       <div className="xg-menu-submenu-title" aria-expanded="false" aria-haspopup="true" aria-owns={this.props.id} style={{paddingLeft:"24px"}}>
                           {this.props.title}
                           <i className="xg-menu-submenu-arrow"></i>
                       </div>
                       <div className={"xg-horizontal"} style={{width:"100%",height:"100%"}} >
                           <div>
                               <div style={{position:"absolute",display:"inline-flex",top:"0",left:"0"}}>
                                   <MenuCss in={this.state.showBox}>
                                       {this.props.children}
                                   </MenuCss>
                               </div>
                           </div>
                       </div>
                   </li>

        )

console.log(this.context)


       console.log(`context.propA = ${propA}`)  // context.propA = propA
       console.log(`context.methodA = ${methodA}`)  // context.methodA = undefined
if(propA==="horizontal"){
    return (
        <Fragment>
            {horizontal}
        </Fragment>
    );
}else if(propA==="inline"){
    return(
        <Fragment>
            {inline}
        </Fragment>
        )

}

    }
}

export default SubMenu;