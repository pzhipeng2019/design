import React, {Component} from 'react';
import Input from "../XGComponent/Input";
import Select from "../XGComponent/Select";
import Option from "../XGComponent/Option";
import Icon from "../XGComponent/Icon";
import Search from "../XGComponent/Search";
import TextArea from "../XGComponent/TextArea";
const selectBefore = (
    <Select defaultValue="Http://" style={{ width: 90 }}>
        <Option value="Http://">Http://</Option>
        <Option value="Https://">Https://</Option>
    </Select>
);
const selectAfter = (
    <Select defaultValue=".com" style={{ width: 80 }}>
        <Option value=".com">.com</Option>
        <Option value=".jp">.jp</Option>
        <Option value=".cn">.cn</Option>
        <Option value=".org">.org</Option>
    </Select>
);
class PageInput extends Component {
    render() {
        return (
            <div>
                <div className={"titleColor fSize24"}>Select选择器</div>
                <div className="fSize14 bodyColor">
                    <p>下拉选择器。</p>
                </div>
                <section>
                    <div>基本使用。</div>
                    <Input defaultValue="aaa" placeholder="Basic usage"/>
                </section>
                <section>
                    <div>我们为输入框定义了三种尺寸（大、默认、小），高度分别为 40px、32px 和 24px。</div>
                    <Input size="large" placeholder="large size" /><br/>
                    <Input placeholder="default size" /><br/>
                    <Input size="small" placeholder="small size" />
                </section>
                <br/><br/><br/>
                <section>
                    <div>
                        <Input addonBefore="Http://" addonAfter=".com" defaultValue="mysite" /><br/>
                    </div>
                    <div>
                        <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" /><br/>
                    </div>
                    <div>
                        <Input addonAfter={<Icon title="icon-setting"/>} defaultValue="mysite" /><br/>
                    </div>
                </section>
                <br/><br/><br/>
                <section>
                    <div>带有搜索按钮的输入框，2.5.0 时新增。</div>
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                    />
                    <br/>
                    <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
                    <br/>
                    <Search
                        placeholder="input search text"
                        enterButton="Search"
                        size="large"
                        onSearch={value => console.log(value)}
                    />


                </section>
                <section>
                    <br />
                    <br />
                    <Search placeholder="input search loading deault" loading />
                    <br />
                    <br />
                    <Search placeholder="input search loading with enterButton" loading enterButton />
                </section>
                <section>
                    <TextArea placeholder="Autosize height based on content lines" autoSize />
                </section>
            </div>
        );
    }
}

export default PageInput;