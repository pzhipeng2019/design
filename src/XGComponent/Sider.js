import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import linkData from "./router/config";

class Sider extends Component {
    render() {
        return (
            <aside style={{width:200,background:"#00a0e9"}}>
                <ul className="xg-menu xg-menu-sub xg-menu-inline">
                    {
                       linkData.map((value, key)=>{
                           return(
                               <li key={key} className="xg-menu-item">
                                   <Link className="linkColor" to={value.path}>{value.title}</Link>
                               </li>
                           )
                       })
                    }

                </ul>
            </aside>


        );
    }
}

export default Sider;