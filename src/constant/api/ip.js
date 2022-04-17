import axios from 'axios';

const ip = {
    get: async () => {
        const response = await axios.get('http://ip.jsontest.com/');
        return response?.data;
    },
};

export default ip;
