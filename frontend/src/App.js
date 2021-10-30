// import './App.css';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SigninScreen from './screens/SigninScreen';
import LicenseScreen from './screens/LicenseScreen'
import { signout } from './actions/userActions';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import PrivateRoute from './components/PrivateRoute';
import FileScreen from './screens/FileScreen';
import UserScreen from './screens/UserScreen';
function App() {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const dispatch = useDispatch();
    const signoutHandler = () => {
        dispatch(signout());
    }

    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="ms-row">
                    <div>
                        <Link className="brand" to="/license">Metastock</Link>
                    </div>
                    <div>{
                        userInfo ? (
                            <>
                                {userInfo.isAdmin? (<Link to="/user">Users</Link>) : null}
                                <Link to="/upload">Upload</Link>
                                <div className="dropdown">
                                    <Link to='/#'>{userInfo.name} <i className="fa fa-caret-down" /></Link>
                                    <ul className="dropdown-content">
                                        <li>
                                            <Link to="#signout" onClick={signoutHandler}>Sign Out</Link>
                                        </li>
                                        <li>
                                            <Link to="/profile">User Profile</Link>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        ) : (
                            <Link to='/signin'>Sign In</Link>
                        )}
                    </div>
                </header>
                <main>
                    <PrivateRoute path="/license" component={LicenseScreen} exat></PrivateRoute>
                    <PrivateRoute path="/upload" component={FileScreen} exat></PrivateRoute>
                    <PrivateRoute path="/user" component={UserScreen} exat></PrivateRoute>
                    <Route path="/signin" component={SigninScreen} exat></Route>
                    <Route path="/register" component={RegisterScreen} exat></Route>
                    <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>
                    <Route exact path="/">
                        <Redirect to="/license" />
                    </Route>
                </main>
                <footer className="ms-row center">
                    All right reserved
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;