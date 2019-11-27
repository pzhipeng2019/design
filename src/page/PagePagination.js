import React, {Component} from 'react';

class PagePagination extends Component {
    render() {
        return (
            <div>
                <section className="code-box-demo">
                    <ul className="xg-pagination" unselectable="unselectable">
                        <li title="上一页" className="xg-pagination-disabled xg-pagination-prev" aria-disabled="true"><a
                            className="xg-pagination-item-link"><i aria-label="图标: left"
                                                                    className="anticon anticon-left">
                            <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="left" width="1em"
                                 height="1em" fill="currentColor" aria-hidden="true">
                                <path
                                    d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
                            </svg>
                        </i></a></li>
                        <li title="1" className="xg-pagination-item xg-pagination-item-1 xg-pagination-item-active"
                            tabIndex="0"><a>1</a></li>
                        <li title="2" className="xg-pagination-item xg-pagination-item-2" tabIndex="0"><a>2</a></li>
                        <li title="3" className="xg-pagination-item xg-pagination-item-3" tabIndex="0"><a>3</a></li>
                        <li title="4" className="xg-pagination-item xg-pagination-item-4" tabIndex="0"><a>4</a></li>
                        <li title="5" className="xg-pagination-item xg-pagination-item-5" tabIndex="0"><a>5</a></li>
                        <li title="下一页" className=" xg-pagination-next" aria-disabled="false" tabIndex="0"><a
                            className="xg-pagination-item-link"><i aria-label="图标: right"
                                                                    className="anticon anticon-right">
                            <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="right" width="1em"
                                 height="1em" fill="currentColor" aria-hidden="true">
                                <path
                                    d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
                            </svg>
                        </i></a></li>
                    </ul>
                </section>
            </div>
        );
    }
}

export default PagePagination;