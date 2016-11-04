import React from 'react';

class StationCard extends React.Component {
    render() {
        return (
            <div>
                <a href="images/fulls/01.jpg">
                    <img src={this.props.station.img} alt="" style={{maxWidth: 145}} /> {/* 145 is size of images */}
                    <h3>{this.props.station.name}</h3>
                </a>
            </div>
        );
    }
}

export default StationCard;
