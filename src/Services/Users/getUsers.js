import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";


export const getUsers = async () => {
    let res = await axios.get(`${SERVER_API}/users/all`, getHeaders());
    return res.data;
};