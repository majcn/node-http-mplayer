import React from 'react';
import Template from './template/Template'
import StationCard from './components/StationCard'

import logo from './logo.jpg'

class App extends React.Component {
    render() {
        let stations = [1,1,1,1,1,1,1,1].map(station => (
           <StationCard />
        ));

        return (
            <Template avatar={logo} stations={stations} />
        );
    }
}

export default App;
