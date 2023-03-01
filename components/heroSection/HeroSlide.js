import React from "react";
import Image from "next/image";
import baner1 from "../../public/sliderImages/banner_CCTV.jpg";
import banner2 from "../../public/sliderImages/banner_listbusiness.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
export default function HeroSlide() {
  return (
    <>
      <div className="hero_container">
        <div className="slide_container">
          <Swiper
            Autoplay={true}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <Image src={baner1} alt="image" width={600} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={baner1} alt="image" width={600} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={baner1} alt="image" width={600} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={baner1} alt="image" width={600} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="slide_container">
          <Swiper
            Autoplay={true}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <Image src={banner2} alt="image" width={600} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={banner2} alt="image" width={600} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={banner2} alt="image" width={600} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={banner2} alt="image" width={600} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
