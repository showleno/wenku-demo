import {createStore, combineReducers} from 'redux';
import * as reducer from '../reducers/index';

export default createStore(
    combineReducers(reducer)
);