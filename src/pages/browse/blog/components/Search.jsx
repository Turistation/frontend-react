import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Search } from 'tabler-icons-react';

import Button from '../../../../components/button';

const BrowseByBlogSearch = () => {
    return (
        <div>
            <div className="relative">
                <LazyLoadImage
                    src="https://images.unsplash.com/photo-1609720145764-6dab139f492e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
                    alt="bgsearch"
                    className="w-full max-h-[300px] object-cover rounded-2xl"
                />
                <div className="z-50  shadow-xl  group hover:scale-110    transition-all duration-300 bg-white absolute -bottom-5 w-[75%] mx-auto left-0 right-0 flex flex-row justify-center items-center rounded-md">
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
                        />
                    </div>
                    <div className="w-[20%] px-2 ">
                        <Button>Search</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BrowseByBlogSearch;