import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";

export const deleteFeature = async (id) => {
    let res = await axios.delete(`${SERVER_API}/features/delete/${id}`, getHeaders());
    return res.data;
}