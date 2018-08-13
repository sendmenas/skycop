export const OPTION_SELECTED = 'OPTION_SELECTED';
export const DATA_RECEIVED = 'DATA_RECEIVED';
function dataReceived(json) {
    return {
        type: DATA_RECEIVED,
        data: json.payload,
        receivedAt: Date.now(),
    }
}

export const GET_DATA = 'GET_DATA';
function requestData() {
    return {
        type: GET_DATA,
    }
}

export const showSelectedData = title => ({
    type: OPTION_SELECTED,
    title
})




export function fetchData() {
    return dispatch => {
        dispatch(requestData())
        return fetch(`https://raw.githubusercontent.com/sendmenas/skycop/master/response.json`)
            .then(response => response.json())
            .then(json => dispatch(dataReceived(json)))
    }
}