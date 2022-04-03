import axios from '../../configs/axios';

const photo = {
    upload: (data) => axios.post('/api/admin/photos', data),
    getAll: () => axios.get('/api/photos'),
};

export default photo;
