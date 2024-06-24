import { useState } from "react";


/**
 * UserStore: A store component that manages user data.
 *
 * This component uses the React `useState` hook to create a state that stores user data.
 * The state is an object that maps user IDs to their respective form data.
 *
 * The component provides two functions: `addUser` and `getUser`.
 *
 * @returns {Object} An object with two functions: `addUser` and `getUser`.
 */
export const UserStore = () => {
    /**
     * The state that stores user data.
     * @type {Object}
     */
    const [users, setUsers] = useState({});
  
    /**
     * Adds a new user to the state.
     *
     * @param {string} id The user ID.
     * @param {Object} formData The user's form data.
     */
    const addUser = (id, formData) => {
      setUsers((prevUsers) => ({...prevUsers, [id]: formData }));
    };
  
    /**
     * Retrieves a user's data by their ID.
     *
     * @param {string} id The user ID.
     * @returns {Object} The user's form data, or null if not found.
     */
    const getUser = (id) => {
      return users[id];
    };
  
    return { addUser, getUser };
  };
  
