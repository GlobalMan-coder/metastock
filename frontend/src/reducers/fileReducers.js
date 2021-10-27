import {
    FILE_DELETE_FAIL
    , FILE_DELETE_REQUEST
    , FILE_DELETE_SUCCESS
    , FILE_LIST_FAIL
    , FILE_LIST_REQUEST
    , FILE_LIST_SUCCESS
    , FILE_UPLOAD_FAIL
    , FILE_UPLOAD_REQUEST
    , FILE_UPLOAD_SUCCESS
} from '../constants/fileConstants'

export const fileListReducer = (state = { loading: true, files: [] }, action) => {
    switch (action.type) {
        case FILE_LIST_REQUEST:
            return { loading: true };
        case FILE_LIST_SUCCESS:
            return { loading: false, files: action.payload };
        case FILE_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const fileUploadReducer = (state = { updated: false }, action) => {
    switch (action.type) {
        case FILE_UPLOAD_REQUEST:
            return { uploaded: false };
        case FILE_UPLOAD_SUCCESS:
            return { uploaded: true };
        case FILE_UPLOAD_FAIL:
            return { uploaded: true, error: action.payload };
        default:
            return state;
    }
}

export const fileDeleteReducer = (state = { deleted: true }, action) => {
    switch (action.type) {
        case FILE_DELETE_REQUEST:
            return { deleted: false };
        case FILE_DELETE_SUCCESS:
            return { deleted: true };
        case FILE_DELETE_FAIL:
            return { deleted: true, error: action.payload };
        default:
            return state;
    }
}