import React, {Component} from 'react';
import {Consumer} from "./Table"
class ContextTest extends Component {
    constructor(props) {
        super(props);

    }
    componentWillMount() {
        console.log(this)
    }

    render() {
        return (

                <Consumer>
                    {( name ) =>
                        <div style={{ border: '1px solid blue', width: '60%', margin: '20px auto', textAlign: 'center' }}>
                            <p>子组件。获取父组件的值:{name}</p>
                        </div>
                    }
                </Consumer>

        );
    }
}

export default ContextTest;