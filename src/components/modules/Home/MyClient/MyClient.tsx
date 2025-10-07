"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import img1 from "@@/home/clients/1.png";
import img2 from "@@/home/clients/2.png";
import img3 from "@@/home/clients/3.png";
import img4 from "@@/home/clients/4.png";
import img5 from "@@/home/clients/5.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MyClients = () => {
      const clientData = [
            { id: 1, image: img1 },
            { id: 2, image: img2 },
            { id: 3, image: img3 },
            { id: 5, image: img5 },
            { id: 1, image: img1 },
            { id: 4, image: img4 },
            { id: 5, image: img5 },
            { id: 3, image: img3 },
            { id: 1, image: img1 },
      ];

      // ✅ Slider settings
      const settings = {
            dots: false,          // hide dots
            arrows: false,        // hide arrows
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,  // 2s interval
            speed: 800,           // slide speed
            slidesToShow: 8,      // show 5 logos
            slidesToScroll: 1,
            pauseOnHover: false,
            responsive: [
                  {
                        breakpoint: 1024,
                        settings: { slidesToShow: 5 },
                  },
                  {
                        breakpoint: 768,
                        settings: { slidesToShow: 4 },
                  },
                  {
                        breakpoint: 480,
                        settings: { slidesToShow: 3 },
                  },
            ],
      };

      return (
            <section className="py-5 md:py-10">
                  <Slider {...settings}>
                        {clientData.map((client) => (
                              <div key={client.id} className="px-4 md:px-6 flex items-center justify-center">
                                    <Image
                                          src={client.image}
                                          alt="client-logo"
                                          width={200}
                                          height={200}
                                          className="w-full px-2 transition-transform duration-700 ease-in-out hover:scale-110"
                                    />
                              </div>
                        ))}
                  </Slider>
            </section>
      );
};

export default MyClients;