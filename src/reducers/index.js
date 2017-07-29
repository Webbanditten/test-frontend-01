import {combineReducers} from 'redux';
import facility from './facilityReducer';
import exposure from './exposureReducer';
import person from './personReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    facility,
    person,
    exposure,
    ajaxCallsInProgress
});

export default rootReducer;