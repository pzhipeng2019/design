import React, {Component} from 'react';
import { HashRouter as Router, Route,Switch} from "react-router-dom";
import Layout from "./component/Layout";
import "./component/style/style.less";
import "./component/style/xg_style.less";
import "./component/style/xg_style1.less";
import "./component/style/color.less";
class App extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
  render() {
    return (
        <div className="app">
            <Router>
                <Layout/>
            </Router>
        </div>
    );
  }
}

export default App;
