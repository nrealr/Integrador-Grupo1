import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";

export const updateUserFavorites = async (id, favorites) => {
    try {
        const config = getHeaders({
            'Content-Type': 'application/json'
        });
        const res = await axios.put(
            `${SERVER_API}/user-preferences/${id}/favorites`,
            favorites,
            config
        );
        return res.data;
    } catch (error) {
        console.error("Error updating user favorites:", error.response || error);
        throw error;
    }
};