import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function facilityReducer(state = initialState.facility, action) {
    switch(action.type) {
        case types.LOAD_FACILITY_SUCCESS:
            return action.facility;

        default: 
            return state;
    }
}