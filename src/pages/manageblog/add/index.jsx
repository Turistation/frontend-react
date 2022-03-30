import BackOfficeLayout from '../../../components/backOfficeLayout';
import ManageBlogAddContent from './components/Content';

const ManageBlogAdd = () => {
    return (
        <BackOfficeLayout
            enableBackBtn
            backBtnLink="/backoffice/manageblog"
            mainTitle="Add New Blog"
        >
            <ManageBlogAddContent />
        </BackOfficeLayout>
    );
};

export default ManageBlogAdd;
