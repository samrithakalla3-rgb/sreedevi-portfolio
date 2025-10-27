import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-gradient-to-br from-gray-50 to-blue-50/30 border-t border-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <p className="text-gray-600 font-medium hover:text-blue-600 transition-colors duration-300">
            © {currentYear} Sreedevi Kalla. All rights reserved.
          </p>
        </div>
        <div className="flex items-center justify-center gap-1.5 text-sm text-gray-500">
          <span>Built with</span>
          <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
          <span className="hover:text-blue-600 transition-colors duration-300">and React</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
