import axios from '../../configs/axios';

const category = {
    getAll: () => axios.get('/api/categories'),
    create: (data) => axios.post('/api/admin/categories', data),
};

export default category;
