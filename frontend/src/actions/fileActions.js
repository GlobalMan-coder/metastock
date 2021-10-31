import {
    FILE_DELETE_FAIL
    , FILE_DELETE_REQUEST
    , FILE_DELETE_SUCCESS
    , FILE_GET_REQUEST
    , FILE_GET_SUCCESS
    , FILE_GET_FAIL
    , FILE_LIST_FAIL
    , FILE_LIST_REQUEST
    , FILE_LIST_SUCCESS
    , FILE_UPLOAD_FAIL
    , FILE_UPLOAD_REQUEST
    , FILE_UPLOAD_SUCCESS
} from '../constants/fileConstants';
import { axiosInstance } from '../Utility';

export const listFile = () => async (dispatch, getState) => {
    dispatch({
        type: FILE_LIST_REQUEST
    });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        const { data } = await axiosInstance.get("file", {
            headers: { Authorization: `Bearer ${userInfo?.token}` },
        });
        dispatch({ type: FILE_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: FILE_LIST_FAIL, payload: error.message });
    }
}

export const fileUpload = (data) => async (dispatch, getState) => {
    dispatch({ type: FILE_UPLOAD_REQUEST });
    const { userSignin: { userInfo } } = getState();
    try {
        const res = await axiosInstance.post("file/upload", data, {
            headers: {
                Authorization: `Bearer ${userInfo?.token}`,
                'Content-Type': 'multipart/form-data'
            }
        });
        dispatch({ type: FILE_UPLOAD_SUCCESS, payload: res })
    } catch (err) {
        dispatch({ type: FILE_UPLOAD_FAIL, payload: err.message })
    }
}

export const deleteFile = (id) => async (dispatch, getState) => {
    dispatch({ type: FILE_DELETE_REQUEST });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        const { res } = await axiosInstance.delete(`file/${id}`, {
            headers: { Authorization: `Bearer ${userInfo?.token}` },
        });
        dispatch({ type: FILE_DELETE_SUCCESS, payload: res });
    } catch (error) {
        dispatch({ type: FILE_DELETE_FAIL, payload: error.message })
    }
}

export const getFile = (id) => async(dispatch, getState) => {
    dispatch({type: FILE_GET_REQUEST});
    const {
        userSignin: { userInfo },
    } = getState();
    try{
        await axiosInstance.get(`file/${id}`, {
            headers: { Authorization: `Bearer ${userInfo?.token}`},
        });
        dispatch({type: FILE_GET_SUCCESS})
    }
    catch (err){
        dispatch({type: FILE_GET_FAIL})
    }
}