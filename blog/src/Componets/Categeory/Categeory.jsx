import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Cate.css"; // Import the new CSS file

import image1 from "../../assets/Tech.webp";
import image2 from "../../assets/2.webp";
import image3 from "../../assets/3.webp";
import image4 from '../../assets/4.webp'
import image5 from '../../assets/5.webp'
import image6 from '../../assets/6.webp'

const categories = [
    { src: image1, title: "Technology" },
    { src: image2, title: "Lifestyle" },
    { src: image3, title: "Travel" },
    { src: image6, title: "Youtube" },
    { src: image5, title: "Education" },
    { src: image4, title: "Fun" }
];

export default function TrendingTopicsCarousel() {
    return (
        <div className="trending-carousel">
            <div className="container">
                <div className="row align-items-center mb--30">
                    <div className="col-lg-6 col-md-8 col-sm-8 col-12">
                        <div className="section-title">
                            <h2 className="title">Trending Topics</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-4 col-sm-4 col-12">
                        <div className="see-all-topics text-start text-sm-end mt_mobile--20">
                            <a className="axil-link-button" href="#">See All Topics</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={4}
                            navigation
                            loop
                            breakpoints={{
                                320: { slidesPerView: 1 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 4 }
                            }}
                        >
                            {categories.map((category, index) => (
                                <SwiperSlide key={index}>
                                    <div className="single-cat">
                                        <div className="inner">
                                            <a href="#">
                                                <div className="thumbnail">
                                                    <img src={category.src} alt={category.title} />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">{category.title}</h5>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}
