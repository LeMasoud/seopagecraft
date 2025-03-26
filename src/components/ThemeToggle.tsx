
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const isMobile = useIsMobile();

  useEffect(() => {
    // Check for system preference on initial load
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }

    // Get theme from localStorage if available
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button 
      className={`fixed ${isMobile ? 'bottom-20' : 'bottom-6'} right-6 p-3 rounded-full shadow-lg z-40 transition-all duration-300 outline-offset-2 focus:outline-2 focus:outline-ring ${className} ${
        theme === 'dark' ? 'bg-primary' : 'bg-seo-darkBlue'
      }`}
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? (
        <Moon size={24} className="text-white" />
      ) : (
        <Sun size={24} className="text-white" />
      )}
    </button>
  );
};

export default ThemeToggle;
