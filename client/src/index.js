import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import App from './App';

import 'whatwg-fetch';

const defaultStationGroup = 'f';

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route path='/:group' component={App} />
            <Redirect path='/' to={defaultStationGroup} />
        </div>
    </BrowserRouter>
    ), document.getElementById('root')
);
