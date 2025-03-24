
import { useEffect } from 'react';
import ServiceCard from './ServiceCard';
import { Search, Laptop, Globe, FileText, MapPin, ShoppingCart, Bot, Mic, BarChart, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Technical SEO',
      icon: <Laptop size={24} />,
      description: `Optimize your website's technical foundation to improve crawling, indexing, and ranking.`,
      features: [
        'Website structure optimization',
        'Site speed enhancements',
        'Mobile responsiveness',
        'Schema markup implementation',
        'HTTP status code corrections',
        'XML sitemap optimization'
      ]
    },
    {
      title: 'On-Page Optimization',
      icon: <Search size={24} />,
      description: 'Enhance your web pages to rank higher and earn more relevant traffic.',
      features: [
        'Keyword research and implementation',
        'Meta title & description optimization',
        'Header tag optimization',
        'Internal linking structure',
        'Content optimization',
        'Image optimization'
      ]
    },
    {
      title: 'Off-Page Optimization',
      icon: <Globe size={24} />,
      description: `Build your website's authority and reputation through external factors.`,
      features: [
        'Quality backlink acquisition',
        'Digital PR strategies',
        'Brand mention monitoring',
        'Social media signals',
        'Guest posting opportunities',
        'Industry-specific directory listings'
      ]
    },
    {
      title: 'Content Strategy & Creation',
      icon: <FileText size={24} />,
      description: 'Develop engaging, search-optimized content that resonates with your audience.',
      features: [
        'Content gap analysis',
        'Keyword-driven content planning',
        'Blog and article writing',
        'Landing page optimization',
        'Content refreshes and updates',
        'Competitor content analysis'
      ]
    },
    {
      title: 'Local SEO',
      icon: <MapPin size={24} />,
      description: 'Improve visibility for location-based searches and attract local customers.',
      features: [
        'Google Business Profile optimization',
        'Local citation building',
        'Location-specific keyword targeting',
        'Review management strategies',
        'Local link building',
        'Local schema implementation'
      ]
    },
    {
      title: 'E-commerce SEO',
      icon: <ShoppingCart size={24} />,
      description: 'Specialized optimization for online stores to increase product visibility and sales.',
      features: [
        'Product page optimization',
        'Category page structure',
        'Enhanced product schema',
        'Customer review optimization',
        'Conversion rate optimization',
        'Shopping feed optimization'
      ]
    },
    {
      title: 'LLM Search Optimization',
      icon: <Bot size={24} />,
      description: 'Adapt your SEO strategy for AI-driven search and large language models.',
      features: [
        'AI-first content strategy',
        'Context-aware optimization',
        'Semantic search enhancements',
        'Featured snippet optimization',
        'Natural language query targeting',
        'Generative AI compatibility'
      ]
    },
    {
      title: 'Voice Search Optimization',
      icon: <Mic size={24} />,
      description: 'Optimize for the growing trend of voice-activated searches and assistants.',
      features: [
        'Conversational keyword targeting',
        'Question-based content creation',
        'Local voice search optimization',
        'Voice-friendly structured data',
        'Mobile optimization for voice search',
        'Voice search user intent analysis'
      ]
    },
    {
      title: 'Analytics & Reporting',
      icon: <BarChart size={24} />,
      description: 'Track, analyze, and report on your SEO performance with clear, actionable insights.',
      features: [
        'Custom dashboard setup',
        'Goal tracking implementation',
        'Traffic analysis',
        'Conversion tracking',
        'Competitive benchmarking',
        'Monthly performance reports'
      ]
    },
    {
      title: 'Speed Optimization',
      icon: <Zap size={24} />,
      description: 'Enhance user experience and SEO performance through faster page loading.',
      features: [
        'Core Web Vitals optimization',
        'Server response time improvement',
        'Image and asset optimization',
        'Code minification',
        'Browser caching implementation',
        'Third-party script management'
      ]
    }
  ];

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section id="services" className="py-20 md:py-28 bg-seo-gray dark:bg-seo-darkBlue">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-seo-blue/10 text-seo-blue dark:bg-seo-blue/20 text-sm font-medium">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-seo-darkBlue mb-6">
            Comprehensive SEO Services
          </h2>
          <p className="text-lg text-seo-darkGray/80">
            We offer a full range of search engine optimization services to boost your online presence and drive sustainable organic growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
              features={service.features}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
