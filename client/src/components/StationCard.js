import React from 'react';

class StationCard extends React.Component {
    render() {
        let { station } = this.props;
        let maxImageWidth = 145; // 145 is size of images

        return (
            <div>
                <a onClick={this.props.onClick.bind(null, station)}>
                    <img src={station.img} alt="" style={{maxWidth: maxImageWidth}} />
                    <h3>{station.name}</h3>
                </a>
            </div>
        );
    }
}

export default StationCard;
