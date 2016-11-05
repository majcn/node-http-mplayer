import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

import App from './App';

import 'whatwg-fetch';

const defaultStationGroup = 'f';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/">
            <IndexRedirect to={defaultStationGroup} />
            <Route path="/:group" component={App} />
        </Route>
    </Router>
    ), document.getElementById('root')
);
