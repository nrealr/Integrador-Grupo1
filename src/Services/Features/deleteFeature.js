import axios from "axios";
import { SERVER_API } from "../../Constants";

export const deleteFeature = async (id) => {
    let res = await axios.delete(`${SERVER_API}/features/delete/${id}`);
    return res.data;
}