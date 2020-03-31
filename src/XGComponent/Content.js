import React, {Component} from 'react';



import Routers from "./router";

class Content extends Component {

    render() {
        return (

            <main className="xg-layout-content" style={{background:"#fff",padding:"20px"}}>
                <section style={{background:"#fff"}}>
                    <Routers />

                </section>
            </main>
        );
    }
}

export default Content;