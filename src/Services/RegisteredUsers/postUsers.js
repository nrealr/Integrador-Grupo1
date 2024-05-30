// import axios from "axios";
// import { SERVER_API } from "../Constants";

// export const addUser = async (user) => {
    
//     const token = localStorage.getItem("token");

//     let params = null;
//     if (token) {
//         params = {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         }
//     }

//     try {
//         let res = await axios.post(`${SERVER_API}/register`, user, params);
//         return res.data;
//     } catch (error) {
//         console.error(error);
//         throw error; // Rethrow the error so it can be caught by the caller
//     }
// }