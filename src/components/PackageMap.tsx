
import { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

interface PackageMapProps {
  destinations: string[];
}

const PackageMap = ({ destinations }: PackageMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // For demonstration, we're using a static map approach
    const loadMap = async () => {
      if (!mapRef.current) return;
      
      // This is a placeholder. In a real app, this would be replaced with actual map integration
      const mapContainer = mapRef.current;
      mapContainer.innerHTML = '';
      
      // Create a simple representation of Nepal with destination pins
      const mapDiv = document.createElement('div');
      mapDiv.className = 'relative h-full w-full bg-gray-100 rounded-lg overflow-hidden';
      
      // Add Nepal outline background (using a reliable image)
      const bgImg = document.createElement('img');
      bgImg.src = 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
      bgImg.className = 'w-full h-full object-cover opacity-30';
      bgImg.onerror = () => {
        // Fallback if the image fails to load
        bgImg.src = 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
      };
      mapDiv.appendChild(bgImg);
      
      // Predefined coordinates for common destinations in Nepal (for demonstration)
      const destinationCoords: Record<string, { top: string; left: string }> = {
        'Kathmandu': { top: '45%', left: '55%' },
        'Pokhara': { top: '40%', left: '35%' },
        'Lumbini': { top: '65%', left: '30%' },
        'Muktinath': { top: '25%', left: '25%' },
        'Chitwan': { top: '70%', left: '45%' },
        'Nagarkot': { top: '40%', left: '60%' },
        'Bhaktapur': { top: '47%', left: '58%' },
        'Patan': { top: '48%', left: '54%' },
        'Jomsom': { top: '20%', left: '25%' },
        'Pashupatinath': { top: '46%', left: '56%' },
        'Janakpur': { top: '60%', left: '65%' }
      };
      
      // Add pins for each destination
      destinations.forEach(dest => {
        if (destinationCoords[dest]) {
          const pinDiv = document.createElement('div');
          pinDiv.className = 'absolute flex flex-col items-center';
          pinDiv.style.top = destinationCoords[dest].top;
          pinDiv.style.left = destinationCoords[dest].left;
          
          const pinIcon = document.createElement('div');
          pinIcon.className = 'text-deep-blue animate-bounce';
          pinIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>`;
          
          const pinLabel = document.createElement('span');
          pinLabel.className = 'text-xs font-bold bg-white/80 px-2 py-1 rounded-full shadow-sm mt-1';
          pinLabel.textContent = dest;
          
          pinDiv.appendChild(pinIcon);
          pinDiv.appendChild(pinLabel);
          mapDiv.appendChild(pinDiv);
        }
      });
      
      mapContainer.appendChild(mapDiv);
    };
    
    loadMap();
  }, [destinations]);
  
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-deep-blue">Destinations Map</h2>
      <div 
        ref={mapRef} 
        className="h-[300px] rounded-xl border border-gray-200 overflow-hidden"
      >
        <div className="h-full w-full flex items-center justify-center">
          <div className="flex flex-col items-center text-gray-400">
            <MapPin className="animate-bounce" size={32} />
            <p>Loading destinations map...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageMap;
