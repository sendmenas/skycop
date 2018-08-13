import { connect } from 'react-redux';
import { fetchData } from '../actions';
import GetDataButton from '../components/GetDataButton';

const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch(fetchData()),
    }
}

const DataRequestButton = connect(
    null,
    mapDispatchToProps,
)(GetDataButton);

export default DataRequestButton;