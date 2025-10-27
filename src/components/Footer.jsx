import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-gradient-to-br from-[#d4e4ed] to-[#d4e4ed]/30 border-t border-[#d4e4ed]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <p className="text-[#2d3748] font-medium hover:text-[#2c5f8d] transition-colors duration-300">
            © {currentYear} Sreedevi Kalla. All rights reserved.
          </p>
        </div>
        <div className="flex items-center justify-center gap-1.5 text-sm text-[#2d3748]">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-[#2c5f8d] fill-[#2c5f8d] animate-pulse" />
          <span className="hover:text-[#2c5f8d] transition-colors duration-300">by Sreedevi</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
