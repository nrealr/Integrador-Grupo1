import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";


export const getLocationById = async (id) => {
    let res = await axios.get(`${SERVER_API}/locations/${id}`, getHeaders);
    return res.data;
};