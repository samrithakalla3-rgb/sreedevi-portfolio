import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import resumeData from '../data/resumeData.json';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { summary } = resumeData.personalInfo;

  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-transparent to-[#FFF9FF]" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="group"
        >
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-[#F3E8FF] text-[#9370DB] rounded-full text-sm font-semibold mb-6 hover:bg-[#E6E6FA] hover:scale-105 transition-all duration-300 cursor-default">
              About Me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#4A4458] mb-8 hover:text-[#9370DB] transition-colors duration-300">
            Building the future of healthcare through data
          </h2>
          <div className="relative bg-gradient-to-br from-[#F9F7FE] to-[#F3E8FF]/30 p-8 rounded-2xl hover:shadow-lg hover:shadow-purple-200/50 transition-all duration-300">
            <div className="absolute -left-2 top-8 bottom-8 w-1 bg-gradient-to-b from-[#9370DB] to-[#C39BD3] rounded-full group-hover:w-1.5 transition-all duration-300"></div>
            <p className="text-lg md:text-xl text-[#4A4458] leading-relaxed pl-4">
              {summary}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
