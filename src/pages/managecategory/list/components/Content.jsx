import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../../components/button';
import CustomTable, {
    DateRangeColumnFilter,
} from '../../../../components/CustomTable';
import ModalAction from '../../../../components/ModalAction';
import ModalDelete from '../../../../components/ModalDelete';
import category from '../../../../constant/api/category';

const ListCategoryContent = ({
    data: dataCategoies,
    setEventDelete,
}) => {
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
                accessor: 'name',
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

    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

    const deleteSelectedItem = async () => {
        const toastId = 'deleteitem';
        try {
            window.showLoader(true);
            await category.delete(selectedItem?.id);
            window.showLoader(false);
            window.showToast(
                toastId,
                'info',
                `success delete item "${selectedItem?.name}"`,
            );
            setEventDelete(true);
        } catch (error) {
            window.showLoader(false);
            window.showToast(
                toastId,
                'error',
                error?.response?.data?.message ?? error?.message,
            );
        }
    };

    const data = useMemo(
        () =>
            dataCategoies.map((item) => ({
                ...item,
                action: (
                    <ModalAction
                        urlEdit={`/backoffice/managecategories/edit/${item?.id}`}
                        item={item}
                        setSelectedItem={setSelectedItem}
                        setModalDeleteOpen={setIsModalDeleteOpen}
                    />
                ),
            })),
        [dataCategoies],
    );
    return (
        <>
            <ModalDelete
                title="Are you sure?"
                label={`Do you really want to delete item "${selectedItem?.name}" ? This process cannot be undone`}
                btnTitle="Delete"
                isOpen={isModalDeleteOpen}
                setIsOpen={setIsModalDeleteOpen}
                action={deleteSelectedItem}
            />
            <CustomTable
                data={data}
                columns={columns}
                AddButton={() => (
                    <div className="w-full mr-2 md:mr-0 md:w-1/2 lg:w-1/2 xl:w-1/3">
                        <Button
                            type="button"
                            className="bg-theme-brown-300 focus:outline-none px-8 py-3 rounded-md"
                            onClick={() =>
                                navigate(
                                    '/backoffice/managecategories/add',
                                )
                            }
                        >
                            Add New Category
                        </Button>
                    </div>
                )}
            />
        </>
    );
};

export default ListCategoryContent;
