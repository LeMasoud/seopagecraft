
import { useState, useEffect } from 'react';
import { Menu, X, ChevronUp } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
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
      
      // Show scroll-to-top when scrolled down
      setShowScrollTop(window.scrollY > 300);
      
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
    setIsMobileMenuOpen(false);
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Desktop Navigation - Visible only on desktop */}
      {!isMobile && (
        <header 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
              ? 'bg-white shadow-md py-2' 
              : 'bg-transparent py-4'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <a 
                href="#home" 
                className="flex items-center space-x-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
              >
                <span className="text-2xl font-bold text-seo-darkBlue">SEO<span className="text-seo-blue">mad</span></span>
              </a>

              {/* Desktop Nav Links */}
              <nav className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`nav-link ${activeSection === link.section ? 'text-seo-blue after:scale-x-100' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.section);
                    }}
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="#contact"
                  className="btn btn-primary rounded-full"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                >
                  Get Free Consultation
                </a>
              </nav>
            </div>
          </div>
        </header>
      )}

      {/* Mobile Navigation - Fixed at bottom, always visible on mobile */}
      {isMobile && (
        <>
          {/* Mobile Menu Expanded Content */}
          {isMobileMenuOpen && (
            <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-seo-lightGray p-4 shadow-lg z-40 animate-slide-up">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-lg py-2 px-4 rounded-md transition-colors ${
                      activeSection === link.section 
                        ? 'bg-seo-blue/10 text-seo-blue' 
                        : 'text-seo-darkGray hover:bg-seo-lightGray'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.section);
                    }}
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="#contact"
                  className="btn btn-primary rounded-md text-center py-3"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          )}

          {/* Mobile Fixed Bottom Navigation Bar */}
          <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-seo-lightGray shadow-lg z-50">
            <div className="flex justify-around items-center h-16">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`flex flex-col items-center justify-center px-2 py-1 ${
                    activeSection === link.section ? 'text-seo-blue' : 'text-seo-darkGray'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.section);
                  }}
                >
                  <span className="text-xs font-medium">{link.name}</span>
                </a>
              ))}
              <button
                className="flex flex-col items-center justify-center px-2 py-1 text-seo-darkGray"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? 
                  <><X size={18} /><span className="text-xs font-medium">Close</span></> : 
                  <><Menu size={18} /><span className="text-xs font-medium">Menu</span></>
                }
              </button>
            </div>
          </nav>
        </>
      )}

      {/* Scroll to Top Button - Adjust position based on device */}
      <button 
        className={`fixed right-6 ${isMobile ? 'bottom-20' : 'bottom-6'} bg-seo-blue text-white rounded-full p-2 shadow-lg z-40 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>
    </>
  );
};

export default NavBar;
