
import { useState } from "react";
import { Phone } from "lucide-react";

export interface PackageProps {
  id: number;
  title: string;
  image: string;
  duration: string;
  destinations: string[];
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
}

const PackageCard = ({
  title,
  image,
  duration,
  destinations,
  highlights,
  inclusions,
  exclusions
}: PackageProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="package-card flex flex-col h-full">
      <div className="relative h-60">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-saffron text-white px-3 py-1 rounded-full text-sm font-medium">
          {duration}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-deep-blue">{title}</h3>
        
        <div className="mb-3">
          <div className="text-sm text-gray-600 mb-1">Destinations:</div>
          <div className="flex flex-wrap gap-1">
            {destinations.map((dest, index) => (
              <span 
                key={index} 
                className="bg-light-gray px-2 py-0.5 rounded-full text-sm"
              >
                {dest}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-3">
          <div className="text-sm text-gray-600 mb-1">Highlights:</div>
          <ul className="list-disc list-inside text-sm space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
        
        <button 
          className="text-deep-blue underline text-sm mt-2 mb-4 self-start"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Hide details" : "View inclusions/exclusions"}
        </button>
        
        {isExpanded && (
          <div className="mt-2 mb-4 animate-fade-in">
            <div className="mb-3">
              <div className="text-sm font-medium">Inclusions:</div>
              <ul className="list-disc list-inside text-sm">
                {inclusions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="text-sm font-medium">Exclusions:</div>
              <ul className="list-disc list-inside text-sm">
                {exclusions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        <div className="mt-auto pt-4">
          <a href="tel:+918429962424" className="w-full bg-saffron text-white py-3 rounded-lg flex items-center justify-center">
            <Phone size={18} className="mr-2" />
            <span>Call for Price & Booking</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
