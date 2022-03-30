import axios from '../../configs/axios';

const admin = {
    login: (data) => axios.post('/api/admin/logins', data),
    getProfile: () => axios.get('/api/admins'),
    logout: () => axios.post('/api/admin/logouts'),
};

export default admin;
