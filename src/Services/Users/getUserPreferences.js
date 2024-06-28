import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";

/**
 * 
 * @returns {Object}
 */
export const getUsersPreferences = async () => {
    const id = localStorage.getItem("id"); // Obtener el id del localStorage
    if (!id) {
        throw new Error("No user ID found in local storage");
    }
    const res = await axios.get(`${SERVER_API}/users-preferences/${id}`, getHeaders());
    return res.data;
};