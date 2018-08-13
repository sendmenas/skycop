import React from 'react';
import DropdownList from '../containers/DropdownList';
import DataRequestButton from '../containers/DataRequestButton';
import DataTable from '../containers/DataTable';

const App = () => (
	<div>
        <DropdownList></DropdownList>
        <DataRequestButton></DataRequestButton>
        <DataTable></DataTable>
    </div>
)

export default App;
