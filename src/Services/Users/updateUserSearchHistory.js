import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";

export const updateUserSearchHistory = async (history) => {
    let res = await axios.put(`${SERVER_API}/user-preferences/${id}/search-history`, history, getHeaders());
    return res.data;
}
