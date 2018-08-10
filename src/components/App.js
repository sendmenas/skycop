import React from 'react';
import DropdownList from '../containers/DropdownList';

function requestData() {
    fetch('https://raw.githubusercontent.com/sendmenas/skycop/master/response.json').then(res => res.json()).then(
        (result) => {
            console.log(result);
            dispatch(onDataReceived(result));
        },
        (error) => {
            console.log(error);
        }
    )
}

const App = () => (
	<div>
        <DropdownList></DropdownList>
        <button
            onClick={() => requestData()}
        >GET DATA</button>
    </div>
)

export default App;
