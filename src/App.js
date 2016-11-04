import React from 'react';
import Template from './template/Template'
import StationCard from './components/StationCard'

import logo from './logo.jpg'

import dummy from './dummydata/favourites';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            stations: dummy.data
        };
    }

    onStationClick(station) {
        fetch(`/radio/f/${station.id}`)
            .then(r => r.json())
            .then(r => console.log(r))
            .catch(e => console.error(e))
    }

    render() {
        let stations = this.state.stations.map(station => (
            <StationCard station={station} onClick={this.onStationClick} />
        ));

        return (
            <Template avatar={logo} stations={stations} />
        );
    }
}

export default App;
