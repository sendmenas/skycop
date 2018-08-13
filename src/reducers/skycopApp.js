import { combineReducers } from 'redux';
import { GET_DATA, OPTION_SELECTED, DATA_RECEIVED } from '../actions';

function options(state = {
    isFetching: false,
    items: [],
}, action) {
    switch (action.type) {
        case GET_DATA:
            return Object.assign({}, state, { isFetching:true });
        //     fetch('https://raw.githubusercontent.com/sendmenas/skycop/master/response.json').then(res => res.json()).then(
        //         (result) => {
        //             console.log(result);
        //             return result.data.payload;
        //         },
        //         (error) => {
        //             console.log(error);
        //         }
        //     )
        //     break;
        case DATA_RECEIVED:
            return Object.assign({}, state, {
                isFetching:false,
                items: action.data,
            });
        default:
            return state;
    }
}

function selectedOption(state = {}, action) {
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