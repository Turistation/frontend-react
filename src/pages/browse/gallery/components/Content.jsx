import parse from 'html-react-parser';
import InfiniteScroll from 'react-infinite-scroll-component';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';

const BrowseByGalleryContent = ({ data, getNextPage, hasMore }) => {
    return (
        <div className="mt-20">
            <div className="py-5">
                <h1 className="text-3xl font-bold">Featured Blog</h1>
            </div>
            <InfiniteScroll
                dataLength={data?.length ?? 0}
                next={getNextPage}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>You have seen all blog</b>
                    </p>
                }
            >
                <div>
                    {data?.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-row w-full py-5"
                        >
                            <div className="w-[20%] h-60 ">
                                <LazyLoadImage
                                    src={item?.photos?.[0]?.photos}
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </div>
                            <div className="w-[80%] px-5">
                                <Link
                                    to={`/blog/${item?.id}`}
                                    className="text-3xl font-bold"
                                >
                                    {item?.title}
                                </Link>
                                <div className="py-2 flex flex-row items-center">
                                    <p className="text-gray-500">
                                        {item?.admin_blog?.name ?? ''}
                                        ,{' '}
                                        {new Date(
                                            item?.created_at,
                                        ).toLocaleString()}{' '}
                                    </p>
                                    <p className="px-4">|</p>
                                    <Rating
                                        ratingValue={
                                            item?.blog_comments?.reduce(
                                                (total, item) =>
                                                    total + item.star,
                                                0,
                                            ) /
                                            item?.blog_comments
                                                ?.length
                                        }
                                        size={30}
                                        readonly
                                    />
                                    <p className="px-2">
                                        {item?.blog_comments?.reduce(
                                            (total, item) =>
                                                total + item.star,
                                            0,
                                        ) /
                                            item?.blog_comments
                                                ?.length /
                                            20 >
                                        0
                                            ? (
                                                  item?.blog_comments?.reduce(
                                                      (total, item) =>
                                                          total +
                                                          item.star,
                                                      0,
                                                  ) /
                                                  item?.blog_comments
                                                      ?.length /
                                                  20
                                              ).toFixed(2)
                                            : 0}
                                    </p>
                                </div>
                                <div className="max-h-[170px] truncate">
                                    {
                                        parse(
                                            item?.description ?? '',
                                        ).filter(
                                            (elm) =>
                                                elm?.type === 'p' &&
                                                elm?.props?.children
                                                    ?.type !== 'br',
                                        )?.[0]
                                    }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default BrowseByGalleryContent;
