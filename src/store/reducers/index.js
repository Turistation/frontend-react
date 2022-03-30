import { combineReducers } from 'redux';

import { authentication } from './authentication';
import { loader } from './loader';
import { users } from './users';

export default combineReducers({
    loader,
    authentication,
    users,
});
