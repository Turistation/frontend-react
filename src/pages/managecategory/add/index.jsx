import BackOfficeLayout from '../../../components/backOfficeLayout';
import ManageCategoryAddContent from './components/Content';

const ManageCategoryAdd = () => {
    return (
        <BackOfficeLayout
            enableBackBtn
            backBtnLink="/backoffice/managecategories"
            mainTitle="Add New Category"
        >
            <ManageCategoryAddContent />
        </BackOfficeLayout>
    );
};

export default ManageCategoryAdd;
