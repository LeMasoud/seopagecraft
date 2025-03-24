
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
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-seo-darkBlue border-t border-seo-lightGray dark:border-seo-darkGray shadow-lg z-50">
      <div className="flex justify-around items-center h-16">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`flex items-center justify-center min-h-[44px] min-w-[44px] px-3 py-2 rounded-md focus:outline-2 focus:outline-offset-2 focus:outline-seo-blue transition-colors ${
              activeSection === link.section 
                ? 'text-seo-blue dark:text-seo-lightBlue font-medium' 
                : 'text-seo-darkGray dark:text-[#EAEAEA] hover:text-seo-blue dark:hover:text-seo-lightBlue'
            }`}
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
