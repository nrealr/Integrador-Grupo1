import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";


export const getFeatureById = async (id) => {
    let res = await axios.get(`${SERVER_API}/feature/${id}`, getHeaders());
    return res.data;
};