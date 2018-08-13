import { combineReducers } from 'redux';
import { GET_DATA, OPTION_SELECTED, DATA_RECEIVED } from '../actions';

function options(state = {
        selectedOption: {
                id:"Not selected",
                title:""
        },
        isFetching: false,
        items: [],
    }, action) {
    switch (action.type) {
        case GET_DATA:
            return Object.assign({}, state, { isFetching:true });
        case DATA_RECEIVED:
            return Object.assign({}, state, {
                isFetching:false,
                items: action.data,
            });
        case OPTION_SELECTED:
            return Object.assign({}, state, { selectedOption: state.items.find(function(option) {
                if (action.title === option.title) {
                    return option;
                }
            })});
        default:
            return state;
    }
}

const skycopApp = combineReducers({
    options,
});

export default skycopApp;