import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../../components/button';
import CustomTable, {
    DateRangeColumnFilter,
} from '../../../../components/CustomTable';

const ManageBlogContent = () => {
    const navigate = useNavigate();
    const columns = useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id',
                filterable: true,
                filter: 'fuzzyText',
            },
            {
                Header: 'Name',
                accessor: 'blog_name',
                filterable: true,
                filter: 'fuzzyText',
            },
            {
                Header: 'Created By',
                accessor: 'created_by',
                filterable: true,
                filter: 'fuzzyText',
            },
            {
                Header: 'Created At',
                accessor: 'created_at',
                filterable: true,
                filter: 'dateBetween',
                Filter: DateRangeColumnFilter,
            },
            {
                Header: 'Action',
                accessor: 'action',
                filterable: false,
            },
        ],
        [],
    );
    const data = useMemo(() => [], []);
    return (
        <div>
            <CustomTable
                data={data}
                columns={columns}
                AddButton={() => (
                    <div className="w-full mr-2 md:mr-0 md:w-1/2 lg:w-1/2 xl:w-1/3">
                        <Button
                            type="button"
                            className="bg-theme-brown-300 focus:outline-none px-8 py-3 rounded-md"
                            onClick={() =>
                                navigate('/backoffice/manageblog/add')
                            }
                        >
                            Add New Blog
                        </Button>
                    </div>
                )}
            />
        </div>
    );
};

export default ManageBlogContent;
