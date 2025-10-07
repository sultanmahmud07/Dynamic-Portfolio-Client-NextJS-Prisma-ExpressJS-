"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const VisionSection = () => {
      return (
            <section className=" py-10 md:py-16"> <div className="main-container grid md:grid-cols-2 gap-10 items-center">
                  {/* Left Section */}
                   <div>
                         <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                        My vision is to <br />
                        create happy <br />
                        my clients </h2>
                        <p className="text-gray-600 text-base md:text-lg mb-10 leading-relaxed">
                              That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them want more.
                        </p>

                        {/* Counters */}
                        <div className="flex flex-wrap gap-10 md:gap-16">
                              <div>
                                    <h3 className="text-3xl font-bold">
                                          <CountUp end={8} duration={2} />
                                    </h3>
                                    <p className="text-gray-600 text-sm">Award winner</p>
                              </div>
                              <div>
                                    <h3 className="text-3xl font-bold">
                                          <CountUp end={1.2} decimals={1} duration={2} />k
                                    </h3>
                                    <p className="text-gray-600 text-sm">Worldwide client</p>
                              </div>
                              <div>
                                    <h3 className="text-3xl font-bold">
                                          <CountUp end={3.5} decimals={1} duration={2} />k
                                    </h3>
                                    <p className="text-gray-600 text-sm">Job done successfully</p>
                              </div>
                        </div>
                  </div>

                  {/* Right Section */}
                  <div className="flex flex-col items-center md:items-end space-y-10">
                        <div className="flex items-center gap-5">
                              <div className="bg-primary rounded-full w-28 h-28 flex items-center justify-center">
                                    <span className="text-4xl font-extrabold">03+</span>
                              </div>
                              <h3 className="text-3xl md:text-4xl font-semibold leading-tight text-gray-500">
                                    Years of <br /> experience
                              </h3>
                        </div>

                        {/* Contact CTA */}
                        <motion.a
                              href="mailto:hello@henry.com"
                              whileHover={{ scale: 1.05 }}
                              className="bg-black text-white rounded-lg p-6 w-full md:w-[80%] flex justify-between items-center"
                        >
                              <div>
                                    <p className="text-primary text-sm font-semibold mb-1">SAY HELLO!</p>
                                    <p className="text-xl md:text-2xl font-bold">hello@henry.com</p>
                              </div>
                              <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="#FFB84B"
                                    className="w-6 h-6 md:w-8 md:h-8"
                              >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                              </svg>
                        </motion.a>
                  </div>
            </div>
            </section>

      );
};

export default VisionSection;
