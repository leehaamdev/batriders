import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";



import Contact from './Contact';
import avatar from './avatar.png'



function Customers() {
    return ( 
        <div className="bg-white text-back flex flex-col items-center">
            <h1 className="text-3xl m-12 font-medium">Trusted by reputable brands and businesses</h1>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <div className='flex flex-col items-center text-center'>
                            <img src={avatar}  className="m-12"/>
                            <p className='text-bold m-8 mx-24'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud </p>
                            <h1 className='text-bold text-2xl m-3'>Mohammad Asgari </h1>
                            <h2 className='mb-12'>Robat Air - CEO</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col items-center text-center'>
                            <img src={avatar}  className="m-12"/>
                            <p className='text-bold m-8 mx-24'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud </p>
                            <h1 className='text-bold text-2xl m-3'>Mohammad Asgari </h1>
                            <h2 className='mb-12'>Robat Air - CEO</h2>
                        </div>
                    </SwiperSlide>
                </Swiper>
            <Contact />
        </div>
     );
}

export default Customers;