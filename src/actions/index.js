export const OPTION_SELECTED = 'OPTION_SELECTED';
export const DATA_RECEIVED = 'DATA_RECEIVED';
export const GET_DATA = 'GET_DATA';

export const getData = () => ({
    type: GET_DATA,
});

export const showSelectedData = selectedOption => ({
    type: OPTION_SELECTED,
    option: selectedOption,
})

export const onDataReceived = jsonData => ({
    type: DATA_RECEIVED,
    data: jsonData,    
});