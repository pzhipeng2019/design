import React, {Component} from 'react';
import Row from "../component/Row";
import Col from "../component/Col";

class ContentLayout extends Component {
    render() {
        return (


                    <div className="grid-demo">
                        <Row>
                            <Col className={" demo-col demo-col-1"} span={12}>col-12</Col>
                            <Col className={" demo-col demo-col-2"} span={12}>col-12</Col>
                        </Row>
                        <Row>
                            <div className="xg-col-24 demo-col demo-col-1">
                                100%
                            </div>
                        </Row>
                        <Row>
                            <div className="xg-col-6 demo-col demo-col-2">
                                25%
                            </div>
                            <div className="xg-col-6 demo-col demo-col-3">
                                25%
                            </div>
                            <div className="xg-col-6 demo-col demo-col-2">
                                25%
                            </div>
                            <div className="xg-col-6 demo-col demo-col-3">
                                25%
                            </div>
                        </Row>
                        <Row>
                            <div className="xg-col-8 demo-col demo-col-4">
                                33.33%
                            </div>
                            <div className="xg-col-8 demo-col demo-col-5">
                                33.33%
                            </div>
                            <div className="xg-col-8 demo-col demo-col-4">
                                33.33%
                            </div>
                        </Row>
                        <Row>
                            <div className="xg-col-12 demo-col demo-col-1">
                                50%
                            </div>
                            <div className="xg-col-12 demo-col demo-col-3">
                                50%
                            </div>
                        </Row>
                        <Row>
                            <div className="xg-col-16 demo-col demo-col-4">
                                66.66%
                            </div>
                            <div className="xg-col-8 demo-col demo-col-5">
                                33.33%
                            </div>
                        </Row>
                        <Row gutter={16}>
                            <Col className="" span={6}>
                                <div className="gutter-box">col-6</div>
                            </Col>
                            <Col className="" span={6}>
                                <div className="gutter-box">col-6</div>
                            </Col>
                            <Col className="" span={6}>
                                <div className="gutter-box">col-6</div>
                            </Col>
                            <Col className="" span={6}>
                                <div className="gutter-box">col-6</div>
                            </Col>
                        </Row>
                        <div className="xg-row" style={{marginLeft:-8,marginRight:-8}} >
                            <div className="xg-col xg-col-6 gutter-row" style={{paddingLeft:8,paddingRight:8}}>
                                <div className="gutter-box">col-6</div>
                            </div>
                            <div className="xg-col xg-col-6 gutter-row" style={{paddingLeft:8,paddingRight:8}}>
                                <div className="gutter-box">col-6</div>
                            </div>
                            <div className="xg-col xg-col-6 gutter-row" style={{paddingLeft:8,paddingRight:8}}>
                                <div className="gutter-box">col-6</div>
                            </div>
                            <div className="xg-col xg-col-6 gutter-row" style={{paddingLeft:8,paddingRight:8}}>
                                <div className="gutter-box">col-6</div>
                            </div>
                        </div>
                    </div>

        );
    }
}

export default ContentLayout;