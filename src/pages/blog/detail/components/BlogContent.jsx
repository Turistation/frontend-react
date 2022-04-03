const BlogContent = ({ data }) => {
    return (
        <div className="px-2 mx-2 w-full flex justify-center my-10">
            <div className="w-[80%]">
                <h1 className="text-[70px] my-5">
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
