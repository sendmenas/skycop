import { connect } from 'react-redux';
import Data from '../components/Data'

const mapStateToProps = (state) => {
    return {
        option: state.selectedOption,
    }
}

const DataTable = connect(
    mapStateToProps,
)(Data);

export default DataTable;