"use client";

import Slider, { Settings } from "react-slick";
import Image, { StaticImageData } from "next/image";
import img1 from "@@/about/testimonial/client-img.jpg";
import img2 from "@@/about/testimonial/client-img.jpg";
import img3 from "@@/about/testimonial/client-img.jpg";
import img4 from "@@/about/testimonial/client-img.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Define testimonial type
interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: StaticImageData;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John M.",
    role: "Retailer",
    image: img1,
    text: "Magnum 10000K is the fastest-moving product in my store. Customers love the results and keep coming back for more.",
  },
  {
    id: 2,
    name: "David S.",
    role: "Distributor",
    image: img2,
    text: "Since adding Magnum Honey to my product lineup, sales have doubled. Quality is unmatched.",
  },
  {
    id: 3,
    name: "Eric P.",
    role: "Wholesaler",
    image: img3,
    text: "The Magnum brand delivers consistency, quality, and customer satisfaction every time. Highly recommended.",
  },
  {
    id: 4,
    name: "Emily W.",
    role: "Store Manager",
    image: img4,
    text: "Our customers frequently ask for Rhino products by name—because they work. Reliable, safe, and fast-selling.",
  },
];

// ✅ Type for custom arrow props
interface ArrowProps {
  onClick?: () => void;
}

const SamplePrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    className="absolute left-0 md:left-[-2rem] top-1/4 md:top-1/2 transform -translate-y-1/2 z-20 bg-white text-primary rounded-full w-6 md:w-10 h-6 md:h-10 flex items-center justify-center shadow-md"
    onClick={onClick}
    aria-label="Previous Slide"
  >
    <svg className="w-4 h-4 rotate-180" fill="currentColor" viewBox="0 0 20 20">
      <path d="M12.293 15.707a1 1 0 010-1.414L15.586 11H4a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
    </svg>
  </button>
);

const SampleNextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    className="absolute right-0 md:right-[-2rem] top-1/4 md:top-1/2 transform -translate-y-1/2 z-20 bg-white text-primary rounded-full w-6 md:w-10 h-6 md:h-10 flex items-center justify-center shadow-md"
    onClick={onClick}
    aria-label="Next Slide"
  >
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M12.293 15.707a1 1 0 010-1.414L15.586 11H4a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
    </svg>
  </button>
);

const OurTestimonials: React.FC = () => {
  // ✅ Properly typed settings using `Settings` from react-slick
  const settings: Settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center gap-2 mt-6">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="slick-dot cursor-pointer w-5 md:w-6 h-[0.35rem] bg-white/60 rounded-full transition-all duration-300" />
    ),
  };

  return (
    <div className="pb-5">
      <div className="main_container">
        <h2 className="md:py-5 text-[1.4rem] md:text-3xl text-center">
          What My <span className="text-primary">Clients Say</span>
        </h2>
        <div className="slider_wrapper relative py-5">
          <Slider {...settings}>
            {testimonials.map(({ id, name, role, image, text }) => (
              <div
                key={id}
                className="flex w-full px-3 mb-7 md:px-4 items-center justify-center flex-col gap-3 md:gap-6"
              >
                <div className="flex justify-center w-full">
                  <Image
                    src={image}
                    alt={name}
                    width={100}
                    height={100}
                    className="rounded-full w-16"
                  />
                </div>
                <h4 className="text-xl text-center my-1 font-semibold">{name}</h4>
                <p className="text-sm text-center my-1 italic text-black">{role}</p>
                <p className="text-center">{text}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurTestimonials;
