import axios from '../../configs/axios';

const photo = {
    upload: (data) => axios.post('/api/admin/photos', data),
    getAll: (category_id = null, page = null) =>
        axios.get('/api/photos', {
            params: {
                category_id,
                page,
            },
        }),
    getRecents: () => axios.get('/api/photos/recents'),
    getAllWithoutPagination: () => axios.get('/api/admin/photos'),
};

export default photo;
