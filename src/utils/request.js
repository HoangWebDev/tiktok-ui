import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const get = async (url, options = {}) => {
    const response = await instance.get(url, options);
    return response.data;
};

export default instance;
