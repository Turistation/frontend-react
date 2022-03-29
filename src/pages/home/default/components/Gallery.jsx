import ImageCard from '../../../../components/ImageCard';

const Gallery = () => {
    return (
        <div className="px-2 mx-2 py-10 relative">
            <div className="text-center pt-5 pb-10">
                <h1 className="text-[32px] font-bold">Gallery</h1>
                <p className="text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Tincidunt enim molestie massa justo
                    fermentum.Id in non nunc nulla rhoncus
                </p>
            </div>
            <div className="grid grid-rows-6 grid-cols-3 grid-flow-col gap-4 z-10 ">
                <div className="row-span-6 col-span-1  ">
                    <ImageCard
                        src="https://images.unsplash.com/photo-1558818061-547b1114aa6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="img1"
                        name="Snow Hills"
                        href="https://images.unsplash.com/photo-1558818061-547b1114aa6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        location="Jakarta, Indonesia"
                    />
                </div>
                <div className="row-span-6 col-span-1  ">
                    <ImageCard
                        src="https://images.unsplash.com/photo-1558818061-547b1114aa6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="img1"
                        name="Snow Hills"
                        href="https://images.unsplash.com/photo-1558818061-547b1114aa6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        location="Jakarta, Indonesia"
                    />
                </div>
                <div className="row-span-3 col-span-1  ">
                    <ImageCard
                        src="https://images.unsplash.com/photo-1558818061-547b1114aa6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="img1"
                        name="Snow Hills"
                        href="https://images.unsplash.com/photo-1558818061-547b1114aa6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        location="Jakarta, Indonesia"
                    />
                </div>
                <div className="row-span-3 col-span-1  ">
                    <ImageCard
                        src="https://images.unsplash.com/photo-1558818061-547b1114aa6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="img1"
                        name="Snow Hills"
                        href="https://images.unsplash.com/photo-1558818061-547b1114aa6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        location="Jakarta, Indonesia"
                    />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
