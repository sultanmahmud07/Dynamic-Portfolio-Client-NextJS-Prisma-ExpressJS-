import AboutUs from "@/components/modules/About/AboutUs";
import FAQ from "@/components/modules/About/FAQ/FAQ";
import OurTestimonials from "@/components/modules/About/OurTestimonials/OurTestimonials";
import ShareBanner from "@/components/shared/ShareBanner";

const AboutPage = () => {
  return (
    <div className="">
      <ShareBanner title={"About Me"}></ShareBanner>
      <AboutUs></AboutUs>
      <OurTestimonials></OurTestimonials>
      <FAQ></FAQ>
    </div>
  );
};

export default AboutPage;
