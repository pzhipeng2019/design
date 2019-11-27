import React, {Component} from 'react';


class Content extends Component {
    render() {
        return (
            <main className="xg-layout-content" style={{background:"#f0f2f5",padding:"20px"}}>
                <section style={{background:"#fff"}}>

                Content
                <div className="grid-demo">
                    <div className="xg-row demo-row">
                        <div className="xg-col-24 demo-col demo-col-1">
                            100%
                        </div>
                    </div>
                    <div className="xg-row demo-row">
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
                    </div>
                    <div className="xg-row demo-row">
                        <div className="xg-col-8 demo-col demo-col-4">
                            33.33%
                        </div>
                        <div className="xg-col-8 demo-col demo-col-5">
                            33.33%
                        </div>
                        <div className="xg-col-8 demo-col demo-col-4">
                            33.33%
                        </div>
                    </div>
                    <div className="xg-row demo-row">
                        <div className="xg-col-12 demo-col demo-col-1">
                            50%
                        </div>
                        <div className="xg-col-12 demo-col demo-col-3">
                            50%
                        </div>
                    </div>
                    <div className="xg-row demo-row">
                        <div className="xg-col-16 demo-col demo-col-4">
                            66.66%
                        </div>
                        <div className="xg-col-8 demo-col demo-col-5">
                            33.33%
                        </div>
                    </div>

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
                </section>
            </main>
        );
    }
}

export default Content;