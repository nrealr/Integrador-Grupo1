/**
 * getAvailableDays Module
 * This module exports an asynchronous function `getAvailableDays` that retrieves a collection of available days.
 * It uses axios to make a GET request to the server API endpoint '/available-days' with the appropriate headers.
 * If the environment variable `USE_MOCK_DAYS` is defined, it will return a mock collection of available days instead.
 *
 * @module getAvailableDays
 */

import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";



/**
 * The availableDaysMock array is a collection of available days used for testing purposes.
 * @type {string[]}
 */

const availableDaysMock = [
    '2024-05-01T04:34:06.212Z',
    '2024-05-02T04:34:06.212Z',
    '2024-05-03T04:34:06.212Z',
    '2024-05-04T04:34:06.212Z',
    '2024-05-05T04:34:06.212Z',
    '2024-05-06T04:34:06.212Z',
    '2024-05-07T04:34:06.212Z',
    '2024-05-08T04:34:06.212Z',
    '2024-05-09T04:34:06.212Z',
    '2024-05-10T04:34:06.212Z',
    '2024-05-11T04:34:06.212Z',
    '2024-05-12T04:34:06.212Z',
    '2024-05-13T04:34:06.212Z',
    '2024-05-14T04:34:06.212Z',
    '2024-05-15T04:34:06.212Z',
    '2024-05-16T04:34:06.212Z',
    '2024-05-18T04:34:06.212Z',
    '2024-05-20T04:34:06.212Z',
    '2024-05-21T04:34:06.212Z',
    '2024-05-22T04:34:06.212Z',
    '2024-05-23T04:34:06.212Z',
    '2024-05-24T04:34:06.212Z',
    '2024-05-26T04:34:06.212Z',
    '2024-05-28T04:34:06.212Z',
    '2024-05-29T04:34:06.212Z',
    '2024-05-30T04:34:06.212Z',
    '2024-05-31T04:34:06.212Z',
    '2024-06-01T04:34:06.212Z',
    '2024-06-02T04:34:06.212Z',
    '2024-06-03T04:34:06.212Z',
    '2024-06-04T04:34:06.212Z',
    '2024-06-05T04:34:06.212Z',
    '2024-06-06T04:34:06.212Z',
    '2024-06-07T04:34:06.212Z',
    '2024-06-08T04:34:06.212Z',
    '2024-06-09T04:34:06.212Z',
    '2024-06-10T04:34:06.212Z',
    '2024-06-11T04:34:06.212Z',
    '2024-06-12T04:34:06.212Z',
    '2024-06-13T04:34:06.212Z',
    '2024-06-14T04:34:06.212Z',
    '2024-06-15T04:34:06.212Z',
    '2024-06-16T04:34:06.212Z',
    '2024-06-18T04:34:06.212Z',
    '2024-06-20T04:34:06.212Z',
    '2024-06-21T04:34:06.212Z',
    '2024-06-22T04:34:06.212Z',
    '2024-06-23T04:34:06.212Z',
    '2024-06-24T04:34:06.212Z',
    '2024-06-26T04:34:06.212Z',
    '2024-06-28T04:34:06.212Z',
    '2024-06-29T04:34:06.212Z',
    '2024-06-30T04:34:06.212Z',
    '2024-07-01T04:34:06.212Z',
    '2024-07-02T04:34:06.212Z',
    '2024-07-03T04:34:06.212Z',
    '2024-07-04T04:34:06.212Z',
    '2024-07-05T04:34:06.212Z',
    '2024-07-06T04:34:06.212Z',
    '2024-07-07T04:34:06.212Z',
    '2024-07-08T04:34:06.212Z',
    '2024-07-09T04:34:06.212Z',
    '2024-07-10T04:34:06.212Z',
    '2024-07-11T04:34:06.212Z',
    '2024-07-12T04:34:06.212Z',
    '2024-07-14T04:34:06.212Z',
    '2024-07-16T04:34:06.212Z',
    '2024-07-17T04:34:06.212Z',
    '2024-07-18T04:34:06.212Z',
    '2024-07-20T04:34:06.212Z',
    '2024-07-21T04:34:06.212Z',
    '2024-07-22T04:34:06.212Z',
    '2024-07-23T04:34:06.212Z',
    '2024-07-24T04:34:06.212Z',
    '2024-07-25T04:34:06.212Z',
    '2024-07-27T04:34:06.212Z',
    '2024-07-28T04:34:06.212Z',
    '2024-07-29T04:34:06.212Z',
    '2024-07-30T04:34:06.212Z',
    '2024-07-31T04:34:06.212Z'
  ]

/**
 * The getAvailableDays function is an asynchronous function that retrieves a collection of available days.
 * It checks if the `USE_MOCK_DAYS` environment variable is defined. If it is, it returns the mock collection of available days.
 * Otherwise, it makes a GET request to the server API endpoint '/available-days' with the appropriate headers and returns the response data.
 *
 * @returns {Promise<string[]>} A promise that resolves to a collection of available days.
 */
export const getAvailableDays = async () => {
    if (typeof window.USE_MOCK_DAYS == 'undefined') {
        return Promise.resolve(availableDaysMock);
    };
    let res = await axios.get(`${SERVER_API}/available-days`, getHeaders());
    return res.data;
};