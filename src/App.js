import React from 'react';
import Template from './template/Template'

import StationCard from './components/StationCard'

class App extends React.Component {
    render() {
        let stations = [1,1,1,1,1,1,1,1].map(station => (
           <StationCard />
        ));

        return (
            <Template stations={stations} />
        );
    }
}

export default App;
