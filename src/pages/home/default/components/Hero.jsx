import { LazyLoadImage } from 'react-lazy-load-image-component';

import { ReactComponent as Camera } from '../../../../assets/camera-home.svg';
import { ReactComponent as Gps } from '../../../../assets/gps-point-home.svg';
import Button from '../../../../components/button';

const Hero = () => {
    return (
        <div className="w-full py-28">
            <div className="flex flex-row justify-center w-full">
                <div className="w-1/2 h-full px-2 mx-2">
                    <div className=" h-full flex flex-col  justify-center">
                        <div className="mb-3">
                            <h1 className="text-[60px] font-bold leading-[60px] mb-3">
                                Forget About Work, <br />
                                Come Vacation
                            </h1>
                            <p className="text-gray-500 text-xl">
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Tincidunt
                                enim molestie massa justo fermentum.
                                Id in non nunc nulla rhoncus
                            </p>
                        </div>
                        <div className="w-[35%] my-3">
                            <Button color="primary">
                                Browse Now
                            </Button>
                        </div>
                        <div className="flex flex-row items-center w-1/2 justify-between mt-6">
                            <div className="w-1/2 flex flex-col">
                                <Camera className="w-16 h-16" />
                                <p className="my-2">
                                    <b>5000</b> photos
                                </p>
                            </div>
                            <div className="w-1/2 flex flex-col">
                                <Gps className="w-16 h-16" />
                                <p className="my-2">
                                    <b>5000</b> places
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex justify-end px-2 mx-2">
                    <div className="h-[500px] w-[550px]">
                        <LazyLoadImage
                            src="https://images.unsplash.com/photo-1598889493524-750f33d2c8bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt="home"
                            className="rounded-tl-[58px] rounded-br-[58px] w-full h-full object-cover"
                            wrapperClassName="h-full w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
