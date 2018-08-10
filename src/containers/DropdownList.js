import { connect } from 'react-redux';
import { showSelectedData } from '../actions';
import SelectionList from '../components/SelectionList'

const getOptionsFromData = options => {
    if (options) {
        return options;
    } else {
        return [];
    }
}

const mapStateToProps = state => {
    return {
        options: getOptionsFromData(state.options),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChange: id => {
            dispatch(showSelectedData(id));
        }
    }
}

const DropdownList = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectionList);

export default DropdownList;