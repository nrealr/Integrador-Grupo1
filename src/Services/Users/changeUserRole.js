import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";

export const changeUserRole = async (id, roleId) => {
    try {
        const config = getHeaders({
            'Content-Type': 'application/json'
        });
        const res = await axios.put(
            `${SERVER_API}/users/${id}/role`,
            { roleId },
            config
        );
        return res.data;
    } catch (error) {
        console.error("Error changing user role:", error.response || error);
        throw error;
    }
};
