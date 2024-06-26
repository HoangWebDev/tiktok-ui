import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export const get = async (url, options = {}) => {
    const response = await instance.get(url, options);
    return response.data;
};

export default instance;

//Local / Development
//Test / Staging
//UAT
//Production
