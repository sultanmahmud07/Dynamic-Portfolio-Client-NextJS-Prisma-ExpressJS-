import AboutUs from "@/components/modules/About/AboutUs";
import FAQ from "@/components/modules/About/FAQ/FAQ";
import ShareBanner from "@/components/shared/ShareBanner";

const AboutPage = () => {
  return (
    <div className="">
      <ShareBanner title={"About Me"}></ShareBanner>
      <AboutUs></AboutUs>
      <FAQ></FAQ>
    </div>
  );
};

export default AboutPage;
