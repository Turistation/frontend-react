import InfiniteScroll from 'react-infinite-scroll-component';

import ImageCard from '../../../../components/ImageCard';

const BrowseByGalleryContent = ({
    data,
    getNextPage,
    hasMore,
    categories,
    setCategories,
}) => {
    return (
        <div className="mt-20">
            <div className="w-full flex flex-row">
                <div className="w-[20%]">
                    <div className="py-5">
                        <h1 className="text-3xl font-bold">
                            Featured Gallery
                        </h1>
                    </div>
                    {categories?.length > 0 && (
                        <div className="text-xl">
                            <h1>Filter By Category</h1>
                            <div>
                                {categories?.map((category) => (
                                    <div key={category.id}>
                                        <input
                                            type="checkbox"
                                            id={category.id}
                                            name={category.name}
                                            value={category.name}
                                            checked={
                                                category.is_checked
                                            }
                                            onChange={() => {
                                                setCategories(
                                                    categories?.map(
                                                        (item) =>
                                                            item.id ===
                                                            category.id
                                                                ? {
                                                                      ...item,
                                                                      is_checked:
                                                                          !item.is_checked,
                                                                  }
                                                                : item,
                                                    ),
                                                );
                                            }}
                                            className="cursor-pointer"
                                        />
                                        <label
                                            htmlFor={category.id}
                                            className="px-2 cursor-pointer"
                                        >
                                            {category.name}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <div className="w-[80%] h-auto overflow-hidden">
                    <InfiniteScroll
                        dataLength={data?.length ?? 0}
                        next={getNextPage}
                        hasMore={hasMore}
                        loader={<h4>Loading...</h4>}
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                                <b>You have seen all gallery</b>
                            </p>
                        }
                        className="overflow-hidden"
                    >
                        <div className="grid  grid-cols-3 grid-flow-row gap-5 z-10 w-full h-auto overflow-hidden">
                            {data?.map((item, index) => (
                                <div
                                    key={index}
                                    className="h-[320px]"
                                >
                                    <ImageCard
                                        src={item?.photos}
                                        alt={
                                            item?.blog_category?.name
                                        }
                                        href="#"
                                        location={
                                            item?.blog_category?.name
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                    </InfiniteScroll>
                </div>
            </div>
        </div>
    );
};

export default BrowseByGalleryContent;
