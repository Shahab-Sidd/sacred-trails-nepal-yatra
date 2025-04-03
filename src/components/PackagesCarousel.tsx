
import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PackageProps } from './PackageCard';
import { useNavigate } from 'react-router-dom';

interface PackagesCarouselProps {
  packages: PackageProps[];
}

const PackagesCarousel = ({ packages }: PackagesCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();
  
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === packages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => {
      resetTimeout();
    };
  }, [currentIndex, packages.length]);
  
  const goToPackage = (id: number) => {
    navigate(`/package/${id}`);
  };
  
  const nextSlide = useCallback(() => {
    resetTimeout();
    setCurrentIndex((prevIndex) => 
      prevIndex === packages.length - 1 ? 0 : prevIndex + 1
    );
  }, [packages.length]);
  
  const prevSlide = useCallback(() => {
    resetTimeout();
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? packages.length - 1 : prevIndex - 1
    );
  }, [packages.length]);

  if (packages.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-xl">
      {/* Carousel controls */}
      <button 
        className="absolute top-1/2 left-4 z-10 bg-white/80 p-2 rounded-full transform -translate-y-1/2 hover:bg-white transition-colors"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6 text-deep-blue" />
      </button>
      
      <button 
        className="absolute top-1/2 right-4 z-10 bg-white/80 p-2 rounded-full transform -translate-y-1/2 hover:bg-white transition-colors"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6 text-deep-blue" />
      </button>
      
      {/* Carousel slides */}
      <div className="relative h-full">
        {packages.map((pkg, index) => (
          <div
            key={pkg.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 
              ${currentIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <img 
              src={pkg.image} 
              alt={pkg.title}
              className="w-full h-full object-cover"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
              <p className="mb-4 text-white/80">{pkg.duration} | {pkg.destinations.join(' → ')}</p>
              
              <button 
                className="bg-secondary text-black px-6 py-2 rounded-full font-medium hover:bg-opacity-90"
                onClick={() => goToPackage(pkg.id)}
              >
                View Package
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-4 right-6 flex space-x-2 z-10">
        {packages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              resetTimeout();
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PackagesCarousel;
