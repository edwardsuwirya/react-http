import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID c95aacfa687994a67e2f96698599881eca054bd8e76198a9521e5e80470ac08f'
    }
});