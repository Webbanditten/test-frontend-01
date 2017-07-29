import * as types from './actionTypes';
import personApi from '../api/mockPersonApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadPersonSuccess(person) {
    return { type: types.LOAD_PERSON_SUCCESS, person};
}

export function loadPerson(input) {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return personApi.get(input).then(person => {
            dispatch(loadPersonSuccess(person));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}