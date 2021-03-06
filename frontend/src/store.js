import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { fileDeleteReducer, fileListReducer, fileUploadReducer } from './reducers/fileReducers';
import { licenseDeleteReducer, licenseListReducer, licenseUpdateReducer } from './reducers/licenseReducers'
import { userDeleteReducer, userDetailsReducer, userListReducer, userRegisterReducer, userSigninReducer, userUpdateProfilleReducer, userUpdateReducer } from './reducers/userReducers';
const initialState = {};

const reducer = combineReducers({
    userRegister: userRegisterReducer,
    userSignin: userSigninReducer,
    userDetails: userDetailsReducer,
    licenseList: licenseListReducer,
    licenseUpdate: licenseUpdateReducer,
    licenseDelete: licenseDeleteReducer,
    fileList: fileListReducer,
    fileUpload: fileUploadReducer,
    fileDelete: fileDeleteReducer,
    userUpdateProfile: userUpdateProfilleReducer,
    userList: userListReducer,
    userUpdate: userUpdateReducer,
    userDelete: userDeleteReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;