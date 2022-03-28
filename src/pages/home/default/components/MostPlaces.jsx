import ImageCard from '../../../../components/ImageCard';

const MostPlaces = () => {
    const getSeason = () => {
        // get current season
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentSeason =
            currentMonth >= 3 && currentMonth <= 5
                ? 'Spring'
                : currentMonth >= 6 && currentMonth <= 8
                ? 'Summer'
                : currentMonth >= 9 && currentMonth <= 11
                ? 'Autumn'
                : 'Winter';

        return currentSeason;
    };
    return (
        <>
            <div className="grid grid-rows-6 grid-cols-4 grid-flow-col gap-4 z-10  px-2 mx-2 my-20">
                <div className="row-span-1 col-span-1 ">
                    <h1 className="text-[32px] font-bold">
                        Most People Go <br />
                        In {getSeason()}
                    </h1>
                </div>
                <div className="row-span-5 col-span-1  ">
                    <ImageCard
                        src="https://images.unsplash.com/photo-1558818061-547b1114aa6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="img1"
                        name="Snow Hills"
                        href="https://images.unsplash.com/photo-1558818061-547b1114aa6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        location="Jakarta, Indonesia"
                    />
                </div>
                <div className="row-span-3 col-span-1 ">
                    <ImageCard
                        src="https://images.unsplash.com/photo-1558818061-547b1114aa6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="img1"
                        name="Snow Hills"
                        href="https://images.unsplash.com/photo-1558818061-547b1114aa6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        location="Jakarta, Indonesia"
                    />
                </div>
                <div className="row-span-3 col-span-1 ">
                    <ImageCard
                        src="https://images.unsplash.com/photo-1558818061-547b1114aa6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="img1"
                        name="Snow Hills"
                        href="https://images.unsplash.com/photo-1558818061-547b1114aa6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        location="Jakarta, Indonesia"
                    />
                </div>
                <div className="row-span-3 col-span-1 ">
                    <ImageCard
                        src="https://images.unsplash.com/photo-1558818061-547b1114aa6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="img1"
                        name="Snow Hills"
                        href="https://images.unsplash.com/photo-1558818061-547b1114aa6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        location="Jakarta, Indonesia"
                    />
                </div>
                <div className="row-span-3 col-span-1 ">
                    <ImageCard
                        src="https://images.unsplash.com/photo-1558818061-547b1114aa6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="img1"
                        name="Snow Hills"
                        href="https://images.unsplash.com/photo-1558818061-547b1114aa6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        location="Jakarta, Indonesia"
                    />
                </div>
                <div className="row-span-6 col-span-1 ">
                    <ImageCard
                        src="https://images.unsplash.com/photo-1558818061-547b1114aa6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="img1"
                        name="Snow Hills"
                        href="https://images.unsplash.com/photo-1558818061-547b1114aa6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        location="Jakarta, Indonesia"
                    />
                </div>
            </div>
        </>
    );
};

export default MostPlaces;
