import axios from "axios";
import { SERVER_API } from "../../Constants";


export const getFeatures = async () => {
    let res = await axios.get(`${SERVER_API}/features/list`);
    return res.data;
};