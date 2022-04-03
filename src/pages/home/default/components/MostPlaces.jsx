import ImageCard from '../../../../components/ImageCard';

const MostPlaces = ({ data }) => {
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

    const getClassName = (index) => {
        if (index === 0) {
            return 'row-span-5 col-span-1';
        }
        if (index > 0 && index <= 4) {
            return 'row-span-3 col-span-1';
        }

        if (index > 4) {
            return 'row-span-6 col-span-1';
        }
    };

    return (
        <div className="px-2 mx-2 py-20 relative">
            <div className="grid grid-rows-6 grid-cols-4 grid-flow-col gap-4 z-10  ">
                <div className="row-span-1 col-span-1 ">
                    <h1 className="text-[32px] font-bold">
                        Most People Go <br />
                        In {getSeason()}
                    </h1>
                </div>
                {data?.map((item, idx) => (
                    <div key={idx} className={getClassName(idx)}>
                        <ImageCard
                            src={item?.photos?.[0]?.photos}
                            alt={item?.title}
                            name={item?.title}
                            href={`/blog/${item?.id}`}
                            location={item?.blog_category?.name}
                        />
                    </div>
                ))}
            </div>
            <div className="bg-theme-gray absolute inset-0 w-screen ml-screen -z-20"></div>
        </div>
    );
};

export default MostPlaces;
