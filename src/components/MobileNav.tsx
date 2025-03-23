
import React from 'react';

interface NavLink {
  name: string;
  href: string;
  section: string;
}

interface MobileNavProps {
  navLinks: NavLink[];
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ navLinks, activeSection, scrollToSection }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-seo-lightGray shadow-lg z-50">
      <div className="flex justify-around items-center h-16">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`flex items-center justify-center px-2 py-1 ${
              activeSection === link.section 
                ? 'text-seo-blue font-medium' 
                : 'text-seo-darkGray'
            } transition-colors`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(link.section);
            }}
          >
            <span className="text-sm">{link.name}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
