import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import resumeData from '../data/resumeData.json';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { summary } = resumeData.personalInfo;

  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-transparent to-[#e8f1f5]" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="group"
        >
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-[#d4e4ed] text-[#2d3748] rounded-full text-sm font-semibold mb-6 hover:bg-[#d4e4ed] hover:scale-105 transition-all duration-300 cursor-default">
              About Me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a202c] mb-8 hover:text-[#2d3748] transition-colors duration-300">
            Building the future of healthcare through data
          </h2>
          <div className="relative bg-gradient-to-br from-[#e8f1f5] to-[#d4e4ed]/30 p-8 rounded-2xl hover:shadow-lg hover:shadow-slate-300/50 transition-all duration-300">
            <div className="absolute -left-2 top-8 bottom-8 w-1 bg-gradient-to-b from-[#2c5f8d] to-[#4a7ba7] rounded-full group-hover:w-1.5 transition-all duration-300"></div>
            <p className="text-lg md:text-xl text-[#1a202c] leading-relaxed pl-4">
              {summary}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
