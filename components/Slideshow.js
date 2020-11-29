import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper.scss';
import Image from 'next/image'

export default function Slideshow() {
    return (
        <div className="home-slide__wrapper">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    {/* <Image src="/images/slide-1.jpg" layout="fill" /> */}
                </SwiperSlide>
                <SwiperSlide>
                    {/* <Image src="/images/slide-2.jpg" layout="fill" /> */}
                </SwiperSlide>
            </Swiper>
        </div>
    )
}