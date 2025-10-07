import about1 from '@@/about/international-courier-service.jpeg'
import about2 from '@@/about/about-img.jpg'
import aboutIcon from '@@/about/delivery-icon.png'
import { FaHeart, FaEye } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const About = () => {
  return (
    <div className='py-8 md:py-10'>
      <div className="main-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16">
          {/* Left Images */}
          <div className="relative md:pt-6">
            <Image
              src={about1}
              alt="Child"
              className="w-5/6 rounded-xl transition-transform duration-500 hover:scale-105"
            />
            <Image
              src={about2}
              alt="Silhouette"
              className="w-2/5 transition-transform duration-500 hover:scale-105 absolute bottom-[-20px] md:bottom-5 right-0 rounded-lg border-4 border-white shadow-lg"
            />
            <Image
              src={aboutIcon}
              alt="Icon"
              className="w-16 rounded-full transition-transform duration-500 hover:scale-105 absolute top-40 left-[-30px] md:left-[-40px]"
            />
          </div>

          {/* Right Content */}
         <div>
  <h5 className='text-primary font-bold uppercase my-2 text-sm'>Welcome to SwiftParcel</h5>
  <h1 className='font-semibold text-3xl md:text-4xl leading-snug mb-4'>
    Reliable Delivery <br /> Across the Nation
  </h1>
  <p className="text my-5">
    Experience fast, secure, and affordable parcel services. From documents to heavy shipments, 
    we ensure your deliveries reach the right place at the right time.
  </p>

  {/* Mission + Vision */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div className="bg-secondary p-3 rounded">
      <h5 className="my-2 flex items-center gap-2 font-semibold text-lg text-primary">
        <span><FaHeart /></span>My Mission
      </h5>
      <p className="text-sm">
        To simplify parcel delivery with technology-driven solutions and trusted logistics support. 
      </p>
    </div>
    <div className="bg-secondary p-3 rounded">
      <h5 className="my-2 flex items-center gap-2 font-semibold text-lg text-primary">
        <span><FaEye /></span>My Vision
      </h5>
      <p className="text-sm">
        To become the most reliable and customer-friendly courier service, connecting businesses and people everywhere.
      </p>
    </div>
  </div>

  {/* Progress Bars */}
  <div className="space-y-4">
    {/* On-Time Delivery */}
    <div>
      <div className="flex justify-between mb-1 font-semibold text-sm">
        <span>Frontend Skills on</span>
        <span>95%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-primary rounded-full" style={{ width: '95%' }}></div>
      </div>
    </div>

    {/* Customer Satisfaction */}
    <div>
      <div className="flex justify-between mb-1 font-semibold text-sm">
        <span>Backend Skills on</span>
        <span>88%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-primary rounded-full" style={{ width: '88%' }}></div>
      </div>
    </div>
  </div>

  {/* About Us Button */}
  <div className="mt-6">
    <Link href={"/about"}>
    <Button className="cursor-pointer text-white px-6 py-2 rounded-md text-sm font-semibold shadow">
      About Us
    </Button>
    </Link>
  </div>
</div>

        </div>
      </div>
    </div>
  )
}

export default About
