import axios from "axios";
import { SERVER_API } from "../Constants";

export const addDoctor = async (doctor) => {
    let res = await axios.post(`${SERVER_API}/doctors/register`, doctor);
    return res.data;
}