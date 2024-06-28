import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";

export const updateUserFavorites = async (favorites) => {
    let res = await axios.put(`${SERVER_API}/user-preferences/${id}/favorites`, favorites, getHeaders());
    return res.data;
}
