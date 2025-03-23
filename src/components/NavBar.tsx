
import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import ThemeToggle from './ThemeToggle';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isMobile = useIsMobile();

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '#home', section: 'home' },
    { name: 'Services', href: '#services', section: 'services' },
    { name: 'About', href: '#about', section: 'about' },
    { name: 'Contact', href: '#contact', section: 'contact' },
  ];

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - (isMobile ? 20 : 80),
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Desktop Navigation - Visible only on desktop */}
      {!isMobile && (
        <DesktopNav 
          navLinks={navLinks} 
          activeSection={activeSection} 
          scrollToSection={scrollToSection} 
          isScrolled={isScrolled} 
        />
      )}

      {/* Mobile Navigation - Fixed at bottom, always visible on mobile */}
      {isMobile && (
        <MobileNav 
          navLinks={navLinks} 
          activeSection={activeSection} 
          scrollToSection={scrollToSection} 
        />
      )}

      {/* Theme Toggle Button */}
      <ThemeToggle />
    </>
  );
};

export default NavBar;
