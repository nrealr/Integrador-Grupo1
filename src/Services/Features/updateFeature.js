import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";

export const updateFeature = async (feature) => {
    let res = await axios.put(`${SERVER_API}/features/update/${id}`, feature, getHeaders());
    return res.data;
}