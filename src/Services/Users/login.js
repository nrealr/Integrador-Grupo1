/**
 * login Module
 * 
 * This module exports an asynchronous function `login` that handles user login functionality.
 * It uses axios to make a POST request to the server API endpoint '/users/login' with the user's login credentials and appropriate headers.
 *
 * @module login
 */

import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";


/**
 * The login function is an asynchronous function that handles user login functionality.
 * It takes a data object as an argument, which contains the user's login credentials (e.g. username and password).
 * It uses the getHeaders function from the Utils module to generate the appropriate headers for the request.
 * It then makes a POST request to the server API endpoint '/users/login' with the user's login credentials and headers using axios.
 * The function returns the response data from the server, which is expected to be an array.
 *
 * @param {object} data - The data object containing the user's login credentials.
 * @returns {Promise<Array>} A promise that resolves to an array containing the response data from the server.
 */
export const login = async (data) => {
    let res = await axios.post(`${SERVER_API}/users/login`, data, getHeaders);
    return res.data;
};