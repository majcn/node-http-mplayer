import React, { Component } from 'react';
import avatar from './images/avatar.jpg'
import './assets/css/font-awesome.min.css'
import './assets/css/main.css';

class Template extends Component {
    render() {
        return (
            <div id="wrapper">

              <header id="header">
                <span className="avatar"><img src={avatar} alt="" /></span>
                <h1>Kaj naj vam pa <strong>Malinca</strong> danes predvaja?</h1>
              </header>

              <section id="main">

                <section className="thumbnails">
                  <div>
                    <a href="images/fulls/01.jpg">
                      <img src="images/thumbs/01.jpg" alt="" />
                      <h3>Lorem ipsum dolor sit amet</h3>
                    </a>
                    <a href="images/fulls/02.jpg">
                      <img src="images/thumbs/02.jpg" alt="" />
                      <h3>Lorem ipsum dolor sit amet</h3>
                    </a>
                  </div>
                  <div>
                    <a href="images/fulls/03.jpg">
                      <img src="images/thumbs/03.jpg" alt="" />
                      <h3>Lorem ipsum dolor sit amet</h3>
                    </a>
                    <a href="images/fulls/04.jpg">
                      <img src="images/thumbs/04.jpg" alt="" />
                      <h3>Lorem ipsum dolor sit amet</h3>
                    </a>
                    <a href="images/fulls/05.jpg">
                      <img src="images/thumbs/05.jpg" alt="" />
                      <h3>Lorem ipsum dolor sit amet</h3>
                    </a>
                  </div>
                  <div>
                    <a href="images/fulls/06.jpg">
                      <img src="images/thumbs/06.jpg" alt="" />
                      <h3>Lorem ipsum dolor sit amet</h3>
                    </a>
                    <a href="images/fulls/07.jpg">
                      <img src="images/thumbs/07.jpg" alt="" />
                      <h3>Lorem ipsum dolor sit amet</h3>
                    </a>
                  </div>
                </section>

              </section>

            </div>
        );
    }
}

export default Template;
