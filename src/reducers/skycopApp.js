import { combineReducers } from 'redux';
import { DATA_RECEIVED, OPTION_SELECTED } from '../actions';

function options(state = [], action) {
    switch (action.type) {
        case DATA_RECEIVED:
            if (action.jsonData.payload) {
                return action.jsonData.payload;
            } else {
                return state;
            }
        case OPTION_SELECTED:
            return state.find((option) => {
                return option.id === action.id;
            });
        default:
            return state;
    }
}

const skycopApp = combineReducers({
    options,
});

export default skycopApp;