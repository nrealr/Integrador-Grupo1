import axios from "axios";
import { SERVER_API } from "../../Constants";


export const getSpecialties = async () => {
    let res = await axios.get(`${SERVER_API}/specialties/list`);
    return res.data;
};