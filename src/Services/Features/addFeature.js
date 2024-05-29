import axios from "axios";
import { SERVER_API } from "../../Constants";

export const addFeature = async (feature) => {
    let res = await axios.post(`${SERVER_API}/features/add`, feature);
    return res.data;
}