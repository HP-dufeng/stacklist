import { combineReducers } from 'redux';
import listReducer from './ListReducer';
import selectionReducer from './SelectionReducer';

export default combineReducers({
    items: listReducer,
    selectedId: selectionReducer
});
