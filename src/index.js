import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store'
import App from './containers/App';


import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/email-signature.css';


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
