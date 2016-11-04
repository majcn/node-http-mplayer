import React from 'react';
import avatar from './images/avatar.jpg';
import './assets/css/main.css';

class Template extends React.Component {
    render() {
        return (
            <div id="wrapper">

              <header id="header">
                <span className="avatar"><img src={avatar} alt="" /></span>
                <h1>Kaj naj vam pa <strong>Malinca</strong> danes predvaja?</h1>
              </header>

              <section id="main">
                <section className="thumbnails">
                    {
                        [1,1,1,1,1].map(station => (
                            <div>
                              <a href="images/fulls/01.jpg">
                                <img src="images/thumbs/01.jpg" alt="" />
                                <h3>Lorem ipsum dolor sit amet</h3>
                              </a>
                            </div>
                        ))
                    }
                </section>
              </section>
            </div>
        );
    }
}

export default Template;
