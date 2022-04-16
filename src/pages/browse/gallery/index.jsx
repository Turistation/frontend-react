import { useDebouncedValue } from '@mantine/hooks';
import { useEffect, useRef, useState } from 'react';

import Layout from '../../../components/layout';
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
    const firstDebounce = useRef(true);

    const getPhotos = async (categoryId = null, page = null) => {
        const resPhoto = await photo.getAll(categoryId, page);
        const nextPageUrlFull = resPhoto?.data?.photos?.next_page_url;
        if (nextPageUrlFull) {
            const parsedUrl = new URL(nextPageUrlFull);
            const params = new Proxy(
                new URLSearchParams(parsedUrl.search),
                {
                    get: (searchParams, prop) =>
                        searchParams.get(prop),
                },
            );
            nextPageUrl.current = params?.page;
            setHasMore(true);
        } else {
            nextPageUrl.current = null;
            setHasMore(false);
        }
        setTotal(resPhoto.data?.photos?.total);

        return resPhoto.data?.photos?.data ?? [];
    };

    useEffect(() => {
        if (firstDebounce.current && !firstRender.current) {
            firstDebounce.current = false;
            return;
        }
        const getAllBlog = async () => {
            const toastId = 'getAllBlog';
            try {
                window.showLoader(true);
                const categoryIdArr = categoriesDebounced
                    ?.filter((item) => item?.is_checked)
                    .map((item) => item?.id);
                const categoryIds =
                    categoryIdArr?.length > 0
                        ? categoryIdArr.join(',')
                        : null;

                let resPhoto = null;
                if (firstRender.current) {
                    let resCategory = null;
                    [resPhoto, resCategory] = await Promise.all([
                        getPhotos(categoryIds),
                        category.getAll(),
                    ]);
                    setCategories(
                        resCategory?.data?.categories?.map(
                            (item) => ({
                                ...item,
                                is_checked: false,
                            }),
                        ) ?? [],
                    );
                    firstRender.current = false;
                } else {
                    resPhoto = await getPhotos(categoryIds);
                }

                window.showLoader(false);
                setData(resPhoto);
            } catch (error) {
                window.showLoader(false);
                window.showToast(
                    toastId,
                    'error',
                    error?.response?.data?.data?.error ??
                        error?.message,
                );
            }
        };
        getAllBlog();
    }, [categoriesDebounced]);

    const getNextPage = async () => {
        if (nextPageUrl.current) {
            try {
                const res = await getPhotos(
                    null,
                    nextPageUrl.current,
                );
                setData([...(data ?? []), ...(res ?? [])]);
            } catch (error) {
                window.showToast(
                    'getNextPage',
                    'error',
                    error?.response?.data?.data?.error ??
                        error?.message,
                );
            }
        }
    };

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
