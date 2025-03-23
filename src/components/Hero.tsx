
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      window.scrollTo({
        top: servicesSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-32 h-32 md:w-72 md:h-72 rounded-full bg-seo-blue/10 blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 md:w-80 md:h-80 rounded-full bg-seo-lightBlue/10 blur-3xl"></div>
      </div>

      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pre-title */}
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-seo-blue/10 text-seo-blue text-sm font-medium animate-fade-in">
            Innovative SEO Solutions
          </div>
          
          {/* Main Title */}
          <h1 className="font-bold text-seo-darkBlue mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="block">Data-Driven SEO Strategies</span>
            <span className="block text-seo-blue">for Sustainable Growth</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-seo-darkGray/80 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Unlock your website's full potential with our expert SEO services. 
            We help businesses improve visibility, drive qualified traffic, and achieve measurable results.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a 
              href="#contact" 
              className="btn btn-primary rounded-full text-base sm:text-lg px-6 py-3 sm:py-4"
            >
              Get a Free Consultation
            </a>
            <button 
              onClick={scrollToServices}
              className="btn btn-outline rounded-full text-base sm:text-lg px-6 py-3 sm:py-4"
            >
              Explore Our Services
            </button>
          </div>
          
          {/* Scroll Down Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-subtle hidden md:block">
            <button 
              onClick={scrollToServices}
              aria-label="Scroll down to services"
              className="text-seo-blue hover:text-seo-darkBlue transition-colors"
            >
              <ArrowDown size={28} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
