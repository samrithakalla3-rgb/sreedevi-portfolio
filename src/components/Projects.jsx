import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket } from 'lucide-react';
import resumeData from '../data/resumeData.json';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-[#FFF9FF] to-[#F9F7FE]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#F3E8FF] text-[#9370DB] rounded-full text-sm font-semibold mb-6 hover:bg-[#E6E6FA] hover:scale-105 transition-all duration-300 cursor-default">
            Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#4A4458] mb-4 hover:text-[#9370DB] transition-colors duration-300">Featured Work</h2>
          <p className="text-xl text-[#6B5B6E]">Healthcare ML & Data Analytics Projects</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full bg-white rounded-2xl p-8 shadow-lg shadow-purple-200/50 border border-[#E6E6FA] hover:shadow-2xl hover:shadow-purple-200/60 hover:-translate-y-3 hover:border-[#C39BD3] hover:scale-105 transition-all duration-300">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#9370DB] to-[#C39BD3] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Rocket className="w-6 h-6 text-white group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300" />
                  </div>
                </div>

                {/* Badge */}
                <span className="inline-block px-3 py-1.5 bg-[#F3E8FF] text-[#9370DB] rounded-lg text-sm font-semibold mb-4 group-hover:bg-[#E6E6FA] group-hover:scale-105 transition-all duration-200">
                  {project.type}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#4A4458] mb-3 group-hover:text-[#9370DB] transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[#6B5B6E] mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#F9F7FE] text-[#4A4458] rounded-lg text-xs font-medium hover:bg-[#E6E6FA] hover:text-[#9370DB] hover:scale-105 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 text-[#6B5B6E] text-xs font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
