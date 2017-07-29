import * as types from './actionTypes';
import {loadPerson} from './personActions';
import {loadFacility} from './facilityActions';
import {loadExposure} from './exposureActions';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function saveSucess(person) {
    return { type: types.SAVE_SUCCESS, person};
}

export function save(input) {
    return function(dispatch, getState) {
        return Promise.all([
            dispatch(loadPerson(input)),
            dispatch(loadFacility(getState().person.val1)),
            dispatch(loadExposure(getState().person.val2))
            ]).then(() => {
                dispatch(saveSucess());
            }).catch(error => {
                throw(error);
            });
    };
}