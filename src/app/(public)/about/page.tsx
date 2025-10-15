
import OurTestimonials from "@/components/modules/About/OurTestimonials/OurTestimonials";
import ResumeSection from "@/components/modules/About/ResumeSection/ResumeSection";
import VisionSection from "@/components/modules/About/VisionSection/VisionSection";
import Link from "next/link";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

const AboutPage = () => {
  return (
    <div className="pt-30">
       <div className="category_top bg-gray-100 py-4 md:py-6">
        <div className="main-container">
          <div className="text-[#1F1C1466] text-sm font-semibold flex items-center gap-1">
            <span className="text-xl"><GoHome /></span>
            <Link href={`/`} className="hover:text-primary">Home</Link>
            <span><IoIosArrowForward /></span>
            <Link href={`/about`} className="text-primary">About</Link>
          </div>
        </div>
      </div>
      <VisionSection></VisionSection>
      <ResumeSection></ResumeSection>
      <OurTestimonials></OurTestimonials>
    </div>
  );
};

export default AboutPage;
