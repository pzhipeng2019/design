import React, {Component} from 'react';
import Cascader from "./Cascader";
const options = [
    {
        key:1,
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                key:2,
                value: 'hangzhou',
                label: 'Hangzhou',
            },
        ],
    },
    {
        key:1,
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                key:2,
                value: 'nanjing',
                label: 'Nanjing',
            },
        ],
    },
];
class CitySwitcher extends Component {
    state = {
        text: 'Unselect',
    };

    onChange = (value) => {
        console.log(value)
        const str=value.replace(/\//g,",")
        console.log(str)
        this.setState({
            text: str,
        });
    };

    render() {
        return (
            <span>
        {this.state.text}
                &nbsp;
                <Cascader options={options} onChange={this.onChange}>
                    <a href="javascriipt:;">Change city</a>
                </Cascader>
      </span>
        );
    }
}

export default CitySwitcher;