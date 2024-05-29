import axios from "axios";
import { SERVER_API } from "../../Constants";

export const addFeature = async (feature) => {
    const formData = new FormData();
    formData.append('name', feature.name);
    formData.append('icon', feature.icon);
    let res = await axios.post(`${SERVER_API}/features/add`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    
    return res.data;
}