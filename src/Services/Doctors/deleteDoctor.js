import axios from "axios";
import { SERVER_API } from "../../Constants";

export const deleteDoctor = async (id) => {
    let res = await axios.delete(`${SERVER_API}/doctors/delete/${id}`);
    return res.data;
}