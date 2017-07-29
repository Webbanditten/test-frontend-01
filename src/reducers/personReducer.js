import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function personReducer(state = initialState.person, action) {
    switch(action.type) {
        case types.LOAD_PERSON_SUCCESS:
            return action.person;

        default: 
            return state;
    }
}