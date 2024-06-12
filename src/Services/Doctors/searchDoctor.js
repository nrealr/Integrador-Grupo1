import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";

/**
 *
 * @returns {Array}
 */
export const searchDoctor = async (query, location) => {
  let res = await axios.get(
    `${SERVER_API}/doctors/search?query=${query}&location=${location}`,
    getHeaders()
  );
  return res.data;
};
