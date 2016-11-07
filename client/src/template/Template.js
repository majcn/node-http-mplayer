import React from 'react';
// import './assets/css/main.css';
import './assets/css/mdl.css'

import background from './images/bg.jpg'

import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

class Template extends React.Component {
    render() {
        return (
                <Layout style={{background: `url(${background}) top center / cover`}}>
                    <Header transparent title="Title" style={{color: 'white'}}>
                        <Navigation>
                            <a href="">Link</a>
                            <a href="">Link</a>
                            <a href="">Link</a>
                            <a href="">Link</a>
                        </Navigation>
                    </Header>
                    <Drawer title="Title">
                        <Navigation>
                            <a href="">Link</a>
                            <a href="">Link</a>
                            <a href="">Link</a>
                            <a href="">Link</a>
                        </Navigation>
                    </Drawer>
                    <Content style={{color: 'white'}}>
                               <div id="header">
                                 <span className="avatar"><img src={this.props.avatar} alt="" /></span>
                                 <h1> Kaj naj vam pa <strong>Malinca</strong> danes predvaja?</h1>
                               </div>
                    </Content>
                </Layout>
        );

        // return (
        //     <div id="wrapper">
        //
        //       <header id="header">
        //         <span className="avatar"><img src={this.props.avatar} alt="" /></span>
        //         <h1>Kaj naj vam pa <strong>Malinca</strong> danes predvaja?</h1>
        //       </header>
        //
        //       <section id="main">
        //         <section className="thumbnails">
        //             { this.props.stations }
        //         </section>
        //       </section>
        //     </div>
        // );
    }
}

export default Template;
