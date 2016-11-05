import React from 'react';
import Template from './template/Template'
import StationCard from './components/StationCard'

import logo from './logo.png'

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            stations: []
        }

        let group = props.params.group;
        this.updateStations(group);
    }

    componentWillReceiveProps(nextProps) {
        let group = nextProps.params.group;
        if (group === this.props.params.group) {
            return;
        }

        this.updateStations(group);
    }

    updateStations(group) {
        fetch(`/stations/${group}`)
            .then(response => response.json())
            .then(stations => stations.map(station => Object.assign(station, { group })))
            .then(stations => this.setState({ stations }))
    }

    onStationClick(station) {
        fetch(`/radio/${station.group}/${station.id}`)
    }

    render() {
        let stations = this.state.stations.map(station => (
            <StationCard key={station.id} station={station} onClick={this.onStationClick} />
        ));

        return (
            <Template avatar={logo} stations={stations} />
        );
    }
}

export default App;
