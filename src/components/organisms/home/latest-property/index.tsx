import React from "react";
import { Card } from "../../card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { propertyListData } from "@/constants/propertyListData";
export const LatestProperty = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container px-4 mx-auto">
        <p className="tracking-tight text-gray-700 mb-4">Our Latest Property</p>
        <h2 className="text-5xl md:text-5xl font-heading tracking-tight font-medium mb-10">
          #1 Residence Home Property
        </h2>
        <div className="p-5">
          <Swiper
            direction={"horizontal"}
            modules={[Navigation, Pagination]}
            navigation={true}
            loop={true}
            spaceBetween={30}
            slidesPerView={3}
            autoplay={true}
            enabled={true}
            className="mySwiper"
          >
            {propertyListData.map((item) => (
              <SwiperSlide key={item.id}>
                <Card
                  address={item.address}
                  size={item.size}
                  imageSrc={item.imageSrc}
                  location={item.location}
                  price={item.price}
                  bedNo={item.bed || "N/A"}
                  bath={item.bath || "N/A"}
                  title={item.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
