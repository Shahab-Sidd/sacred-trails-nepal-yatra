
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      title: "Discover Sacred Nepal",
      description: "Journey to the Abode of the Divine – Let Us Guide You."
    },
    {
      image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      title: "Spiritual Journeys",
      description: "Custom Pilgrimages Crafted with Devotion Since 2002."
    },
    {
      image: "https://images.unsplash.com/photo-1542359649-31e03cd4d909?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      title: "Sacred Memories",
      description: "Experience the Blessings of Muktinath and Beyond."
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="hero-overlay"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mb-8 animate-fade-in animate-delay-100">
              {slide.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-200">
              <a href="#packages" className="btn-primary">
                View Packages
              </a>
              <a href="tel:+918429962424" className="btn-secondary">
                Call for Booking
              </a>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            } transition-colors duration-200`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
