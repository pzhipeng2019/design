import React, {Component} from "react";

import { HashRouter as Router, Route,Switch} from "react-router-dom";
import routers from "./config";

class Index extends Component {
    render() {
        return (
<Switch>
            {
                routers.map((route,key)=>{
                    if(route.exact){
                    return(
                        <Route exact key={key} path={route.path} component={route.component}/>
                    )
                    }else{
                        return(
                            <Route key={key} path={route.path} component={route.component}/>
                    )}
            
                })
            }
</Switch>
    );
    }
}

export default Index;