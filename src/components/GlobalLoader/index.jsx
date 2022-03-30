import { LineWave } from 'react-loader-spinner';
import { useSelector } from 'react-redux';

const GlobalLoader = ({ isActive }) => {
    const loader = useSelector((state) => state.loader);

    if (loader.isActive || isActive) {
        return (
            <div className="fixed flex items-center justify-center w-full h-full bg-gray-400 z-30 bg-opacity-50">
                <LineWave
                    color="#247BCB"
                    height={310}
                    width={310}
                    ariaLabel="three-circles-rotating"
                />
            </div>
        );
    }
    return '';
};

export default GlobalLoader;
