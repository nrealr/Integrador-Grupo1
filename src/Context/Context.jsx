import React, { createContext, useContext, useReducer, useEffect, useState } from "react";
import { handleLogout } from "../Utils";

const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const initialState = {
    isLoggedIn: !!localStorage.getItem("token"),
    logoutTimer: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN':
        return { ...state, isLoggedIn: true };
      case 'LOGOUT':
        if (state.logoutTimer) {
          clearTimeout(state.logoutTimer);
        }
        handleLogout();
        return { ...state, isLoggedIn: false, logoutTimer: null };
      case 'SET_LOGOUT_TIMER':
        return { ...state, logoutTimer: action.timer };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const localUserData = localStorage.getItem('user') || '{}';
  const [userState, setUserState] = useState(JSON.parse(localUserData));


  const setCurrentUser = (userData) => {
    localStorage.setItem("token", userData.token);
    localStorage.setItem("id", userData.id);
    localStorage.setItem('user', JSON.stringify(userData));
    setUserState(userData);
  }

  useEffect(() => {
    if (state.isLoggedIn) {
      const timer = setTimeout(() => {
        dispatch({ type: 'LOGOUT' });
        alert("Session expired. Logging out...");
      }, 5 * 60 * 1000); // 5 minutes

      dispatch({ type: 'SET_LOGOUT_TIMER', timer });
    }
  }, [state.isLoggedIn]);

  const contextValue = {
    state, dispatch, setCurrentUser, currentUser: userState
  };

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useDoctorStates = () => useContext(ContextGlobal);
