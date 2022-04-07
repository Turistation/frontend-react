import axios from '../../configs/axios';

const photo = {
    upload: (data) => axios.post('/api/admin/photos', data),
    getAll: (categoryIds = '') =>
        axios.get(
            categoryIds
                ? `/api/photos?category_id=${categoryIds}`
                : '/api/photos',
        ),
    getRecents: () => axios.get('/api/photos/recents'),
};

export default photo;
