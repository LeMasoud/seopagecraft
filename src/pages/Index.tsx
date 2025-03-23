
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';

const Index = () => {
  // Initialize animation observers once the page loads
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Observe all elements with the animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

    // Cleanup observer on component unmount
    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      
      <footer className="bg-white dark:bg-seo-darkBlue py-8 border-t border-seo-lightGray dark:border-seo-darkGray">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold text-seo-darkBlue dark:text-white">SEO<span className="text-seo-blue dark:text-seo-lightBlue">mad</span></span>
            </div>
            <div className="text-seo-darkGray/70 dark:text-seo-lightGray/70 text-sm">
              © {new Date().getFullYear()} SEOmad. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
