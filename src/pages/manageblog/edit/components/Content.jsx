import { Modal } from '@mantine/core';
import { RichTextEditor } from '@mantine/rte';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import Autocomplete from '../../../../components/Autocomplete';
import Button from '../../../../components/button';
import GalleryPicker from '../../../../components/GalleryPicker/GalleryPicker';
import Input from '../../../../components/input';
import Paper from '../../../../components/Paper';
import blog from '../../../../constant/api/blog';
import category from '../../../../constant/api/category';
import photo from '../../../../constant/api/photo';
import UploadDropZone from './UploadDropZone';

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

const ManageBlogEditContent = ({ data }) => {
    const navigate = useNavigate();

    const [dummyImages, setDummyImages] = useState([]);
    const [imageFromDB, setImageFromDB] = useState([]);

    useEffect(() => {
        if (data?.photos) {
            setDummyImages(
                data?.photos?.map(
                    (item) =>
                        ({
                            ...item,
                            src: item.photos,
                            thumbnail: item.photos,
                            isSelected: true,
                        } || []),
                ),
            );
        }
    }, [data?.photos]);

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

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: data?.title ?? '',
            description: data?.description ?? '',
            category: data?.blog_categories_id ?? '',
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
            formData.append('_method', 'PUT');
            formData.append('title', values.title);
            formData.append('description', values.description);
            formData.append('blog_categories_id', values.category);
            if (values.photo_method === 'upload') {
                values.images.forEach((image) => {
                    formData.append('images[]', image);
                });
            } else {
                dummyImages.forEach((image) => {
                    formData.append('photos[]', image?.id);
                });
            }

            try {
                window.showLoader(true);
                await blog.update(data?.id, formData);
                window.showLoader(false);
                window.showToast(
                    toastId,
                    'info',
                    'success update blog',
                );
                navigate('/backoffice/manageblog');
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

    const handleRichTextImageUpload = async (image) => {
        const formData = new FormData();
        if (!formik.values.category) {
            window.showToast(
                'rteuploadimage',
                'error',
                'Category is required',
            );
            return 'Category is required';
        }
        formData.append('category_id', formik.values.category);
        formData.append('images[]', image);

        try {
            const res = await photo.upload(formData);
            return res?.data?.photos?.[0]?.photos ?? '';
        } catch (error) {
            window.showToast(
                'rteuploadimage',
                'error',
                error?.response?.data?.message ?? error?.message,
            );
            return error?.response?.data?.message ?? error?.message;
        }
    };

    const getAllImage = async () => {
        try {
            window.showLoader(true);
            const imageSet = new Set(dummyImages.map((d) => d.src));
            const res = await photo.getAll();
            const dataMapped = res?.data?.photos?.map((item) => ({
                ...item,
                src: item?.photos,
                thumbnail: item?.photos,
                isSelected: imageSet.has(item?.photos),
            }));
            setImageFromDB(dataMapped);
            window.showLoader(false);
        } catch (error) {
            window.showLoader(false);
            window.showToast(
                'getimage',
                'error',
                error?.response?.data?.message ?? error?.message,
            );
        }
    };

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
                        defaultValue={formik.values.category}
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
                        onImageUpload={handleRichTextImageUpload}
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
                            defaultValue={formik.values.photo_method}
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
                                onClick={async () => {
                                    await getAllImage();

                                    setOpenModal(true);
                                }}
                            >
                                Select Photos
                            </Button>
                        </div>
                    )}
                </div>
                {formik.values.photo_method === 'upload' && (
                    <UploadDropZone
                        onDrop={(files) => {
                            formik.setFieldValue('images', files);
                            const urlImage = files?.map((file) => ({
                                src: URL.createObjectURL(file),
                                thumbnail: URL.createObjectURL(file),
                                isSelected: true,
                            }));
                            setDummyImages([
                                ...dummyImages,
                                ...urlImage,
                            ]);
                        }}
                    />
                )}

                <Modal
                    opened={openModal}
                    onClose={() => setOpenModal(false)}
                    title="Select Photos"
                    centered
                    size={'75%'}
                >
                    <GalleryPicker
                        images={imageFromDB}
                        onSelected={(idx) =>
                            setImageFromDB((old) => {
                                const imageSaved = data?.photos?.map(
                                    (item) => ({
                                        ...item,
                                        src: item.photos,
                                        thumbnail: item.photos,
                                        isSelected: true,
                                    }),
                                );
                                var imagesSet = new Set(
                                    imageSaved.map((d) => d.src),
                                );

                                const newImages = [...old];
                                const selectedImage = {
                                    ...newImages[idx],
                                };
                                if (
                                    !imagesSet.has(selectedImage.src)
                                ) {
                                    selectedImage.isSelected =
                                        !selectedImage.isSelected;
                                }

                                newImages[idx] = selectedImage;

                                setDummyImages(() => {
                                    const fix = [
                                        ...imageSaved,
                                        ...newImages.filter(
                                            (d) =>
                                                d?.isSelected &&
                                                !imagesSet.has(d.src),
                                        ),
                                    ];
                                    return fix;
                                });
                                return newImages;
                            })
                        }
                    ></GalleryPicker>
                    <div className="w-full px-2 py-3 flex justify-center">
                        <div className="w-full md:w-1/2 xl:w-1/4">
                            <Button
                                onClick={() => setOpenModal(false)}
                                type="button"
                            >
                                Done
                            </Button>
                        </div>
                    </div>
                </Modal>
                <div className="w-full px-2 py-3 flex justify-center">
                    <GalleryPicker
                        images={dummyImages?.filter(
                            (item) => item.isSelected,
                        )}
                        disabled
                    ></GalleryPicker>
                </div>
                <div className="w-full px-2 py-3 flex justify-center">
                    <div className="w-full md:w-1/2 xl:w-1/4">
                        <Button type="submit">Save Blog</Button>
                    </div>
                </div>
            </form>
        </Paper>
    );
};

export default ManageBlogEditContent;
