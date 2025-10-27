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
    <section id="skills" className="py-24 px-6 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-6 hover:bg-blue-100 hover:scale-105 transition-all duration-300 cursor-default">
            Skills & Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">Technical Skills</h2>
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
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center shadow-md group-hover/category:scale-110 group-hover/category:rotate-3 transition-all duration-300">
                  <Zap className="w-5 h-5 text-white group-hover/category:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover/category:text-blue-600 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileHover={{ scale: 1.08, y: -4 }}
                    className="px-5 py-2.5 bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 rounded-xl font-medium shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-blue-100/50 hover:border-blue-300 hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 cursor-default"
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
