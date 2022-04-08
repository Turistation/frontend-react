import axios from '../../configs/axios';

const admin = {
    login: (data) => axios.post('/api/admin/logins', data),
    getProfile: () => axios.get('/api/admins'),
    logout: () => axios.post('/api/admin/logouts'),
    register: (data) => axios.post('/api/admin/registers', data),
};

export default admin;
