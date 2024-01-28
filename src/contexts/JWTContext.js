import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer } from 'react';
import { useDispatch } from 'react-redux';
// third-party
import jwtDecode from 'jwt-decode';

// reducer - state management
import { LOGIN, LOGOUT } from 'store/actionType';
import accountReducer from 'store/accountReducer';

// project imports
import Loader from 'ui-component/Loader';
import axios from 'utils/axios';

import { globalAction } from 'store';
// constant
const initialState = {
    isLoggedIn: false,
    isInitialized: false,
    user: null
};

const setSession = (serviceToken) => {
    if (serviceToken) {
        localStorage.setItem('serviceToken', serviceToken);
        axios.defaults.headers.common.Authorization = `Bearer ${serviceToken}`;
    } else {
        localStorage.removeItem('serviceToken');
        delete axios.defaults.headers.common.Authorization;
    }
};

// ==============================|| JWT CONTEXT & PROVIDER ||============================== //
const JWTContext = createContext(null);

export const JWTProvider = ({ children }) => {
    const [state, dispatch] = useReducer(accountReducer, initialState);
    const storeDispatch = useDispatch();
    useEffect(() => {
        const init = async () => {
            try {
                const serviceToken = window.localStorage.getItem('serviceToken');
                if (serviceToken) {
                    setSession(serviceToken);
                    const response = await axios.get('/api/users/me');
                    if (response.data.status === 'success') {
                        dispatch({
                            type: LOGIN,
                            payload: {
                                isLoggedIn: true,
                                user: response.data.user
                            }
                        });
                    } else {
                        dispatch({
                            type: LOGOUT
                        });
                    }
                } else {
                    dispatch({
                        type: LOGOUT
                    });
                }
            } catch (err) {
                console.error(err);
                dispatch({
                    type: LOGOUT
                });
            }
        };

        init();
    }, []);

    const login = async (email, password) => {
        try {
            let response = await axios.post('/api/users/login', { email, password });
            response = response.data;
            if (response?.message) {
                storeDispatch(globalAction('SHOW_TOASTER', { status: response.status, message: response.message }));
            }

            if (response.status === 'success') {
                setSession(response.accessToken);
                dispatch({
                    type: LOGIN,
                    payload: {
                        isLoggedIn: true,
                        user: response.user
                    }
                });
            }
        } catch (error) {
            storeDispatch(globalAction('SHOW_TOASTER', { status: 'error', message: 'Something wents wrong! Please try again!' }));
        }
    };

    const logout = () => {
        setSession(null);
        dispatch({ type: LOGOUT });
    };

    const resetPassword = async (email) => {
        await axios.post('/api/forgot_password', email);
    };

    const updateProfile = () => {};

    if (state.isInitialized !== undefined && !state.isInitialized) {
        return <Loader />;
    }

    return <JWTContext.Provider value={{ ...state, login, logout, resetPassword, updateProfile }}>{children}</JWTContext.Provider>;
};

JWTProvider.propTypes = {
    children: PropTypes.node
};

export default JWTContext;
