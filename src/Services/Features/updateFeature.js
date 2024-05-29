import axios from "axios";
import { SERVER_API } from "../../Constants";

export const updateFeature = async (feature) => {
    let res = await axios.put(`${SERVER_API}/features/update/${id}`, feature);
    return res.data;
}