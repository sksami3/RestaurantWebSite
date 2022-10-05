// import {configureStore} from '@reduxjs/toolkit';
import { combineReducers, createStore } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';


export const ConfigStore = () => {
    const store = new createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );

    return store;
}