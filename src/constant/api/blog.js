import axios from '../../configs/axios';

const blog = {
    create: (data) => axios.post('/api/blogs', data),
};

export default blog;
