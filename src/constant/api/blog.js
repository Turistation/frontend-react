import axios from '../../configs/axios';

const blog = {
    create: (data) => axios.post('/api/blogs', data),
    getAll: () => axios.get('/api/blogs'),
};

export default blog;
