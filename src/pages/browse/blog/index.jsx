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
    const [query, setQuery] = useState(null);
    const [queryDebaounced] = useDebouncedValue(query, 300);

    const getBlogs = async (query = null, page = null) => {
        const res = await blog.getAll(query, page);

        const nextPageUrlFull = res.data?.blogs?.next_page_url;
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
        setTotal(res.data?.blogs?.total);

        return res.data?.blogs?.data;
    };

    useEffect(() => {
        const getAllBlog = async () => {
            const toastId = 'getAllBlog';
            try {
                window.showLoader(true);
                const res = await getBlogs(queryDebaounced);

                setData(res);
                window.showLoader(false);
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
    }, [queryDebaounced]);

    const getNextPage = async () => {
        if (nextPageUrl.current) {
            try {
                const res = await getBlogs(null, nextPageUrl.current);
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
            </div>
        </Layout>
    );
};

export default BrowseByBlog;
