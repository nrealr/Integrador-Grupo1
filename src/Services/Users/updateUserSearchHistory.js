import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";

export const updateUserSearchHistory = async (id, searchHistory) => {
    try {
        const config = getHeaders({
            'Content-Type': 'application/json'
        });
        const res = await axios.put(
            `${SERVER_API}/user-preferences/${id}/search-history`,
            searchHistory,
            config
        );
        return res.data;
    } catch (error) {
        console.error("Error updating user search history:", error.response || error);
        throw error;
    }
};