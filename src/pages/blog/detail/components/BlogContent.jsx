const BlogContent = ({ data }) => {
    return (
        <div className="px-2 mx-2 w-full flex  justify-center my-10">
            <div className="w-[80%]">
                <p className="p-0 text-gray-500">
                    {' '}
                    By {data?.admin_blog?.name ?? ''},{' '}
                    {new Date(data?.created_at).toLocaleString()}
                </p>
                <h1 className="text-[70px] mb-5 mt-1">
                    {data?.title ?? ''}
                </h1>
                <div
                    dangerouslySetInnerHTML={{
                        __html: data?.description ?? '',
                    }}
                ></div>
            </div>
        </div>
    );
};

export default BlogContent;
