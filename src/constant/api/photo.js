import axios from '../../configs/axios';

const photo = {
    upload: (data) => axios.post('/api/admin/photos', data),
    getAll: () => axios.get('/api/photos'),
    getRecents: () => axios.get('/api/photos/recents'),
};

export default photo;
