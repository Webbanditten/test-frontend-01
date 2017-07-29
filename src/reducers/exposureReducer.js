import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function exposureReducer(state = initialState.exposure, action) {
    switch(action.type) {
        case types.LOAD_EXPOSURE_SUCCESS:
            return action.exposure;

        default: 
            return state;
    }
}