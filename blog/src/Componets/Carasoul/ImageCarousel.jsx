import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./carasoul.css"
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../../assets/1.webp"
import image2 from "../../assets/2.webp"
import image3 from "../../assets/3.webp"
import image4 from '../../assets/4.webp'
import image5 from '../../assets/5.webp'
import image6 from '../../assets/6.webp'

const images = [
  { src: image1, },
  { src: image2,},
  { src: image3},
      { src: image4, title: "Youtube" },
      { src: image5, title: "Education" },
      { src: image6, title: "Fun" }
  // { src: "/images/countryside.jpg", alt: "Countryside" },
  // { src: "/images/online-learning.jpg", alt: "Online Learning" }
];

export default function ImageCarousel() {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="carousel-slide">
              <img src={image.src} alt={image.alt} className="carousel-image" />
              <div className="overlay">
                <p className="image-text">{image.alt}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
