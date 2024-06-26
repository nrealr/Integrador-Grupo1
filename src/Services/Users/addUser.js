import axios from "axios";
import { SERVER_API } from "../../Constants";


export const addUser = async (user) => {
    let res = await axios.post(`${SERVER_API}/users/register`, user);
    return res.data;
}