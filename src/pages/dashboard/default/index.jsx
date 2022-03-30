import BackOfficeLayout from '../../../components/backOfficeLayout';
import Info from './components/Info';
import Recent from './components/Recent';

const Dashboard = () => {
    return (
        <BackOfficeLayout>
            <Info />
            <Recent />
        </BackOfficeLayout>
    );
};

export default Dashboard;
