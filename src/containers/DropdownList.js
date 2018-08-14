import { connect } from 'react-redux';
import { showSelectedData } from '../actions';
import SelectionList from '../components/SelectionList'

const mapStateToProps = state => {
    return {
        options: state.options.items,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (evt) => {dispatch(showSelectedData(evt.target.value))},
    }
}

const DropdownList = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectionList);

export default DropdownList;