import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as ArrowRight } from '../../../../assets/arrow-right.svg';
import placeholderImg from '../../../../assets/No-Image-Placeholder.png';

const Recent = ({ data }) => {
    const dataRecent = useMemo(
        () =>
            data
                ? [...data]
                : [
                      {
                          id: 1,
                          image_url: 'https://picsum.photos/200/300',
                          blog_name: 'Italy Van Java',
                          created_by: 'John Doe',
                          created_at: '2020-01-01',
                      },
                      {
                          id: 1,
                          image_url: 'https://picsum.photos/200/300',
                          blog_name: 'Italy Van Java',
                          created_by: 'John Doe',
                          created_at: '2020-01-01',
                      },
                      {
                          id: 1,
                          image_url: 'https://picsum.photos/200/300',
                          blog_name: 'Italy Van Java',
                          created_by: 'John Doe',
                          created_at: '2020-01-01',
                      },
                      {
                          id: 1,
                          image_url: 'https://picsum.photos/200/300',
                          blog_name: 'Italy Van Java',
                          created_by: 'John Doe',
                          created_at: '2020-01-01',
                      },
                  ],
        [data],
    );

    return (
        <div>
            {dataRecent.length == 0 && (
                <div className="w-full text-center py-64">
                    <h1 className="text-[80px] font-bold">
                        No Activity in a few days{' '}
                    </h1>
                </div>
            )}
            {dataRecent.length > 0 && (
                <>
                    <div className="my-3">
                        <h1 className="text-3xl">Recent Blog</h1>
                    </div>
                    <div className="my-3">
                        <ul className="w-full">
                            <li className="flex flex-row justify-between bg-theme-brown-300 my-3 items-center rounded-md py-3 px-0.5">
                                <div className="flex flex-row lg:px-2 w-1/2  lg:w-1/4 items-center">
                                    <div className="px-2 w-1/2"></div>
                                    <div className="px-2 lg:mr-0 lg:px-2 w-full text-xs md:text-lg truncate">
                                        Blog Name
                                    </div>
                                </div>
                                <div className="px-1 lg:px-2 lg:w-1/4 w-1/5 flex justify-center">
                                    <p className="text-xs md:text-lg truncate">
                                        Created By
                                    </p>
                                </div>
                                <div className="px-1 lg:px-2 lg:w-1/4 w-1/5 flex justify-center">
                                    <p className="text-xs md:text-lg truncate">
                                        Created At
                                    </p>
                                </div>
                                <div className="lg:px-5 lg:w-1/4 w-1/12 flex justify-end "></div>
                            </li>
                            {dataRecent?.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex flex-row justify-between bg-theme-brown-300 my-3 items-center rounded-md py-3 px-0.5 bg-white shadow-lg"
                                >
                                    <div className="flex flex-row lg:px-2 w-1/2  lg:w-1/4 items-center">
                                        <div className="px-2 w-1/2">
                                            <div className="rounded-md">
                                                <img
                                                    className="rounded-md w-[100px] h-[100px]"
                                                    src={
                                                        item.image_url
                                                            ? item.image_url
                                                            : placeholderImg
                                                    }
                                                    alt="product"
                                                />
                                            </div>
                                        </div>
                                        <div className="px-2 lg:mr-0 lg:px-2 w-full text-xs md:text-lg truncate">
                                            {item.blog_name}
                                        </div>
                                    </div>
                                    <div className="px-1 lg:px-2 lg:w-1/4 w-1/5 flex justify-center">
                                        <p className="text-xs md:text-lg truncate">
                                            {item.created_at}
                                        </p>
                                    </div>
                                    <div className="px-1 lg:px-2 lg:w-1/4 w-1/4 flex justify-center">
                                        <p className="text-xs md:text-lg truncate">
                                            {new Date(
                                                item.created_at,
                                            ).toLocaleString()}
                                        </p>
                                    </div>
                                    <div className="lg:px-5 lg:w-1/4 w-1/12 flex justify-end ">
                                        <Link
                                            to={`/items/edit/${item.id}`}
                                        >
                                            <ArrowRight
                                                className="fill-theme-blue-300"
                                                width="20"
                                            />
                                        </Link>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
};

export default Recent;
