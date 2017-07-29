import * as types from './actionTypes';
import facilityApi from '../api/mockFacilityApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadFacilitySuccess(facility) {
    return { type: types.LOAD_FACILITY_SUCCESS, facility};
}

export function loadFacility(val1) {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return facilityApi.get(val1).then(facility => {
            dispatch(loadFacilitySuccess(facility));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}