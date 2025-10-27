import { motion } from 'framer-motion';
import { Mail, Linkedin, ChevronDown } from 'lucide-react';
import resumeData from '../data/resumeData.json';

const Hero = () => {
  const { name, tagline, email, linkedin } = resumeData.personalInfo;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e8f1f5] via-white to-[#d4e4ed]"></div>

      {/* Subtle animated circles */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#d4e4ed] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#d4e4ed] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Profile Image - Clean with subtle animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 group"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2c5f8d] to-[#4a7ba7] rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            <img
              src="/sreedevi-profile.jpeg"
              alt="Sreedevi Kalla"
              className="relative w-44 h-44 rounded-full object-cover object-[center_20%] mx-auto shadow-xl border-4 border-white group-hover:border-[#d4e4ed] group-hover:scale-105 transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 tracking-tight"
        >
          {name}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 mb-3 font-medium"
        >
          {tagline}
        </motion.p>

        {/* One-liner */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto"
        >
          Transforming healthcare data into actionable insights
        </motion.p>

        {/* Buttons with better styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 justify-center items-center flex-wrap"
        >
          <a
            href={`mailto:${email}`}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2c5f8d] to-[#4a7ba7] text-white rounded-xl font-semibold shadow-lg shadow-slate-300/30 hover:shadow-xl hover:shadow-slate-300/50 hover:-translate-y-1 hover:scale-105 transition-all duration-300"
          >
            <Mail className="w-5 h-5 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
            Get in Touch
          </a>

          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1a202c] rounded-xl font-semibold border-2 border-[#d4e4ed] hover:border-[#2c5f8d] hover:text-[#2c5f8d] hover:-translate-y-1 hover:scale-105 shadow-md hover:shadow-lg hover:shadow-slate-300 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            LinkedIn
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20"
        >
          <a
            href="#about"
            className="inline-flex flex-col items-center text-gray-400 hover:text-[#2c5f8d] transition-colors group"
          >
            <span className="text-sm mb-2 font-medium">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
