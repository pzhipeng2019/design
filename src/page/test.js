import React from "react"
import {CSSTransition} from 'react-transition-group';
import ReactDOM from 'react-dom';

import Fades from "../component/Fades";
import Switch from "../component/Switch";
let num = 1;
class Test extends React.Component {
    state = {
        ins: true,
        current: 1,
        dom: <div className={""}>
            ceshi weizhi {num}
        </div>
    }
    handle = (bool) => {
        this.setState({
            test: !bool
        })
    }
    end = () => {


    }
    render () {
        const { location } = this.props
        const { test } = this.state;
        return (
            <div location={location}>
                <button onClick={this.handle.bind(null, this.state.test)}>点击transition</button>
                <Fades in={this.state.test} self={this.end}>
                    <ul>
                        <li>aaaaa</li>
                        <li>aaaaa</li>
                        <li>aaaaa</li>
                        <li>aaaaa</li>
                        <li>aaaaa</li>
                    </ul>
                    <ul>
                        <li>aaaaa</li>
                        <li>aaaaa</li>
                        <li>aaaaa</li>
                        <li>aaaaa</li>
                        <li>aaaaa</li>
                    </ul>
                </Fades>

            </div>
        )
    }
}
export default Test;