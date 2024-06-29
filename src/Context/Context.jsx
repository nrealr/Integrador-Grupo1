import React, { createContext, useContext, useReducer, useEffect, useState } from "react";
import { handleLogout } from "../Utils";
import { getUserPreferences } from "../Services/Users";

export const ContextGlobal = createContext(); 

export const ContextProvider = ({ children }) => {
  const initialState = {
    isLoggedIn: !!localStorage.getItem("token"),
    logoutTimer: null,
    favorites: [],
    currentUser: JSON.parse(localStorage.getItem('user') || '{}')
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
        return { ...state, isLoggedIn: false, logoutTimer: null, favorites: [] };
      case 'SET_LOGOUT_TIMER':
        return { ...state, logoutTimer: action.timer };
      case 'SET_FAVORITES':
        return { ...state, favorites: action.favorites };
      case 'SET_CURRENT_USER':
        return { ...state, currentUser: action.user };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setCurrentUser = (userData) => {
    localStorage.setItem("token", userData.token);
    localStorage.setItem("id", userData.id);
    localStorage.setItem('user', JSON.stringify(userData));
    dispatch({ type: 'SET_CURRENT_USER', user: userData });
  };

  useEffect(() => {
    if (state.isLoggedIn) {
      const fetchUserPreferences = async () => {
        try {
          const preferences = await getUserPreferences();
          dispatch({ type: 'SET_FAVORITES', favorites: preferences.favorites });
        } catch (error) {
          console.error('Error fetching user preferences:', error);
        }
      };

      fetchUserPreferences();

      const timer = setTimeout(() => {
        dispatch({ type: 'LOGOUT' });
        alert("Session expired. Logging out...");
      }, 40 * 60 * 1000); // 40 minutes

      dispatch({ type: 'SET_LOGOUT_TIMER', timer });
    }
  }, [state.isLoggedIn]);

  const contextValue = {
    state, dispatch, setCurrentUser, currentUser: state.currentUser
  };

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useDoctorStates = () => useContext(ContextGlobal);
