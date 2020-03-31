import React, {Component} from 'react';

import Select from "../XGComponent/Select";
import Option from "../XGComponent/Option";
import OptGroup from "../XGComponent/OptGroup";
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
const children = [];
for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
/*城市联动*/
const provinceData = ['Guangdong', 'Jiangsu'];
const cityData = {
    Guangdong: ['Guangzhou', 'Shenzhen', 'Dongguan'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

const countyData={
    Guangzhou: ['Tianhe', 'Baiyun', 'Yuexiu'],
    Shenzhen:['Baoan','Bantian','Longhua'],
    Dongguan:['Dalang','Pingshan','Bolou'],
    Nanjing:['Nanjing1','Nanjing2','Nanjing3'],
    Suzhou:["Suzhou1",'Suzhou2','Suzhou3'],
    Zhenjiang:['Zhenjiang1','Zhenjiang2','Zhenjiang3']
}
class PageSelect extends Component {
    constructor(props) {
        super(props);
        this.state={
            cities: cityData[provinceData[0]],//城市
            secondCity: cityData[provinceData[0]][0],//默认值
            counstys:countyData[cityData[provinceData[0]][0]],//区 乡 镇
            thirdCity: countyData[cityData[provinceData[0]][0]][0],//默认值
        }
    }
    /*城市联动 start*/
    handleProvinceChange = value => {
      //  console.log(cityData[value])
      //  console.log(countyData[cityData[value][0]])
        this.setState({
            cities: cityData[value],//城市
            secondCity: cityData[value][0],
            counstys:countyData[cityData[value][0]],//区 乡 镇
            thirdCity:countyData[cityData[value][0]][0]
        });
    };

    onSecondCityChange = value => {
        //console.log(countyData[value][0])
//console.log(countyData[cityData[value]])
        this.setState({
            secondCity: value,
            counstys:countyData[value],//区 乡 镇
            thirdCity:countyData[value][0],
        });
    };
    onThirdCityChange = value => {
        this.setState({
            thirdCity: value,
        });
    };
    /*城市联动 end*/
    render() {
     //   console.log(countyData["Shenzhen"])
console.log(this.state.cities)
        return (
            <div>
                <div className={"titleColor fSize24"}>Select选择器</div>
                <div className="fSize14 bodyColor">
                    <p>下拉选择器。</p>
                </div>
                <br/><br/><br/>
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
                <br/><br/><br/>
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
                            <Option value="1">Jack</Option>
                            <Option value="2">Jace</Option>
                            <Option value="3">Lucy</Option>
                            <Option value="4">Tom</Option>
                        </Select>
                    </div>
                </section>
                <br/><br/><br/>
                <section>
                    <div>多选，从已有条目中选择。</div>
                    <div>
                        <Select
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="Please select"
                            defaultValue={['a10', 'c12']}
                            onChange={handleChange}
                        >
                            {children}
                        </Select>
                    </div>
                </section>
                <br/><br/><br/>
                <section>
                    <div>三种大小的选择框，当 size 分别为 large 和 small 时，输入框高度为 40px 和 24px ，默认高度为 32px。</div>
                    <div>
                        <Select
                            size="small"
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
                            <Option value="jack">Jace</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                        <br/><br/><br/>
                        <Select
                            size="large"
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="Please select"
                            defaultValue={['a10', 'c12']}
                            onChange={handleChange}
                        >
                            {children}
                        </Select>
                    </div>
                </section>
                <br/><br/><br/>
                <section>
                    <div>tags select，随意输入的内容（scroll the menu）</div>
                    <div>
                        <Select
                            showSearch
                            mode="tags"
                            style={{ width: '100%' }}
                            placeholder="Please select"
                            defaultValue={['a10', 'c12']}
                            onChange={handleChange}
                            optionFilterProp="children"
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {children}
                        </Select>
                    </div>
                </section>
                <br/><br/><br/>
                <section>
                    <div>用 OptGroup 进行选项分组。</div>
                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                        <OptGroup lable="Manager">
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                        </OptGroup>
                        <OptGroup lable="Engineer">
                            <Option value="Yiminghe">yiminghe</Option>
                        </OptGroup>
                    </Select>
                </section>
                <br/><br/><br/>
                <section>
                    <div>省市联动是典型的例子。</div>
                    <Select
                        defaultValue={provinceData[0]}
                        style={{ width: 120 }}
                        onChange={this.handleProvinceChange}
                    >
                        {provinceData.map(province => (
                            <Option key={province} value={province}>{province}</Option>
                        ))}
                    </Select>
                    <Select
                        style={{ width: 120 }}
                        defaultValue={this.state.secondCity}
                        onChange={this.onSecondCityChange}
                    >
                        {this.state.cities.map(city => (
                            <Option key={city} value={city}>{city}</Option>
                        ))}
                    </Select>
                    <Select
                        style={{ width: 120 }}
                        defaultValue={this.state.thirdCity}
                        onChange={this.onThirdCityChange}
                    >
                        {this.state.counstys.map(county => (
                            <Option key={county} value={county}>{county}</Option>
                        ))}
                    </Select>
                </section>
                <br/><br/><br/>
            </div>
        );
    }
}

export default PageSelect;