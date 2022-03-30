import axios from '../../configs/axios';

const csrf = {
    csrtToken: () => axios.get('/sanctum/csrf-cookie'),
};

export default csrf;
