import { Modal } from '@mantine/core';
import { Group, Text, useMantineTheme } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { RichTextEditor } from '@mantine/rte';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Photo, Upload, X } from 'tabler-icons-react';
import * as Yup from 'yup';

import Autocomplete from '../../../../components/Autocomplete';
import Button from '../../../../components/button';
import GalleryPicker from '../../../../components/GalleryPicker/GalleryPicker';
import Input from '../../../../components/input';
import Paper from '../../../../components/Paper';
import blog from '../../../../constant/api/blog';
import category from '../../../../constant/api/category';

function getIconColor(status, theme) {
    return status.accepted
        ? theme.colors[theme.primaryColor][
              theme.colorScheme === 'dark' ? 4 : 6
          ]
        : status.rejected
        ? theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]
        : theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7];
}

function ImageUploadIcon({ status, ...props }) {
    if (status.accepted) {
        return <Upload {...props} />;
    }

    if (status.rejected) {
        return <X {...props} />;
    }

    return <Photo {...props} />;
}

const ManageBlogAddContent = () => {
    const navigate = useNavigate();
    const theme = useMantineTheme();
    const photoMethodOptions = [
        {
            label: 'Upload',
            value: 'upload',
        },
        {
            label: 'Select From Database',
            value: 'database',
        },
    ];

    const [dummyImages, setdummyImages] = useState(
        Array(15).fill({
            src: 'https://images.unsplash.com/photo-1558818061-547b1114aa6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            thumbnail:
                'https://images.unsplash.com/photo-1558818061-547b1114aa6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        }),
    );

    const [categoryList, setCategoryList] = useState([]);
    const [categoryListLoading, setCategoryListLoading] =
        useState(false);

    useEffect(() => {
        const getCategoryList = async () => {
            try {
                setCategoryListLoading(true);
                const res = await category.getAll();
                setCategoryList(res?.data?.categories);
                setCategoryListLoading(false);
            } catch (error) {
                setCategoryListLoading(false);
                window.showToast(
                    'getCategoryList',
                    'error',
                    error?.response?.data?.message ?? error?.message,
                );
            }
        };
        getCategoryList();
    }, []);

    const [openModal, setOpenModal] = useState(false);
    const [listFilename, setListFilename] = useState([]);

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            category: '',
            photo_method: null,
            images: [],
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Title is required'),
            description: Yup.string().required(
                'Description is required',
            ),
        }),
        onSubmit: async (values) => {
            const toastId = 'addBlog';
            const formData = new FormData();
            formData.append('title', values.title);
            formData.append('description', values.description);
            formData.append('blog_categories_id', values.category);
            values.images.forEach((image) => {
                formData.append('images[]', image);
            });
            try {
                window.showLoader(true);
                await blog.create(formData);
                window.showLoader(false);
                window.showToast(
                    toastId,
                    'info',
                    'success create category',
                );
                navigate('/backoffice/managecategories');
            } catch (error) {
                window.showLoader(false);
                window.showToast(
                    toastId,
                    'error',
                    error?.response?.data?.message ?? error?.message,
                );
            }
        },
    });

    return (
        <Paper>
            <form className="p-8" onSubmit={formik.handleSubmit}>
                <div className="flex flex-row w-full my-3">
                    <Input
                        className="w-full"
                        name="title"
                        label="Title"
                        outline
                        error={
                            formik.touched.title &&
                            formik.errors.title
                        }
                        {...formik.getFieldProps('title')}
                    />
                </div>
                <div className="flex flex-row w-full my-3">
                    <Autocomplete
                        className="w-full"
                        name="category"
                        label="Category"
                        inputBg="bg-white"
                        outline
                        error={
                            formik.touched.category &&
                            formik.errors.category
                        }
                        options={categoryList}
                        labelKey="name"
                        valueKey="id"
                        setValue={(value) => {
                            formik.setFieldValue('category', value);
                        }}
                        loading={categoryListLoading}
                    />
                </div>

                <div className="flex flex-col w-full my-3">
                    <h1 className="px-1 left-2">Content</h1>
                    <RichTextEditor
                        stickyOffset={20}
                        value={formik.values.description}
                        onChange={(val) => {
                            formik.setFieldValue('description', val);
                        }}
                    />
                </div>
                <div className="flex flex-row w-full my-3 items-center justify-center">
                    <div
                        className={`${
                            formik.values.photo_method === 'database'
                                ? 'w-[80%]'
                                : 'w-full'
                        } `}
                    >
                        <Autocomplete
                            className="w-full"
                            name="photo_method"
                            label="Photos"
                            inputBg="bg-white"
                            outline
                            error={
                                formik.touched.photo_method &&
                                formik.errors.photo_method
                            }
                            options={photoMethodOptions}
                            labelKey="label"
                            valueKey="value"
                            setValue={(value) => {
                                formik.setFieldValue(
                                    'photo_method',
                                    value,
                                );
                            }}
                            loading={false}
                        />
                    </div>
                    {formik.values.photo_method === 'database' && (
                        <div className="w-[20%] mt-[24px] mx-2">
                            <Button
                                onClick={() => setOpenModal(true)}
                            >
                                Select Photos
                            </Button>
                        </div>
                    )}
                </div>
                {formik.values.photo_method === 'upload' && (
                    <Dropzone
                        onDrop={(files) => {
                            formik.setFieldValue('images', files);
                            // get filename
                            const filenames = files?.map(
                                (file) => file?.path,
                            );

                            setListFilename(filenames);
                        }}
                        onReject={() => {}}
                        maxSize={3 * 1024 ** 2}
                        accept={IMAGE_MIME_TYPE}
                        multiple
                    >
                        {(status) => (
                            <>
                                <Group
                                    position="center"
                                    spacing="xl"
                                    style={{
                                        minHeight: 220,
                                        pointerEvents: 'none',
                                    }}
                                >
                                    <ImageUploadIcon
                                        status={status}
                                        style={{
                                            color: getIconColor(
                                                status,
                                                theme,
                                            ),
                                        }}
                                        size={80}
                                    />

                                    <div>
                                        <Text size="xl" inline>
                                            Drag images here or click
                                            to select files
                                        </Text>
                                        <Text
                                            size="sm"
                                            color="dimmed"
                                            inline
                                            mt={7}
                                        >
                                            Attach as many files as
                                            you like, each file should
                                            not exceed 5mb
                                        </Text>
                                    </div>
                                </Group>
                                {listFilename?.length > 0 && (
                                    <div className="text-center">
                                        {listFilename?.map(
                                            (filename, idx) => (
                                                <p key={idx}>
                                                    {filename}
                                                </p>
                                            ),
                                        )}
                                    </div>
                                )}
                            </>
                        )}
                    </Dropzone>
                )}

                <Modal
                    opened={openModal}
                    onClose={() => setOpenModal(false)}
                    title="Select Photos"
                    centered
                    size={'75%'}
                >
                    <GalleryPicker
                        images={dummyImages}
                        onSelected={(idx) =>
                            setdummyImages((old) => {
                                const newImages = [...old];
                                const selectedImage = {
                                    ...newImages[idx],
                                };
                                selectedImage.isSelected =
                                    !selectedImage.isSelected;
                                newImages[idx] = selectedImage;
                                return newImages;
                            })
                        }
                    ></GalleryPicker>
                </Modal>
                <div className="w-full px-2 py-3 flex justify-center">
                    <div className="w-full md:w-1/2 xl:w-1/4">
                        <Button type="submit">Save Blog</Button>
                    </div>
                </div>
            </form>
        </Paper>
    );
};

export default ManageBlogAddContent;
