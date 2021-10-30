import axios from 'axios';
import {
    USER_SIGNIN_FAIL
    , USER_SIGIN_REQUEST
    , USER_SIGNIN_SUCCESS
    , USER_SIGNOUT
    , USER_REGISTER_REQUEST
    , USER_REGISTER_SUCCESS
    , USER_REGISTER_FAIL
    , USER_DETAIL_REQUEST
    , USER_DETAIL_FAIL
    , USER_DETAIL_SUCCESS
    , USER_UPDATE_PROFILE_REQUEST
    , USER_UPDATE_PROFILE_FAIL
    , USER_UPDATE_PROFILE_SUCCESS,
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    USER_UPDATE_FAIL,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_DELETE_FAIL
} from '../constants/userConstants.js';

export const register = (name, email, password) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { email, password } });
    try {
        const { data } = await axios.post('/api/user/register', { name, email, password });
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message : error.message
        })
    }
}

export const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGIN_REQUEST, payload: { email, password } });

    try {
        const { data } = await axios.post('/api/user/signin', { email, password });
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message : error.message
        })
    }
}

export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({ type: USER_SIGNOUT });
    document.location.href = "/signin";
}

export const detailsUser = (userId) => async (dispatch, getState) => {
    dispatch({ type: USER_DETAIL_REQUEST, payload: userId });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        const { data } = await axios.get(`/api/user/${userId}`, {
            headers: { Authorization: `Bearer ${userInfo?.token}` },
        });
        dispatch({ type: USER_DETAIL_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: USER_DETAIL_FAIL, payload: message });
    }
};

export const updateUserProfile = (user) => (dispatch, getState) => {
    dispatch({ type: USER_UPDATE_PROFILE_REQUEST, payload: user });
    const { userSignin: { userInfo } } = getState();
    try {
        const { data } = axios.put(`/api/user/profile`, user, {
            headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data });
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        const message = error.response && error.response.data.message
            ? error.response.data.message : error.message
        dispatch({ type: USER_UPDATE_PROFILE_FAIL, payload: message })
    }
}

export const listUser = () => async (dispatch, getState) => {
    dispatch({ type: USER_LIST_REQUEST })
    const { userSignin: { userInfo } } = getState();
    try {
        const { data } = await axios.get('/api/user', {
            headers: { Authorization: `Bearer ${userInfo?.token}` },
        });
        dispatch({ type: USER_LIST_SUCCESS, payload: data });
    } catch (err) {
        dispatch({ type: USER_LIST_FAIL, payload: err.message });
    }
}

export const updateUser = (data) => async (dispatch, getState) => {
    dispatch({ type: USER_UPDATE_REQUEST });
    const { userSignin: { userInfo } } = getState();
    try {
        const { res } = await axios.put('/api/user/' + data._id, data, {
            headers: { Authorization: `Bearer ${userInfo?.token}` }
        })
        dispatch({ type: USER_UPDATE_SUCCESS, payload: res });
    } catch (err) {
        dispatch({ type: USER_UPDATE_FAIL, payload: err.messageg });
    }
}

export const deleteUser = (id) => async (dispatch, getState) => {
    dispatch({ type: USER_DELETE_REQUEST });
    const { userSignin: { userInfo } } = getState();
    try {
        const { res } = await axios.delete('/api/user/' + id, {
            headers: { Authorization: `Bearer ${userInfo?.token}` },
        })
        dispatch({ type: USER_DELETE_SUCCESS, payload: res });
    } catch (err) {
        dispatch({ type: USER_DELETE_FAIL, payload: err.message });
    }
}
