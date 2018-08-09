import { connect } from 'react-redux';
import { optionSelected } from '../actions';
import SelectionList from '../components/SelectionList'

const getOptionsFromData = (data) => {
    if (data.payload) {
        return data.payload
    } else {
        return [];
    }
}

const mapStateToProps = state => {
    return {
        options: getOptionsFromData(state.data),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOptionSelected: id => {
            dispatch(showSelectedData(id));
        }
    }
}

const DropdownList = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectionList);

export default DropdownList;