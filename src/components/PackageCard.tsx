
import { useState } from "react";
import { Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
  id,
  title,
  image,
  duration,
  destinations,
  highlights,
  inclusions,
  exclusions
}: PackageProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/package/${id}`);
  };

  return (
    <div className="package-card flex flex-col h-full">
      <div className="relative h-60 cursor-pointer" onClick={handleViewDetails}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-secondary text-black px-3 py-1 rounded-full text-sm font-medium">
          {duration}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 
          className="text-xl font-bold mb-2 text-deep-blue cursor-pointer hover:text-secondary transition-colors"
          onClick={handleViewDetails}
        >
          {title}
        </h3>
        
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
            {highlights.slice(0, 2).map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
            {highlights.length > 2 && (
              <li className="text-deep-blue cursor-pointer" onClick={handleViewDetails}>
                +{highlights.length - 2} more highlights
              </li>
            )}
          </ul>
        </div>
        
        <div className="mt-auto pt-4 flex gap-2">
          <button
            onClick={handleViewDetails}
            className="flex-1 bg-deep-blue text-white py-3 rounded-lg flex items-center justify-center"
          >
            View Details
          </button>
          <a 
            href="tel:+918429962424" 
            className="bg-secondary text-black py-3 rounded-lg flex items-center justify-center px-4"
          >
            <Phone size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
