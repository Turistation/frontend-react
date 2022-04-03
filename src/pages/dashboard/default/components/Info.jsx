import { useMemo } from 'react';

const Info = ({ data }) => {
    const info = useMemo(
        () => ({
            total_comments: data?.total_comments ?? 0,
            total_blog: data?.total_blog ?? 0,
            total_visited: data?.total_visitor ?? 0,
        }),
        [data],
    );

    return (
        <div className="flex flex-col md:flex-row py-5 justify-between">
            <div className="w-full md:w-1/3 lg:1/4 bg-theme-brown-300 my-2 md:my-0 md:mr-5 rounded-lg p-5 lg:p-8 bg-white shadow-lg">
                <div>
                    <p>Total Comments</p>
                </div>

                <div className="text-4xl py-4 font-semibold">
                    {info.total_comments}
                </div>
            </div>
            <div className="w-full md:w-1/3 lg:1/4 bg-theme-brown-300 my-2 md:my-0 md:mx-5 rounded-lg p-5 lg:p-8 bg-white shadow-lg">
                <div>
                    <p>Total Blog</p>
                </div>
                <div className="text-4xl py-4 font-semibold">
                    {info.total_blog}
                </div>
            </div>
            <div className="w-full md:w-1/3 lg:1/4 bg-theme-brown-300 my-2 md:my-0 md:ml-5 rounded-lg p-5 lg:p-8 bg-white shadow-lg">
                <div>
                    <p>Total Visited</p>
                </div>
                <div className="text-4xl py-4 font-semibold">
                    {info.total_visited}
                </div>
            </div>
        </div>
    );
};

export default Info;
