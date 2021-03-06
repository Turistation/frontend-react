import axios from '../../configs/axios';

const category = {
    getAll: () => axios.get('/api/categories'),
    getById: (id) => axios.get(`/api/categories/${id}`),
    create: (data) => axios.post('/api/admin/categories', data),
    update: (id, data) =>
        axios.post(`/api/admin/categories/${id}`, data),
    delete: (id) => axios.delete(`/api/admin/categories/${id}`),
};

export default category;
