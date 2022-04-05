import parse from 'html-react-parser';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const BrowseByBlogContent = ({ data }) => {
    return (
        <div className="mt-20">
            <div className="py-5">
                <h1 className="text-3xl font-bold">Featured Blog</h1>
            </div>
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
                            <div className="py-2">
                                <p className="text-gray-500">
                                    {item?.admin_blog?.name ?? ''},{' '}
                                    {new Date(
                                        item?.created_at,
                                    ).toLocaleString()}{' '}
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
        </div>
    );
};

export default BrowseByBlogContent;
