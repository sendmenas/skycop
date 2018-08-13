import { connect } from 'react-redux';
import { getData } from '../actions';
import GetDataButton from '../components/GetDataButton';

const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch(getData()),
    }
}

const DataRequestButton = connect(
    null,
    mapDispatchToProps,
)(GetDataButton);

export default DataRequestButton;