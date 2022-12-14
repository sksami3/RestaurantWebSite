import { DISHES } from '../shared/dishes';
import * as ActionType from './ActionType';

export const Dishes = (state = { isLoading: true, errMess: null, dishes: [] }, action) => {
    switch (action.type) {
        case ActionType.DISHES_LOADING:
            return { ...state, isLoading: true, errMess: null, dishes: [] }

        case ActionType.ADD_DISHES:
            return { ...state, isLoading: false, errMess: null, dishes: action.payload };

        case ActionType.DISHES_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
}