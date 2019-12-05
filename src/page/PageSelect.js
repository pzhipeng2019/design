import React, {Component} from 'react';

import Select from "../component/Select";
import Option from "../component/Option";
function handleChange(value) {
    console.log(`selected ${value}`);
}
function onChange(value) {
    console.log(`selected ${value}`);
}

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(val) {
    console.log('search:', val);
}
class PageSelect extends Component {
    render() {

        return (
            <div>
                <div className={"titleColor fSize24"}>Select选择器</div>
                <div className="fSize14 bodyColor">
                    <p>下拉选择器。</p>
                </div>
                <section>
                    <div>基本使用。</div>
                    <div>
                        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="disabled" disabled>
                                Disabled
                            </Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                        <Select defaultValue="lucy" style={{ width: 120 }} disabled>
                            <Option value="lucy" disabled>Lucy</Option>
                        </Select>
                        <Select defaultValue="lucy" style={{ width: 120 }}>
                            <Option value="lucy">Lucy</Option>
                        </Select>
                    </div>
                </section>
                <section>
                    <div>带搜索框<br/>
                        展开后可对选项进行搜索。</div>
                    <div>
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select a person"
                            optionFilterProp="children"
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                    </div>
                </section>
            </div>
        );
    }
}

export default PageSelect;