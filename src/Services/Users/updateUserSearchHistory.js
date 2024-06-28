import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";

/* export const updateUserSearchHistory = async (id, history) => {
  const res = await axios.put(`${SERVER_API}/user-preferences/${id}/search-history`, { searchHistory: history }, getHeaders());
  return res.data;
};
 */

/* import axios from 'axios';

export const updateUserSearchHistory = async (userId, searchHistory) => {
  try {
    const response = await axios.put(`${SERVER_API}/user-preferences/${id}/search-history`, {
      searchHistory: searchHistory
    });
    return response.data;
  } catch (error) {
    console.error('Error updating user search history:', error);
    throw error;
  }
}; */



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