// import {configureStore} from '@reduxjs/toolkit';
import {createStore} from 'redux';
import { Reducer, initialState } from './reducer';

export const ConfigStore = () => {
    const store = new createStore(
        Reducer,
        initialState
    );

    return store;
}