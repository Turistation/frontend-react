import axios from '../../configs/axios';

const blog = {
    create: (data) => axios.post('/api/admin/blogs', data),
    getAllForAdmin: (query = '') =>
        axios.get(`/api/admin/blogs?query=${query}`),
    getAll: (query = null, page = null) =>
        axios.get(`/api/blogs`, {
            params: {
                query,
                page,
            },
        }),
    getById: (id) => axios.get(`/api/blogs/${id}`),
    getRecents: () => axios.get('/api/blogs/recents'),
    update: (id, data) => axios.post(`/api/admin/blogs/${id}`, data),
    getComments: (id) => axios.get(`/api/comments/${id}`),
    createComment: (data) => axios.post(`/api/comments`, data),
    countVisitor: (id) => axios.post(`/api/blog/exceptions/${id}`),
    delete: (id) => axios.delete(`/api/admin/blogs/${id}`),
};

export default blog;
