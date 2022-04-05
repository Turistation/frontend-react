import { useDebouncedValue } from '@mantine/hooks';
import { useEffect, useRef, useState } from 'react';

import Layout from '../../../components/layout';
import blog from '../../../constant/api/blog';
import BrowseByGalleryContent from './components/Content';
import BrowseByGallerySearch from './components/Search';

const BrowseByGallery = () => {
    const [data, setData] = useState(null);
    const [hasMore, setHasMore] = useState(false);
    const nextPageUrl = useRef(null);
    const [query, setQuery] = useState('');
    const [queryDebaounced] = useDebouncedValue(query, 300);
    useEffect(() => {
        const getAllBlog = async () => {
            const toastId = 'getAllBlog';
            try {
                window.showLoader(true);
                const res = await blog.getAll(queryDebaounced);
                window.showLoader(false);
                setData(res.data?.blogs?.data);
                const nextPageUrlFull =
                    res.data?.blogs?.next_page_url;
                if (nextPageUrlFull) {
                    const parsedUrl = new URL(nextPageUrlFull);
                    nextPageUrl.current = `${parsedUrl.pathname}${parsedUrl.search}`;
                    setHasMore(true);
                } else {
                    nextPageUrl.current = null;
                    setHasMore(false);
                }
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
    }, [queryDebaounced]);

    const getNextPage = async () => {
        if (nextPageUrl.current) {
            try {
                const res = await blog.getNextPage(
                    nextPageUrl.current,
                );
                setData([...data, ...(res?.data?.blogs?.data ?? [])]);
                const nextPageUrlFull =
                    res.data?.blogs?.next_page_url;
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

    return (
        <Layout>
            <BrowseByGallerySearch
                setQuery={setQuery}
            ></BrowseByGallerySearch>
            <BrowseByGalleryContent
                data={data}
                nextPageUrl={nextPageUrl}
                getNextPage={getNextPage}
                hasMore={hasMore}
            ></BrowseByGalleryContent>
        </Layout>
    );
};

export default BrowseByGallery;
