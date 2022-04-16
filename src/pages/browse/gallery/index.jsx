import { useDebouncedValue } from '@mantine/hooks';
import { useEffect, useRef, useState } from 'react';

import Layout from '../../../components/layout';
import blog from '../../../constant/api/blog';
import category from '../../../constant/api/category';
import photo from '../../../constant/api/photo';
import BrowseByGalleryContent from './components/Content';
import BrowseByGalleryHeader from './components/Header';

const BrowseByGallery = () => {
    const [total, setTotal] = useState(0);
    const [data, setData] = useState(null);
    const [hasMore, setHasMore] = useState(false);
    const nextPageUrl = useRef(null);
    const [categories, setCategories] = useState(null);
    const [categoriesDebounced] = useDebouncedValue(categories, 500);
    const firstRender = useRef(true);

    useEffect(() => {
        const getAllBlog = async () => {
            const toastId = 'getAllBlog';
            try {
                window.showLoader(true);
                const categoryIds = categoriesDebounced
                    ?.filter((item) => item?.is_checked)
                    .map((item) => item?.id)
                    .join(',');
                let resPhoto = null;
                if (firstRender.current) {
                    let resCategory = null;
                    [resPhoto, resCategory] = await Promise.all([
                        photo.getAll(categoryIds),
                        category.getAll(),
                    ]);
                    setCategories(
                        () =>
                            resCategory.data?.categories?.map(
                                (item) => ({
                                    ...item,
                                    is_checked: false,
                                }),
                            ) ?? [],
                    );
                    firstRender.current = false;
                } else {
                    resPhoto = await photo.getAll(categoryIds);
                }

                window.showLoader(false);
                setData(resPhoto.data?.photos?.data);
                const nextPageUrlFull =
                    resPhoto.data?.photos?.next_page_url;
                if (nextPageUrlFull) {
                    const parsedUrl = new URL(nextPageUrlFull);
                    nextPageUrl.current = `${parsedUrl.pathname}${parsedUrl.search}`;
                    setHasMore(true);
                } else {
                    nextPageUrl.current = null;
                    setHasMore(false);
                }
                setTotal(resPhoto.data?.photos?.total);
            } catch (error) {
                window.showLoader(false);
                window.showToast(
                    toastId,
                    'error',
                    error?.response?.data?.message ?? error?.message,
                );
            }
        };
        getAllBlog();
    }, [categoriesDebounced]);

    const getNextPage = async () => {
        if (nextPageUrl.current) {
            try {
                const res = await blog.getNextPage(
                    nextPageUrl.current,
                );
                setData([
                    ...data,
                    ...(res?.data?.photos?.data ?? []),
                ]);
                const nextPageUrlFull =
                    res.data?.photos?.next_page_url;
                if (nextPageUrlFull) {
                    const parsedUrl = new URL(nextPageUrlFull);
                    nextPageUrl.current = `${parsedUrl.pathname}${parsedUrl.search}`;
                    setHasMore(true);
                } else {
                    nextPageUrl.current = null;
                    setHasMore(false);
                }
            } catch (error) {
                window.showToast(
                    'getNextPage',
                    'error',
                    error?.response?.data?.message ?? error?.message,
                );
            }
        }
    };

    useEffect(() => {
        if (firstRender.current) {
            return;
        }
        const getAllCategory = async () => {
            const toastId = 'getAllCategory';
            try {
                window.showLoader(true);
                const res = await category.getAll();
                window.showLoader(false);
                setCategories(
                    () =>
                        res.data?.categories?.map((item) => ({
                            ...item,
                            is_checked: false,
                        })) ?? [],
                );
            } catch (error) {
                window.showLoader(false);
                window.showToast(
                    toastId,
                    'error',
                    error?.response?.data?.message ?? error?.message,
                );
            }
        };
        getAllCategory();
    }, []);

    return (
        <Layout>
            <div className="mx-auto container">
                <BrowseByGalleryHeader
                    total={total}
                ></BrowseByGalleryHeader>
                <BrowseByGalleryContent
                    data={data}
                    nextPageUrl={nextPageUrl}
                    getNextPage={getNextPage}
                    hasMore={hasMore}
                    categories={categories}
                    setCategories={setCategories}
                ></BrowseByGalleryContent>
            </div>
        </Layout>
    );
};

export default BrowseByGallery;
