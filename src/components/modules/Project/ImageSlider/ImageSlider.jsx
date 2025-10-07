"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Image from "next/image";
import 'react-photo-view/dist/react-photo-view.css';
import { GiClick } from "react-icons/gi";

const CustomPrevArrow = ({ onClick }) => {
  return (
    <button
      className="p_prev_btn z-10 w-8 h-8 rounded-full bg-[#ffffffa7] absolute bottom-5 right-20 text-primary flex items-center justify-center shadow"
      onClick={onClick}
    >
      <FaArrowLeft className="text-base md:text-xl" />
    </button>
  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <button
      className="p_next_btn z-10 w-8 h-8 rounded-full bg-[#ffffffa7] absolute bottom-5 right-4 text-primary flex items-center justify-center shadow"
      onClick={onClick}
    >
      <FaArrowRight className="text-lg font-bold" />
    </button>
  );
};
const ImageSlider = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set the interval to 3 seconds
  };

  return (
    <PhotoProvider>
      <Slider {...settings}>
        {images.map((item, i) => {
          return (
            <div key={i} className="image_wrap relative">
              <span className="click_icon  animate-bounce text-white font-bold text-xl md:text-3xl absolute top-1/2 left-1/2"><GiClick /></span>
              <PhotoView src={item}>
                <div className="w-full aspect-video">
                  <Image
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover cursor-pointer"
                    src={item}
                    alt="project-details-image"
                  />
                </div>
              </PhotoView>
            </div>
          );
        })}
      </Slider>
    </PhotoProvider>
  );
};

export default ImageSlider;
