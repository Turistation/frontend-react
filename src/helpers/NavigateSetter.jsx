import { useNavigate } from 'react-router-dom';

import History from './history';

const NavigateSetter = () => {
    History.navigate = useNavigate();

    return null;
};

export default NavigateSetter;
