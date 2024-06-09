import axios from "axios";
import { SERVER_API } from "../../Constants";
import { getHeaders } from "../../Utils";

/**
 *
 * @returns {Array}
 */
export const searchDoctor = async (query) => {
  let res = await axios.get(
    `${SERVER_API}/doctors/search?query=${query}`,
    getHeaders()
  );
  return res.data;
};
