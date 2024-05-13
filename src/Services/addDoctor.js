
export const addDoctor = async (doctor) => {
    let res = await axios.post(`${SERVER_API}/doctors/register`, doctor);
    return res.data;
}