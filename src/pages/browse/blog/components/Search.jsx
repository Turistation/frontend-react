import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Search } from 'tabler-icons-react';

const BrowseByBlogSearch = ({ setQuery, total }) => {
    return (
        <div className="mt-10">
            <div className="relative">
                <LazyLoadImage
                    src="https://images.unsplash.com/photo-1470217957101-da7150b9b681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                    alt="bgsearch"
                    className="w-full max-h-[400px] object-cover rounded-2xl"
                />
                <div className="absolute top-0  text-center w-full h-full flex items-center justify-center ">
                    <h1 className="text-6xl text-white">
                        {total > 0
                            ? `${total} Blog Found`
                            : 'Empty Blog'}
                    </h1>
                </div>
                <div className="z-40  shadow-xl  group hover:scale-110    transition-all duration-300 bg-white absolute -bottom-5 w-[75%] mx-auto left-0 right-0 flex flex-row justify-center items-center rounded-md">
                    <div className="w-[80%] pr-2 flex flex-row items-center ">
                        <Search
                            color="gray"
                            className="pl-3"
                            width={45}
                            height={45}
                        />
                        <input
                            className="w-full outline-none bg-white  py-6 px-5 rounded-[10px] "
                            placeholder="Indonesia, Bali, Russia, ...."
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BrowseByBlogSearch;
