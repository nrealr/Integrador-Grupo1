import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";

export const changeUserPassword = async (id, passwordData) => {
    try {
        const config = getHeaders({
            'Content-Type': 'application/json'
        });
        const res = await axios.put(
            `${SERVER_API}/users/${id}/password`,
            passwordData,
            config
        );
        return res.data;
    } catch (error) {
        console.error("Error changing user password:", error.response || error);
        throw error;
    }
};