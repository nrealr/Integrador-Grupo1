import axios from "axios";
import { SERVER_API } from "../../Constants";


export const resendEmail = async (id) => {
    let res = await axios.put(`${SERVER_API}/users/resend-welcome-email/${id}`);
    return res.data;
}