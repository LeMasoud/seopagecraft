
import { Check } from 'lucide-react';

const About = () => {
  const values = [
    {
      value: 'Data-Driven Approach',
      description: 'We base our strategies on comprehensive analytics and industry insights'
    },
    {
      value: 'Transparency',
      description: 'Clear communication and honest reporting on all aspects of your campaigns'
    },
    {
      value: 'Customized Strategy',
      description: 'Tailored solutions designed for your specific business goals and industry'
    },
    {
      value: 'Long-Term Results',
      description: 'Focus on sustainable growth rather than short-term tactics'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* About Content */}
          <div className="animate-on-scroll">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-seo-blue/10 text-seo-blue text-sm font-medium">
              About SEOmad
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-seo-darkBlue mb-6">
              Passionate About Driving Organic Growth
            </h2>
            <div className="space-y-6 text-seo-darkGray/80">
              <p className="text-lg">
                SEOmad is a team of dedicated SEO professionals passionate about helping businesses thrive online. We blend proven strategies with cutting-edge techniques, prioritizing transparency, communication, and long-term client partnerships.
              </p>
              <p>
                Our team stays at the forefront of search engine algorithms and digital marketing trends to ensure your business maintains a competitive edge. We don't just apply generic tactics - we develop customized strategies aligned with your unique business objectives.
              </p>
              <p>
                What sets us apart is our commitment to measurable results. We focus on metrics that matter to your business, providing clear reports that demonstrate the real impact of our SEO efforts on your bottom line.
              </p>
            </div>
          </div>

          {/* Company Values */}
          <div className="glass-card rounded-2xl overflow-hidden animate-on-scroll">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-seo-darkBlue mb-8">Our Core Values</h3>
              <div className="space-y-6">
                {values.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-seo-blue/10 flex items-center justify-center text-seo-blue">
                      <Check size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-seo-darkBlue mb-1">{item.value}</h4>
                      <p className="text-seo-darkGray/80">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
