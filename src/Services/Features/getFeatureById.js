import axios from "axios";
import { SERVER_API } from "../../Constants";


export const getFeatureById = async (id) => {
    let res = await axios.get(`${SERVER_API}/feature/${id}`);
    return res.data;
};