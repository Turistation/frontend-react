import { useEffect, useState } from 'react';

import BackOfficeLayout from '../../../components/backOfficeLayout';
import blog from '../../../constant/api/blog';
import Info from './components/Info';
import Recent from './components/Recent';

const Dashboard = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const getRecent = async () => {
            try {
                window.showLoader(true);
                const res = await blog.getRecents();
                setData(res.data);
                window.showLoader(false);
            } catch (error) {
                window.showLoader(false);
                window.showToast(
                    'getRecent',
                    'error',
                    error?.response?.data?.data?.error ??
                        error?.message,
                );
            }
        };
        getRecent();
    }, []);

    return (
        <BackOfficeLayout>
            <Info data={data} />
            <Recent data={data?.blogs} />
        </BackOfficeLayout>
    );
};

export default Dashboard;
