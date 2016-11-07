import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

import 'whatwg-fetch';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import 'material-design-icons/iconfont/material-icons.css' // <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

import App from './App';

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
