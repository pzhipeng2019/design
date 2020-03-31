import React, {Component} from 'react';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Sider from "./Sider";


class Layout extends Component {
    render() {
        return (
            <section className="xg-layout">
                <Header/>
                <section className="xg-layout xg-layout-has-sider">
                    <Sider/>
                    <Content/>
                </section>
                <Footer/>
            </section>
        );
    }
}

export default Layout;