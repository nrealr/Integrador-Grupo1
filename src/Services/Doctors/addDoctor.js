/**
 * addDoctor Module
 * 
 * This module exports an asynchronous function `addDoctor` that adds a new doctor to the system.
 * It uses axios to make a POST request to the server API endpoint '/doctors/register' with the doctor's data and appropriate headers.
 *
 * @module addDoctor
 */


import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";

/**
 * The addDoctor function is an asynchronous function that adds a new doctor to the system.
 * It takes a doctor object as an argument, which contains the doctor's data.
 * It uses the getHeaders function from the Utils module to generate the appropriate headers for the request,
 * including the Content-Type header set to "multipart/form-data" to allow for file uploads.
 * It then makes a POST request to the server API endpoint '/doctors/register' with the doctor's data and headers.
 * The function returns the response data from the server.
 *
 * @param {object} doctor - The doctor object containing the doctor's data.
 * @returns {Promise<object>} A promise that resolves to the response data from the server.
 */

export const addDoctor = async (doctor) => {
    const headers = getHeaders({ "Content-Type": "multipart/form-data" });
    let res = await axios.post(`${SERVER_API}/doctors/register`, doctor, headers);
    return res.data;
}
