import axios from '../../configs/axios';

const blog = {
    create: (data) => axios.post('/api/admin/blogs', data),
    getAll: () => axios.get('/api/blogs'),
    getById: (id) => axios.get(`/api/blogs/${id}`),
    getRecents: () => axios.get('/api/blogs/recents'),
    update: (id, data) => axios.post(`/api/admin/blogs/${id}`, data),
};

export default blog;
