import { combineReducers } from 'redux';
import { DATA_RECEIVED, OPTION_SELECTED } from '../actions';

function options(state = [], action) {
    switch (action.type) {
        case DATA_RECEIVED:
            if (action.data.payload) {
                return action.data.payload;
            } else {
                return state;
            }
        default:
            return state;
    }
}

function selectedOption(state = {}, action) {
    console.log(action);
    switch(action.type) {
        case OPTION_SELECTED:
            return action;
        default:
            return state;
    }
}

const skycopApp = combineReducers({
    selectedOption,
    options,
});

export default skycopApp;