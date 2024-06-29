import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";

/**
 * 
 * @param {Object} data 
 * @returns {Object}
 */
export const updateUser = async (data) => {
    const id = localStorage.getItem("id"); // Obtener el id del localStorage
    if (!id) {
      throw new Error("No user ID found in local storage");
    }
    let res = await axios.put(`${SERVER_API}/users/${id}`, data, getHeaders());
    return res.data;
  }