import { createStore } from 'redux';
import { signatureReducers } from '../reducers/';

let store = createStore(
    signatureReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;