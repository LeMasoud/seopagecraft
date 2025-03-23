
import React from 'react';

interface NavLink {
  name: string;
  href: string;
  section: string;
}

interface DesktopNavProps {
  navLinks: NavLink[];
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  isScrolled: boolean;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ 
  navLinks, 
  activeSection, 
  scrollToSection, 
  isScrolled 
}) => {
  return (
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
  );
};

export default DesktopNav;
