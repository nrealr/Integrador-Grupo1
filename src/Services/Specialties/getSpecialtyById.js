import axios from "axios";
import { SERVER_API } from "../../Constants";


export const getSpecialtyById = async (id) => {
    let res = await axios.get(`${SERVER_API}/specialties/${id}`);
    return res.data;
};