import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap } from 'lucide-react';
import resumeData from '../data/resumeData.json';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 px-6 bg-gradient-to-b from-[#d4e4ed] to-[#e8f1f5]" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#d4e4ed] text-[#4a5568] rounded-full text-sm font-semibold mb-6 hover:bg-[#d4e4ed] hover:scale-105 transition-all duration-300 cursor-default">
            Education
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a202c] hover:text-[#2c5f8d] transition-colors duration-300">Academic Background</h2>
        </motion.div>

        <div className="space-y-8">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-300/50 border border-[#d4e4ed] hover:shadow-2xl hover:shadow-slate-300/60 hover:-translate-y-2 hover:border-[#2c5f8d] transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#2c5f8d] to-[#4a7ba7] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <GraduationCap className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#1a202c] mb-2 group-hover:text-[#2c5f8d] transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-xl text-[#4a5568] font-semibold mb-2 group-hover:text-[#2c5f8d] transition-colors duration-300">
                      {edu.institution}
                    </p>
                    <p className="text-[#2d3748] mb-4">{edu.location} • {edu.endDate}</p>

                    {edu.highlights && edu.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {edu.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-gradient-to-r from-[#e8f1f5] to-[#d4e4ed] text-[#1a202c] rounded-lg text-sm font-medium hover:from-[#d4e4ed] hover:to-[#d4e4ed] hover:scale-105 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
