import React, {Component} from 'react';
import Cascader from "../XGComponent/Cascader";
import CitySwitcher from "../XGComponent/CitySwitcher";
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
                children: [
                    {
                        key:3,
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
            {
                key:2,
                value: 'hangzhou1',
                label: 'Hangzhou1',
                children: [
                    {
                        key:3,
                        value: 'xihu1',
                        label: 'West Lake1',
                    },
                ],
            },
        ],
    },
    {
        key:1,
        value: 'jiangsu',
        label: 'Jiangsu',
        disabled: true,
        children: [
            {
                key:2,
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        key:3,
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];
function onChange(value) {
    console.log(value);
}
class PageCascader extends Component {
    render() {
        return (
            <div>
                <div className={"titleColor fSize24"}>Cascader级联选择</div>
                <div className="fSize14 bodyColor">
                    <p>级联选择框。</p>
                </div>
                <section>
                    <div>省市区级联</div>
                    <Cascader options={options} onChange={onChange} placeholder="111111" />
                </section>
                <br/><br/><br/>
                <section>
                    <div>默认值通过数组的方式指定。</div>
                    <Cascader defaultValue={['zhejiang', 'hangzhou', 'xihu']} options={options} onChange={onChange} placeholder="Please select" />
                </section>
                <br/><br/><br/>
                <section>
                    <div>切换按钮和结果分开。</div>

                    <CitySwitcher/>

                </section>
                <br/><br/><br/>
                <section>
                    <div>通过移入展开下级菜单，点击完成选择。</div>
                    <Cascader  expandTrigger="hover" options={options} onChange={onChange} placeholder="Please select" />
                </section>
                <br/><br/><br/>
                <section>
                    <div>通过指定 options 里的 disabled 字段</div>
                    <Cascader  expandTrigger="hover" options={options} onChange={onChange} placeholder="Please select" />
                </section>
                <br/><br/><br/>
                <section>
                    <div>不同大小的级联选择器。</div>
                    <Cascader size="large" options={options} onChange={onChange} placeholder="Please select" changeOnSelect />
                    <br/><br/><br/>
                    <Cascader options={options} onChange={onChange} placeholder="Please select" changeOnSelect />
                    <br/><br/><br/>
                    <Cascader size="sm" options={options} onChange={onChange} placeholder="Please select" changeOnSelect />
                </section>
            </div>
        );
    }
}

export default PageCascader;