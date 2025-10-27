import { useEffect } from 'react';

const MainLayout = ({ children }) => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {children}
    </div>
  );
};

export default MainLayout;
