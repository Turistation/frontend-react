import axios from '../../configs/axios';

const blog = {
    create: (data) => axios.post('/api/blogs', data),
    getAll: () => axios.get('/api/blogs'),
    getById: (id) => axios.get(`/api/blogs/${id}`),
    getRecents: () => axios.get('/api/blogs/recents'),
};

export default blog;
