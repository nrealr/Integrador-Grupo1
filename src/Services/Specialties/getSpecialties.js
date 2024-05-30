import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";


export const getSpecialties = async () => {
    let res = await axios.get(`${SERVER_API}/specialties/list`, getHeaders());
    return res.data;
};