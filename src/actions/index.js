export const OPTION_SELECTED = 'OPTION_SELECTED';
export const DATA_RECEIVED = 'DATA_RECEIVED';

export const showSelectedData = optionId => ({
    type: OPTION_SELECTED,
    id: optionId,
})

export const onDataReceived = jsonData => ({
    type: DATA_RECEIVED,
    data: jsonData,
})