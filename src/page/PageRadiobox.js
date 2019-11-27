import React, {Component} from 'react';
import Radio from "../component/Radio";
import Button from "../component/Button";
import RadioGroup from "../component/RadioGroup";
import Input from "../component/Input";
import RadioButton from "../component/RadioButton";

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: false },
];



class PageRadiobox extends Component {
    constructor(props) {
        super(props);
        this.state={
            disabled:true,
        }
    }
    toggleDisable = () => {
        console.log("toggleDisable")
        this.setState({ disabled: !this.state.disabled })
    }
    onChange = (e) => {
        console.log('radio checked', e.currentTarget.value);
        this.setState({
            value: e.currentTarget.value,
        });
    };




    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        return (
            <div>
                <div className={"titleColor fSize24"}>Radiobox  单项框</div>
                <div className="fSize14 bodyColor">
                    <p>用于在多个备选项中选中单个状态,所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。一定多于 2 个，一般少于 5 个。</p>
                </div>
                <section>
                    <div>简单的 Radiobox。</div>
                    <Radio>Radiobox</Radio>
                </section>
                <br/><br/><br/>
                <section>
                    <div>Radio 不可用。</div>
                    <Radio defaultChecked={false} disabled={this.state.disabled}>
                        Disabled
                    </Radio>
                    <br/>
                    <Radio defaultChecked disabled={this.state.disabled}>
                        Disabled
                    </Radio>
                    <br/>
                    <br/>
                    <Button ButtonData={{size:"sm",type:"xg-btn-primary"}} onClick={this.toggleDisable}><span>Toggle disabled</span></Button>
                </section>
                <br/><br/><br/>
                <section>
                    <div>单选组合 一组互斥的 Radio 配合使用。</div>
                    <RadioGroup onChange={this.onChange} value="1">
                        <Radio value={1}>A</Radio>
                        <Radio value={2}>B</Radio>
                        <Radio value={3}>C</Radio>
                        <Radio value={4}>D</Radio>
                    </RadioGroup>
                </section>
                <br/><br/><br/>
                <section>
                <div>单选组合 一组互斥的 Radio 配合使用。</div>
                <RadioGroup onChange={this.onChange} value="2">
                    <Radio style={radioStyle} value={1}>
                        Option A
                    </Radio>
                    <Radio style={radioStyle} value={2}>
                        Option B
                    </Radio>
                    <Radio style={radioStyle} value={3}>
                        Option C
                    </Radio>
                    <Radio style={radioStyle} value={4}>
                        More...
                        {this.state.value === "4" ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
                    </Radio>
                </RadioGroup>
            </section>
                <br/><br/><br/>
                <section>
                    <div>通过配置 options 参数来渲染单选框。</div>
                    <RadioGroup options={plainOptions} defaultValue="Apple" />
                    <RadioGroup options={options} defaultValue="Pear" />
                    <RadioGroup
                        options={optionsWithDisabled}
                        defaultValue="Orange"
                    />
                </section>
                <br/><br/><br/>
                <section>
                    <div>单选组合 - 配合 name 使用<br/>
                        可以为 RadioGroup 配置 name 参数，为组合内的 input 元素赋予相同的 name 属性，使浏览器把 RadioGroup 下的 Radio 真正看作是一组（例如可以通过方向键始终在同一组内更改选项）。</div>
                    <RadioGroup name="radiogroup" defaultValue={1}>
                        <Radio value={"1"}>A</Radio>
                        <Radio value={"2"}>B</Radio>
                        <Radio value={"3"}>C</Radio>
                        <Radio value={"4"}>D</Radio>
                    </RadioGroup>
                </section>
                <br/><br/><br/>
                <section>
                    <div>按钮样式<br/>
                        按钮样式的单选组合</div>
                    <RadioGroup defaultValue="a" onChange={this.onChange} >
                        <RadioButton value="a">Hangzhou</RadioButton>
                        <RadioButton value="b" disabled>Shanghai</RadioButton>
                        <RadioButton value="c">Beijing</RadioButton>
                        <RadioButton value="d">Chengdu</RadioButton>
                    </RadioGroup>

                </section>
                <br/><br/><br/>
                <section>
                    <div>填底的按钮样式<br/>
                        实色填底的单选按钮样式。</div>
                    <RadioGroup defaultValue="a" onChange={this.onChange} buttonStyle="solid" >
                        <RadioButton value="a">Hangzhou</RadioButton>
                        <RadioButton value="b" disabled>Shanghai</RadioButton>
                        <RadioButton value="c">Beijing</RadioButton>
                        <RadioButton value="d">Chengdu</RadioButton>
                    </RadioGroup>

                </section>
                <br/><br/><br/>
                <section>
                    <div>大小<br/>
                        大中小三种组合，可以和表单输入框进行对应配合。</div>
                    <RadioGroup defaultValue="a" onChange={this.onChange} size="large" >
                        <RadioButton value="a">Hangzhou</RadioButton>
                        <RadioButton value="b" disabled>Shanghai</RadioButton>
                        <RadioButton value="c">Beijing</RadioButton>
                        <RadioButton value="d">Chengdu</RadioButton>
                    </RadioGroup>
                    <br/><br/><br/>
                    <RadioGroup defaultValue="a" onChange={this.onChange} >
                        <RadioButton value="a">Hangzhou</RadioButton>
                        <RadioButton value="b" disabled>Shanghai</RadioButton>
                        <RadioButton value="c">Beijing</RadioButton>
                        <RadioButton value="d">Chengdu</RadioButton>
                    </RadioGroup>
                    <br/><br/><br/>
                    <RadioGroup defaultValue="a" onChange={this.onChange} size="small" >
                        <RadioButton value="a">Hangzhou</RadioButton>
                        <RadioButton value="b" disabled>Shanghai</RadioButton>
                        <RadioButton value="c">Beijing</RadioButton>
                        <RadioButton value="d">Chengdu</RadioButton>
                    </RadioGroup>

                </section>
            </div>
        );
    }
}

export default PageRadiobox;