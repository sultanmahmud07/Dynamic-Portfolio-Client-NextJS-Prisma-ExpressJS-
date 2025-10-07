import { motion } from "framer-motion";
import Image from "next/image";
import profileImg from "@@/about/about-me.png"; // replace with your image path

const AboutSection = () => {
  return (
    <motion.section
      key="about"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      <div className="w-full md:px-20">
        <Image
          src={profileImg}
          alt="Profile photo"
          width={500}
          className="w-full hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Right Side - Text */}
      <div className="leading-relaxed space-y-4">
        <h2 className="text-start text-3xl font-bold text-gray-900 mb-2">About Me</h2>

        <p className="text-start">
          I’m <strong className="text-gray-900">Md Shimul Molla</strong>  a passionate{" "}
          MERN Stack Developerwho
          thrives on crafting{" "}
          <span className="font-medium text-gray-800">
            scalable, high-performance, and user-focused web applications
          </span>
          . My experience spans developing RESTful APIs, interactive dashboards,
          and full-stack systems that bring ideas to life.
        </p>

        <p className="text-start">
          I build modern, maintainable codebases using{" "}
          <strong>React</strong>, <strong>Next.js</strong>,{" "}
          <strong>Node.js</strong>, <strong>Express</strong>, and{" "}
          <strong>MongoDB</strong>. I’m also skilled in relational databases like{" "}
          <strong>PostgreSQL</strong> and <strong>MySQL</strong>, ensuring
          flexibility across diverse data systems.<br></br> My contact <strong>+8801327357894</strong>
        </p>

        <p className="text-start text-gray-600 italic border-l-4 border-gray-300 pl-4 mt-6">
          “I believe great software is built with purpose, precision, and a deep
          understanding of user experience.”
        </p>
      </div>
    </motion.section>
  );
};

export default AboutSection;
