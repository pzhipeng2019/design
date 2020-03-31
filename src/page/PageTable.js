import React, {Component} from 'react';
import Table from "../XGComponent/Table";
import Tbody from "../XGComponent/Tbody";
import Tag from "../XGComponent/Tag";
import Divider from "../XGComponent/Divider";
import Dropdown from "../XGComponent/Dropdown";
import Td from "../XGComponent/Td";
const dataSource = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <span>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </span>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record,onclick) => (
            <span>
                <div className="dropdownGroup">
                            <Dropdown ButtonData={{size:"sm",title:"更多",type:"xg-btn-link"}} Icon={"icon-down"}>
                                <div className="xg-dropdown xg-dropdown-placement-bottomLeft ">
                                    <ul className="xg-dropdown-menu xg-dropdown-menu-light xg-dropdown-menu-root " role="menu" tabIndex="0" >
                                        <li className="xg-dropdown-menu-item" role="menuitem" key={1}>
                                            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                                                1st menu item
                                            </a>
                                        </li>
                                        <li className="xg-dropdown-menu-item" role="menuitem"key={2}>
                                            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                                                2nd menu item
                                            </a>
                                        </li>
                                        <li className="xg-dropdown-menu-item" role="menuitem" key={3}>
                                            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                                                3rd menu item
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Dropdown>
                        </div>
                <Divider type="vertical" />
                <a onClick={onclick}>Delete</a>

            </span>
        ),
    },
];
const columnsFilters = [
    {
        title: 'Name',
        dataIndex: 'name',
        filters: [
            {
                text: 'Joe',
                value: 'Joe',
            },
            {
                text: 'Jim',
                value: 'Jim',
            },
            {
                text: 'Submenu',
                value: 'Submenu',
                children: [
                    {
                        text: 'Green',
                        value: 'Green',
                    },
                    {
                        text: 'Black',
                        value: 'Black',
                    },
                ],
            },
        ],
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend'],
    },
    {
        title: 'Age',
        dataIndex: 'age',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age-b.age,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        filters: [
            {
                text: 'London',
                value: 'London',
            },
            {
                text: 'New York',
                value: 'New York',
            },
        ],
        filterMultiple: false,
        onFilter: (value, record) => record.address.indexOf(value) === 0,
        sorter: (a, b) => a.address.length - b.address.length,
        sortDirections: ['descend', 'ascend'],
    },
];

const dataFilters = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
    },
];
class PageTable extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }



    render() {
        return (
            <div>
                <div className={"titleColor fSize24"}>Table  表格</div>
                <div className="fSize14 bodyColor">
                    <p>通用列表，当有大量结构化的数据需要展现时使用；当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时使用。</p>
                </div>
                <section>
                    <p>Basic Table （16px）  通用表格</p>
                    <div>
                        <Table
                            columns={columns}
                            dataSource={dataSource}
                            onRow={ this.selectRow}/>
                    </div>
                </section>
                <section>
                    <p>第一列是联动的选择框表格</p>
                    <div>
                        <Table rowSelection={true} dataSource={dataSource} columns={columns}/>
                    </div>
                </section>
                <section>
                    <p>筛选和排序</p>
                    <div>
                        <Table rowSelection={true} dataSource={dataFilters} columns={columnsFilters}/>
                    </div>
                </section>


            </div>
        );
    }
}

export default PageTable;