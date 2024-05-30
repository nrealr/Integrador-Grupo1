export const getHeaders = (headers = {}) => {
    const token = localStorage.getItem('token');
    if (token) {
        return  {
            headers: {
                Authorization: `Bearer ${token}`,
                ...headers
            }
        }
    } else {
        return null;
    }
}