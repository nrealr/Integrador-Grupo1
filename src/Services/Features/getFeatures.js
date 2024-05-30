import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";


export const getFeatures = async () => {
    let res = await axios.get(`${SERVER_API}/features/list`, getHeaders());
    return res.data;
};