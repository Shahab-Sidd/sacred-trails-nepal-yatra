import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { packagesData } from "../data/packagesData";
import { PackageProps } from "../components/PackageCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft, Calendar, Clock, MapPin, Phone, Users } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import PackageMap from "../components/PackageMap";
import DayWiseItinerary from "../components/DayWiseItinerary";

const PackageDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [packageData, setPackageData] = useState<PackageProps | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (id) {
      const pkg = packagesData.find(p => p.id === parseInt(id));
      setPackageData(pkg || null);
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-deep-blue"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!packageData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <h2 className="text-2xl font-bold mb-4">Package Not Found</h2>
          <p className="mb-8">The package you're looking for doesn't exist or has been removed.</p>
          <button 
            onClick={() => navigate('/packages')} 
            className="bg-deep-blue text-white px-6 py-3 rounded-full flex items-center"
          >
            <ArrowLeft className="mr-2" size={18} />
            Back to all packages
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const getDestinationImages = (destinations: string[]) => {
    const imageMap: Record<string, string> = {
      'Kathmandu': "https://images.unsplash.com/photo-1558799625-5ca4d941b5f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      'Pokhara': "https://images.unsplash.com/photo-1554586916-7d702d6529ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      'Muktinath': "https://images.unsplash.com/photo-1561361058-c24abbaf669c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      'Lumbini': "https://images.unsplash.com/photo-1625371291802-56960726cf27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      'Jomsom': "https://images.unsplash.com/photo-1509710366487-3f9980ef6089?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      'Pashupatinath': "https://images.unsplash.com/photo-1566466477907-34f79b07b00a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      'Janakpur': "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    };
    
    const destinationImages = destinations.map(dest => 
      imageMap[dest] || "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    );
    
    const galleryImages = [packageData?.image || ""];
    
    destinationImages.forEach(img => {
      if (!galleryImages.includes(img)) {
        galleryImages.push(img);
      }
    });
    
    const fallbackImages = [
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1535622380377-92b1fc687a6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ];
    
    let i = 0;
    while (galleryImages.length < 4 && i < fallbackImages.length) {
      if (!galleryImages.includes(fallbackImages[i])) {
        galleryImages.push(fallbackImages[i]);
      }
      i++;
    }
    
    return galleryImages;
  };

  const galleryImages = getDestinationImages(packageData.destinations);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-deep-blue mb-6 hover:underline"
        >
          <ArrowLeft size={18} className="mr-2" /> Back to packages
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
              {packageData.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-700">
              <div className="flex items-center">
                <Clock size={16} className="mr-2 text-deep-blue" />
                {packageData.duration}
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-deep-blue" />
                {packageData.destinations.join(' → ')}
              </div>
            </div>
            
            <div className="mb-8">
              <Carousel className="w-full">
                <CarouselContent>
                  {galleryImages.map((img, index) => (
                    <CarouselItem key={index}>
                      <div className="h-[400px] overflow-hidden rounded-xl">
                        <img 
                          src={img} 
                          alt={`${packageData.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
                          }}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-deep-blue">Description</h2>
              <p className="text-gray-700 mb-4">
                Experience the divine journey through Nepal's sacred sites with our carefully 
                crafted {packageData.duration} itinerary. This spiritual pilgrimage takes you 
                through {packageData.destinations.join(', ')}, allowing you to immerse 
                yourself in the rich cultural and spiritual heritage of the Himalayas.
              </p>
              <p className="text-gray-700">
                Our experienced guides will ensure a seamless experience as you explore ancient 
                temples, participate in traditional rituals, and witness breathtaking Himalayan 
                landscapes. This journey promises not just spiritual enrichment but also a deep 
                connection with the natural beauty and cultural traditions of Nepal.
              </p>
            </div>
            
            <PackageMap destinations={packageData.destinations} />
            
            {packageData.itinerary && 
              <DayWiseItinerary itinerary={packageData.itinerary} />
            }
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-deep-blue">Package Highlights</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {packageData.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                    <div className="rounded-full bg-secondary/20 p-2 mr-3 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    </div>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-deep-blue">Inclusions</h2>
                <ul className="space-y-2">
                  {packageData.inclusions.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="text-green-500 mr-2">✓</div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-deep-blue">Exclusions</h2>
                <ul className="space-y-2">
                  {packageData.exclusions.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="text-red-500 mr-2">✕</div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-xl sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-deep-blue">Book this Package</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Calendar className="text-deep-blue mr-3 h-5 w-5" />
                  <div>
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-medium">{packageData.duration}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="text-deep-blue mr-3 h-5 w-5" />
                  <div>
                    <div className="text-sm text-gray-500">Destinations</div>
                    <div className="font-medium">{packageData.destinations.join(', ')}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Users className="text-deep-blue mr-3 h-5 w-5" />
                  <div>
                    <div className="text-sm text-gray-500">Group Size</div>
                    <div className="font-medium">2-15 people</div>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="text-sm text-gray-500 mb-1">Starting from</div>
                <div className="text-2xl font-bold text-deep-blue">Contact for price</div>
                <div className="text-xs text-gray-500">*Price varies based on group size and season</div>
              </div>
              
              <a
                href="tel:+918429962424"
                className="w-full bg-deep-blue text-white py-3 rounded-lg flex items-center justify-center mb-3"
              >
                <Phone size={18} className="mr-2" />
                Call for Booking
              </a>
              
              <a
                href="#contact"
                className="w-full bg-secondary text-black py-3 rounded-lg flex items-center justify-center"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PackageDetail;
