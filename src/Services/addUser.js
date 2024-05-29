import axios from "axios"
import { SERVER_API } from "../Constants"

export const addUser = async (user) => {
    //buscar token desde local storage
    let params = null;
    if (token) {
        params = {
            headers: {
                Authorization: 'bearer ${token}'
            }
        }

        //de que forma se envian los token por los headers
    }
    let res = await axios.post(`${SERVER_API}/register`, user, params);
    return res.data;
}