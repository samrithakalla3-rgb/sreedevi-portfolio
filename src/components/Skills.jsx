import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap } from 'lucide-react';
import resumeData from '../data/resumeData.json';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Programming",
      skills: resumeData.skills.programming,
    },
    {
      title: "Data Visualization",
      skills: resumeData.skills.visualization,
    },
    {
      title: "EHR Systems",
      skills: resumeData.skills.ehrSystems,
    },
    {
      title: "Tools",
      skills: resumeData.skills.tools,
    },
    {
      title: "Specializations",
      skills: resumeData.skills.specializations,
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-[#e8f1f5] to-[#d4e4ed]" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#d4e4ed] text-[#4a5568] rounded-full text-sm font-semibold mb-6 hover:bg-[#d4e4ed] hover:scale-105 transition-all duration-300 cursor-default">
            Skills & Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a202c] hover:text-[#2c5f8d] transition-colors duration-300">Technical Skills</h2>
        </motion.div>

        <div className="space-y-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group/category"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2c5f8d] to-[#4a7ba7] rounded-lg flex items-center justify-center shadow-md group-hover/category:scale-110 group-hover/category:rotate-3 transition-all duration-300">
                  <Zap className="w-5 h-5 text-white group-hover/category:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#1a202c] group-hover/category:text-[#2c5f8d] transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileHover={{ scale: 1.08, y: -4 }}
                    className="px-5 py-2.5 bg-gradient-to-br from-[#e8f1f5] to-[#d4e4ed] text-[#1a202c] rounded-xl font-medium shadow-sm border border-[#d4e4ed] hover:shadow-lg hover:shadow-slate-300/50 hover:border-[#2c5f8d] hover:from-[#d4e4ed] hover:to-[#d4e4ed] transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
