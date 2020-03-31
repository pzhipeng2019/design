import React, {Component} from 'react';
import {Provider} from "react-redux";
import store from "./XGComponent/store"
import { HashRouter as Router, Route,Switch} from "react-router-dom";

import Layout from "./XGComponent/Layout";
import "./XGComponent/style/style.less";
import "./XGComponent/style/xg_style.less";
import "./XGComponent/style/xg_style1.less";
import "./XGComponent/style/color.less";
class App extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
  render() {
    return (
<Provider store={store}>
        <div className="app">
            <Router>
                <Layout/>
            </Router>
        </div>
</Provider>
    );
  }
}

export default App;
