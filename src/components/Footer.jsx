import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-gradient-to-br from-[#FFF9FF] to-[#F3E8FF]/30 border-t border-[#E6E6FA]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <p className="text-[#6B5B6E] font-medium hover:text-[#9370DB] transition-colors duration-300">
            © {currentYear} Sreedevi Kalla. All rights reserved.
          </p>
        </div>
        <div className="flex items-center justify-center gap-1.5 text-sm text-[#6B5B6E]">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-[#C39BD3] fill-[#C39BD3] animate-pulse" />
          <span className="hover:text-[#9370DB] transition-colors duration-300">by Sreedevi</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
