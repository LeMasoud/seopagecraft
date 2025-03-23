
import { useState } from 'react';
import { Mail, Phone, Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset submission message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-seo-gray">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-seo-blue/10 text-seo-blue text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-seo-darkBlue mb-6">
            Ready to elevate your SEO?
          </h2>
          <p className="text-lg text-seo-darkGray/80">
            Contact us for a free consultation and discover how our data-driven strategies can help your business achieve sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-3 animate-on-scroll">
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-seo-darkBlue mb-6">Send us a message</h3>
                
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6 animate-scale-in">
                    <p className="font-medium">Thank you for your message!</p>
                    <p className="text-sm mt-1">We'll get back to you as soon as possible.</p>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-seo-darkGray mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-seo-lightGray focus:border-seo-blue focus:ring-2 focus:ring-seo-blue/20 outline-none transition-all"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-seo-darkGray mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-seo-lightGray focus:border-seo-blue focus:ring-2 focus:ring-seo-blue/20 outline-none transition-all"
                        placeholder="Enter your email"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-seo-darkGray mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-seo-lightGray focus:border-seo-blue focus:ring-2 focus:ring-seo-blue/20 outline-none transition-all resize-none"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn btn-primary rounded-lg py-3 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={20} className="mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="lg:col-span-2 animate-on-scroll">
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-seo-darkBlue mb-6">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-seo-blue/10 flex items-center justify-center text-seo-blue">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-seo-darkBlue mb-1">Email Us</h4>
                      <a href="mailto:info@seomad.com" className="text-seo-blue hover:underline transition-all">
                        info@seomad.com
                      </a>
                      <p className="text-sm text-seo-darkGray/70 mt-1">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-seo-blue/10 flex items-center justify-center text-seo-blue">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-seo-darkBlue mb-1">Call Us</h4>
                      <a href="tel:+1234567890" className="text-seo-blue hover:underline transition-all">
                        +1 (234) 567-890
                      </a>
                      <p className="text-sm text-seo-darkGray/70 mt-1">
                        Mon-Fri from 9am to 6pm
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-8 border-t border-seo-lightGray">
                    <h4 className="text-lg font-semibold text-seo-darkBlue mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      {['twitter', 'facebook', 'linkedin', 'instagram'].map((social) => (
                        <a
                          key={social}
                          href={`#${social}`}
                          className="w-10 h-10 rounded-full bg-seo-blue/10 flex items-center justify-center text-seo-blue hover:bg-seo-blue hover:text-white transition-all"
                          aria-label={`Follow us on ${social}`}
                        >
                          <span className="sr-only">{social}</span>
                          <i className={`icon-${social}`}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
