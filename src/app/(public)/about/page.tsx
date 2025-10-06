import AboutUs from "@/components/modules/About/AboutUs";
import ShareBanner from "@/components/shared/ShareBanner";

const AboutPage = () => {
  return (
    <div className="">
      <ShareBanner title={"About Me"}></ShareBanner>
      <AboutUs></AboutUs>
    </div>
  );
};

export default AboutPage;
