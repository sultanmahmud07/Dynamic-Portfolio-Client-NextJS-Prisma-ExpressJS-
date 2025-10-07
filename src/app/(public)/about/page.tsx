
import OurTestimonials from "@/components/modules/About/OurTestimonials/OurTestimonials";
import ResumeSection from "@/components/modules/About/ResumeSection/ResumeSection";
import VisionSection from "@/components/modules/About/VisionSection/VisionSection";
import ShareBanner from "@/components/shared/ShareBanner";

const AboutPage = () => {
  return (
    <div className="">
      <ShareBanner title={"About Me"}></ShareBanner>
      <VisionSection></VisionSection>
      <ResumeSection></ResumeSection>
      <OurTestimonials></OurTestimonials>
      {/* <FAQ></FAQ> */}
    </div>
  );
};

export default AboutPage;
