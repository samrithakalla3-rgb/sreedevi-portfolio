import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, CheckCircle } from 'lucide-react';
import resumeData from '../data/resumeData.json';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-6 hover:bg-blue-100 hover:scale-105 transition-all duration-300 cursor-default">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">Professional Journey</h2>
        </motion.div>

        <div className="space-y-8">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-8 md:p-10 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:shadow-blue-100/60 hover:-translate-y-2 hover:border-blue-200 transition-all duration-300">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                      <Briefcase className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-blue-600 font-semibold mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 font-medium">
                      {exp.location} • {exp.startDate} - {exp.endDate}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item hover:bg-blue-50/50 p-2 -ml-2 rounded-lg transition-colors duration-200">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200" />
                      <p className="text-gray-700 leading-relaxed">
                        {resp}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
