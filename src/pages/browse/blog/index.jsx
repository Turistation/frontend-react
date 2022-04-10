import { useDebouncedValue } from '@mantine/hooks';
import { useEffect, useRef, useState } from 'react';

import Layout from '../../../components/layout';
import blog from '../../../constant/api/blog';
import BrowseByBlogContent from './components/Content';
import BrowseByBlogSearch from './components/Search';

const BrowseByBlog = () => {
    const [data, setData] = useState(null);
    const [total, setTotal] = useState(0);
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
                setTotal(res.data?.blogs?.total);
                window.showLoader(false);
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
            <BrowseByBlogSearch
                setQuery={setQuery}
                total={total}
            ></BrowseByBlogSearch>
            <BrowseByBlogContent
                data={data}
                nextPageUrl={nextPageUrl}
                getNextPage={getNextPage}
                hasMore={hasMore}
            ></BrowseByBlogContent>
        </Layout>
    );
};

export default BrowseByBlog;
