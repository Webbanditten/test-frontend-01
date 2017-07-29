import * as types from './actionTypes';
import exposureApi from '../api/mockExposureApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadExposureSuccess(exposure) {
    return { type: types.LOAD_EXPOSURE_SUCCESS, exposure};
}

export function loadExposure(val2) {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return exposureApi.get(val2).then(exposure => {
            dispatch(loadExposureSuccess(exposure));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}