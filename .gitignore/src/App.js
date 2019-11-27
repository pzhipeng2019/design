import React, {Component} from 'react';
import "./component/style/style.less"
import Layout from "./component/Layout";

class App extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
  render() {
    return (
        <div className="app">
            <Layout/>

        </div>
    );
  }
}

export default App;
