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
                    { this.props.stations }
                </section>
              </section>
            </div>
        );
    }
}

export default Template;
