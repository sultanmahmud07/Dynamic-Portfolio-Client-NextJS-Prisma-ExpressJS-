import Image from 'next/image'
import about from '@@/about/who-we-are.jpg'

const AboutUs = () => {
      return (
            <div className='py-8 md:py-14'>
                  <div className="main-container">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                              {/* Left Content */}
                              <div>
                                    <h5 className='text-primary font-bold uppercase my-2 text-sm'>About us</h5>
                                    <h2 className='section_title text-2xl md:text-4xl leading-snug '>
                                          Reliable Parcel Delivery, Anytime, Anywhere
                                    </h2>
                                    <p className="my-1 md:my-5">
                                          Our Parcel Delivery System is dedicated to making shipping and receiving parcels fast, safe, and convenient. Whether you are sending documents, gifts, or goods, we provide real-time tracking, secure handling, and timely deliveries across all regions. Our platform is designed for both individuals and businesses, offering seamless management of shipments from creation to delivery confirmation.
                                    </p>
                                    <p className="my-1 md:my-3">
                                          With a focus on customer satisfaction, transparency, and efficiency, we aim to simplify logistics and ensure every parcel reaches its destination reliably. Trust us to handle your shipments while you focus on what matters most.
                                    </p>
                              </div>
                              {/* Right Image */}
                              <div className="w-full">
                                    <div className="w-full bg-secondary p-4">
                                          <Image
                                                src={about}
                                                alt="Parcel Delivery"
                                                className="w-full"
                                          />
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default AboutUs
