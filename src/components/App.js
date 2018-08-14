import React from 'react';
import DropdownList from '../containers/DropdownList';
import DataRequestButton from '../containers/DataRequestButton';
import DataTable from '../containers/DataTable';
import './App.css';

const App = () => (
	<div className='app'>
        <DropdownList></DropdownList>
        <DataRequestButton></DataRequestButton>
        <DataTable></DataTable>
    </div>
)

export default App;
