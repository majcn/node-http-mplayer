import React from 'react';
import Template from './template/Template'
import StationCard from './components/StationCard'

import logo from './logo.jpg'

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            prefix: 'f',
            stations: [] // null -> loading
        };
    }

    componentDidMount() {
        fetch(`/stations/${this.state.prefix}`)
            .then(r => r.json())
            .then(stations => this.setState({ stations }))
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
