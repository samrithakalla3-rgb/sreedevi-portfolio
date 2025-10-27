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
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-[#F9F7FE] to-[#FFF9FF]" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#F3E8FF] text-[#9370DB] rounded-full text-sm font-semibold mb-6 hover:bg-[#E6E6FA] hover:scale-105 transition-all duration-300 cursor-default">
            Skills & Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#4A4458] hover:text-[#9370DB] transition-colors duration-300">Technical Skills</h2>
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
                <div className="w-10 h-10 bg-gradient-to-br from-[#9370DB] to-[#C39BD3] rounded-lg flex items-center justify-center shadow-md group-hover/category:scale-110 group-hover/category:rotate-3 transition-all duration-300">
                  <Zap className="w-5 h-5 text-white group-hover/category:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#4A4458] group-hover/category:text-[#9370DB] transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileHover={{ scale: 1.08, y: -4 }}
                    className="px-5 py-2.5 bg-gradient-to-br from-[#F9F7FE] to-[#F3E8FF] text-[#4A4458] rounded-xl font-medium shadow-sm border border-[#E6E6FA] hover:shadow-lg hover:shadow-purple-200/50 hover:border-[#C39BD3] hover:from-[#E6E6FA] hover:to-[#D8BFD8] transition-all duration-200 cursor-default"
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
