import {LICENSE_DELETE_FAIL, LICENSE_DELETE_REQUEST, LICENSE_DELETE_SUCCESS, LICENSE_INSERT_FAIL, LICENSE_INSERT_REQUEST, LICENSE_INSERT_SUCCESS, LICENSE_LIST_FAIL, LICENSE_LIST_REQUEST, LICENSE_LIST_SUCCESS, LICENSE_UPDATE_FAIL, LICENSE_UPDATE_REQUEST, LICENSE_UPDATE_SUCCESS} from '../constants/licenseConstants'

export const licenseListReducer = (state = {loading: true, licenses: []}, action) => {
    switch(action.type){
        case LICENSE_LIST_REQUEST:
            return {loading: true};
        case LICENSE_LIST_SUCCESS:
            return {loading: false, licenses: action.payload};
        case LICENSE_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}

export const licenseUpdateReducer = (state = {updated: false}, action) => {
    switch(action.type){
        case LICENSE_UPDATE_REQUEST:
            return {updated: false};
        case LICENSE_UPDATE_SUCCESS:
            return {updated: true};
        case LICENSE_UPDATE_FAIL:
            return {updated: true, error: action.payload};
        default:
            return state;
    }
}

export const licenseInsertReducer = (state = {inserted: false}, action) => {
    switch(action.type){
        case LICENSE_INSERT_REQUEST:
            return {inserted: false};
        case LICENSE_INSERT_SUCCESS:
            return {inserted: true};
        case LICENSE_INSERT_FAIL:
            return {inserted: true, error: action.payload};
        default:
            return state;
    }
}

export const licenseDeleteReducer = (state = {deleted: true}, action) => {
    switch(action.type){
        case LICENSE_DELETE_REQUEST:
            return {deleted: false};
        case LICENSE_DELETE_SUCCESS:
            return {deleted: true};
        case LICENSE_DELETE_FAIL:
            return {deleted: true, error: action.payload};
        default:
            return state;
    }
}