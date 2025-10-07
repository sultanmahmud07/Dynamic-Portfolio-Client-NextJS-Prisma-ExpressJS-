"use client";
import { RiNextjsFill } from "react-icons/ri";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDocker, FaHtml5, FaNodeJs, FaReact, } from "react-icons/fa";
import { PiGraduationCap } from "react-icons/pi";
import { MdWork } from "react-icons/md";
import { SiExpress, SiMongodb, SiMysql, SiPostgresql, SiRedux, SiTailwindcss } from "react-icons/si";
import AboutSection from "./AboutSection";
import { IoLogoJavascript } from "react-icons/io5";

const tabs = ["About Me", "Experience", "Education", "Skills"];

const ResumeSection = () => {
      const [activeTab, setActiveTab] = useState("About Me");

  const renderContent = () => {
switch (activeTab) {
case "About Me":
return (<AboutSection></AboutSection>);

case "Experience":
  return (
    <motion.div
      key="experience"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto text-left"
    >
      {[
        {
          title: "Full Stack Developer",
          company: "United Saud Group",
          period: "2023 - Present",
          location: "Banani",
          desc: "Developing enterprise-grade applications using the MERN stack. Responsible for creating RESTful APIs, managing databases, and building admin dashboards. Integrated third-party services to enhance business workflows and client engagement.",
        },
        {
          title: "Frontend Developer",
          company: "Innovative IT",
          period: "2023 - 2024",
          location: "Mirpur",
          desc: "Developed responsive and optimized frontends using React.js and Tailwind CSS. Collaborated closely with backend teams to integrate APIs, enhance performance, and improve user experiences across multiple devices.",
        },
      ].map((job, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border">
          <MdWork className="text-3xl text-[#FFB84B] mb-2" />
          <h4 className="font-bold text-lg mb-1">{job.title}</h4>
          <p className="text-sm text-gray-500">
            {job.company} | {job.period} | {job.location}
          </p>
          <p className="mt-2 text-gray-700 text-sm">{job.desc}</p>
        </div>
      ))}
    </motion.div>
  );

case "Education":
  return (
    <motion.div
      key="education"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-2xl mx-auto space-y-6"
    >
      {[
        {
          degree: "B.Sc. in Computer Science",
          institute: "Uttara University",
          period: "2023 - Present",
          location: "Dhaka",
          desc: "Studying core areas of computer science such as data structures, algorithms, and software engineering. Engaged in hands-on academic projects involving modern web development and application design.",
        },
        {
          degree: "Diploma in Electrical Engineering",
          institute: "Confidence Polytechnic Institute",
          period: "2019 - 2023",
          location: "Manikganj",
          desc: "Completed a 4-year diploma focused on electrical systems, power circuits, and automation. Built a strong technical foundation that supports my transition into full-stack software development.",
        },
      ].map((edu, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border text-left">
          <PiGraduationCap className="text-3xl text-[#FFB84B] mb-2" />
          <h4 className="font-bold text-lg mb-1">{edu.degree}</h4>
          <p className="text-sm text-gray-500">
            {edu.institute} | {edu.period} | {edu.location}
          </p>
          <p className="mt-2 text-gray-700 text-sm">{edu.desc}</p>
        </div>
      ))}
    </motion.div>
  );

case "Skills":
  const skills = [
    { icon: <FaReact />, title: "React.js", percent: 90 },
    { icon: <RiNextjsFill />, title: "Next.js", percent: 85 },
    { icon: <FaNodeJs />, title: "Node.js", percent: 88 },
    { icon: <SiExpress />, title: "Express.js", percent: 85 },
    { icon: <SiMongodb />, title: "MongoDB", percent: 90 },
    { icon: <SiMysql />, title: "MySQL", percent: 80 },
    { icon: <SiPostgresql />, title: "PostgreSQL", percent: 75 },
    { icon: <IoLogoJavascript />, title: "JavaScript", percent: 92 },
    { icon: <FaHtml5 />, title: "HTML & CSS", percent: 95 },
    { icon: <SiTailwindcss />, title: "Tailwind CSS", percent: 90 },
    { icon: <SiRedux />, title: "Redux Toolkit", percent: 85 },
    { icon: <FaDocker />, title: "Docker", percent: 70 },
  ];
  return (
    <motion.div
      key="skills"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
    >
      {skills.map((s, i) => (
        <div
          key={i}
          className="p-6 bg-white rounded-2xl flex flex-col items-center justify-center gap-3 border"
        >
          <span className="text-3xl">{s.icon}</span>
          <h4 className="font-bold">{s.title}</h4>
          <p className="text-sm text-gray-600">{s.percent}%</p>
        </div>
      ))}
    </motion.div>
  );

default:
  return null;

}
};


      return (
            <section className="bg-[#f7f7f7] py-14 md:py-20">
                  <div className="main-container  text-center">
                        <p className="text-primary font-semibold mb-3">Resume</p>
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-8">
                              All over my details find here
                              <span className="text-primary">...</span>
                        </h2>

                        <div className="flex flex-wrap justify-center gap-3 mb-5 md:mb-10">
                              {tabs.map((tab) => (
                                    <button
                                          key={tab}
                                          onClick={() => setActiveTab(tab)}
                                          className={`px-5 py-2 cursor-pointer rounded font-semibold text-sm md:text-base transition-all ${activeTab === tab
                                                ? "bg-black text-white"
                                                : "bg-white hover:bg-gray-200"
                                                }`}
                                    >
                                          {tab}
                                    </button>
                              ))}
                        </div>

                        <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
                  </div>
            </section>
      )
}

export default ResumeSection
