import React, {Component} from 'react';
import Checkbox from "../XGComponent/Checkbox";
import Button from "../XGComponent/Button";
import CheckboxGroup from "../XGComponent/CheckboxGroup";
import Row from "../XGComponent/Row";
import Col from "../XGComponent/Col";
function onChange(e) {
   // console.log(`checked = ${e.target.checked}`);
}
const plainOptions1 = ['Apple', 'Pear', 'Orange'];
const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
];
const defaultCheckedList = ['Apple', 'Orange'];
const plainOptions = ['Apple', 'Pear', 'Orange'];
const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: false },
];
class PageCheckbox extends Component {
    constructor(props) {
        super(props);
        this.state={
            checked: true,
            disabled: false,

            /*全选*/
            checkedList: defaultCheckedList,//选中的数组
            indeterminate: true,//全选样式
            checkAll: false,//是否选中
        }
    }
    /*联动 checkbox。*/
    onChange = e => {
       console.log(e)
        this.setState({
            checked: e.currentTarget.checked,
        });
    };
    toggleChecked = () => {
        console.log("toggleChecked")
        this.setState({ checked: !this.state.checked });
    };
    toggleDisable = () => {
        console.log("toggleDisable")
        this.setState({ disabled: !this.state.disabled });
    };
    /*全选*/
    onChangeAll = checkedList => {
        console.log(checkedList)
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
            checkAll: checkedList.length === plainOptions.length,
        });
    };

    onCheckAllChange = e => {
        this.setState({
            checkedList: e.currentTarget.checked ? plainOptions : [],
            indeterminate: false,
            checkAll: e.currentTarget.checked,
        });
    };

    render() {
        const label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${
            this.state.disabled ? 'Disabled' : 'Enabled'
            }`;
        return (
            <div>
                <div className={"titleColor fSize24"}> Checkbox多选框</div>
                <div className="fSize14 bodyColor">
                    <p>在一组可选项中进行多项选择时；一般用于状态标记，需要和提交操作配合。</p>
                </div>
                <section>
                    <div>简单的 checkbox。</div>
                    <Checkbox onChange={onChange}>Checkbox</Checkbox>
                </section>
                <br/><br/><br/>
                <section>
                    <div>checkbox 不可用</div>
                    <Checkbox defaultChecked={false} disabled />
                    <br />
                    <Checkbox defaultChecked disabled />
                </section>
                <br/><br/><br/>
                <section>
                    <div>联动 checkbox。</div>
                    <Checkbox
                        checked={this.state.checked}
                        disabled={this.state.disabled}
                        onChange={this.onChange}
                    >
                        {label}
                    </Checkbox>
                    <p>
                        <span>
                        <Button ButtonData={{size:"sm",type:"xg-btn-primary"}} onClick={this.toggleChecked}>{!this.state.checked ? 'Check' : 'Uncheck'}</Button>
                        </span>
                        <span style={{marginLeft:"20px"}}><Button ButtonData={{size:"sm",type:"xg-btn-primary"}} onClick={this.toggleDisable} > {!this.state.disabled ? 'Disable' : 'Enable'}</Button></span>
                    </p>
                </section>
                <br/><br/><br/>
                <section>
                    <CheckboxGroup options={plainOptions1} defaultValue={['Apple']} onChange={onChange} />
                    <br />
                    <br />
                    <CheckboxGroup options={options} defaultValue={['Pear']} onChange={onChange} />
                    <br />
                    <br />
                    <CheckboxGroup
                        options={optionsWithDisabled}
                        disabled
                        defaultValue={['Apple']}
                        onChange={onChange}
                    />
                </section>
                <br />
                <br />
                <section>
                    <div style={{ borderBottom: '1px solid #E9E9E9' }}>
                        <Checkbox
                            indeterminate={this.state.indeterminate}
                            onChange={this.onCheckAllChange}
                            checked={this.state.checkAll}
                        >
                            Check all
                        </Checkbox>
                    </div>
                    <br />
                    <CheckboxGroup
                        options={plainOptions}
                        allValue={this.state.checkedList}
                        onChange={this.onChangeAll}
                    />
                </section>
                <section>
                    <p>内嵌 Checkbox 并与 Grid 组件一起使用，可以实现灵活的布局</p>
                    <CheckboxGroup>
                        <Row>
                            <Col span={8}>
                                <Checkbox value="A">A</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="B">B</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="C">C</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="D">D</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="E">E</Checkbox>
                            </Col>
                        </Row>
                    </CheckboxGroup>
                </section>

            </div>
        );
    }
}

export default PageCheckbox;