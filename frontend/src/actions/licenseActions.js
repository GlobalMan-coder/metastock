import {
    LICENSE_DELETE_FAIL
    , LICENSE_DELETE_REQUEST
    , LICENSE_DELETE_SUCCESS
    , LICENSE_LIST_FAIL
    , LICENSE_LIST_REQUEST
    , LICENSE_LIST_SUCCESS
    , LICENSE_UPDATE_FAIL
    , LICENSE_UPDATE_REQUEST
    , LICENSE_UPDATE_SUCCESS
} from '../constants/licenseConstants';
import axios from 'axios';
const axiosInstance = axios.create({ baseURL: process.env.API_URL });

export const listLicense = () => async (dispatch, getState) => {
    dispatch({
        type: LICENSE_LIST_REQUEST
    });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        const { data } = await axiosInstance.get("license", {
            headers: { Authorization: `Bearer ${userInfo?.token}` },
        });
        dispatch({ type: LICENSE_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: LICENSE_LIST_FAIL, payload: error.message });
    }
}

export const updateLicense = (data) => async (dispatch, getState) => {
    dispatch({ type: LICENSE_UPDATE_REQUEST });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        const { res } = (data._id) ?
            await axiosInstance.put(`license/${data._id}`, data, {
                headers: { Authorization: `Bearer ${userInfo?.token}` },
            }) :
            await axiosInstance.post("license", data, {
                headers: { Authorization: `Bearer ${userInfo?.token}` },
            });

        dispatch({ type: LICENSE_UPDATE_SUCCESS, payload: res })
    } catch (error) {
        dispatch({ type: LICENSE_UPDATE_FAIL, payload: error.message });
    }
}

export const deleteLicense = (data) => async (dispatch, getState) => {
    dispatch({ type: LICENSE_DELETE_REQUEST });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        const { res } = await axiosInstance.delete(`license/${data.id}`, {
            headers: { Authorization: `Bearer ${userInfo?.token}` },
        });
        dispatch({ type: LICENSE_DELETE_SUCCESS, payload: res });
    } catch (error) {
        dispatch({ type: LICENSE_DELETE_FAIL, payload: error.message })
    }
}