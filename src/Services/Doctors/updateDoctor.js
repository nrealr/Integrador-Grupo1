import axios from "axios";
import { SERVER_API } from "../../Constants";

export const updateDoctor = async (doctor) => {
    let res = await axios.put(`${SERVER_API}/doctors/update/${id}`, doctor, {
        headers: {
            'Content-Type': 'multipart/form-data',
          },
    })
    return res.data;
}