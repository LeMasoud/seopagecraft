
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  icon, 
  description, 
  features, 
  delay 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className="service-card opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="text-seo-blue">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-seo-darkBlue">{title}</h3>
        </div>
        <button
          onClick={toggleExpand}
          className="text-seo-blue hover:text-seo-darkBlue transition-colors"
          aria-expanded={isExpanded}
          aria-label={isExpanded ? "Collapse details" : "Expand details"}
        >
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
      
      <p className="mt-3 text-seo-darkGray/80">
        {description}
      </p>
      
      <div 
        className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="space-y-2 pl-5">
          {features.map((feature, index) => (
            <li key={index} className="list-disc text-seo-darkGray/80">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
