
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { extractUniqueDestinations } from "../data/packagesData";

const PackageSearch = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState(2);
  
  const navigate = useNavigate();
  const destinations = extractUniqueDestinations();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const searchParams = new URLSearchParams();
    if (destination) searchParams.set("destination", destination);
    if (date) searchParams.set("date", date);
    if (travelers) searchParams.set("travelers", travelers.toString());
    
    navigate(`/packages?${searchParams.toString()}`);
  };

  return (
    <div className="mx-auto max-w-4xl bg-white rounded-full shadow-lg p-2 md:p-3 mb-8">
      <form 
        className={`flex flex-col md:flex-row items-stretch transition-all duration-300 ${isExpanded ? "gap-4" : ""}`}
        onSubmit={handleSearch}
      >
        <div 
          className="flex items-center flex-1 border-b md:border-b-0 md:border-r p-3 cursor-pointer"
          onClick={() => setIsExpanded(true)}
        >
          <MapPin className="text-deep-blue mr-2 h-5 w-5" />
          <div className="flex-1">
            <label className="block text-xs font-medium text-neutral">Destination</label>
            <select
              className="w-full focus:outline-none text-gray-700 bg-transparent"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="">Select destination</option>
              {destinations.map((dest) => (
                <option key={dest} value={dest}>{dest}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div 
          className={`flex items-center flex-1 border-b md:border-b-0 md:border-r p-3 cursor-pointer ${!isExpanded ? "hidden md:flex" : ""}`}
          onClick={() => setIsExpanded(true)}
        >
          <Calendar className="text-deep-blue mr-2 h-5 w-5" />
          <div className="flex-1">
            <label className="block text-xs font-medium text-neutral">Date</label>
            <input 
              type="date" 
              className="w-full focus:outline-none text-gray-700 bg-transparent"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        
        <div 
          className={`flex items-center flex-1 p-3 cursor-pointer ${!isExpanded ? "hidden md:flex" : ""}`}
          onClick={() => setIsExpanded(true)}
        >
          <Users className="text-deep-blue mr-2 h-5 w-5" />
          <div className="flex-1">
            <label className="block text-xs font-medium text-neutral">Travelers</label>
            <select
              className="w-full focus:outline-none text-gray-700 bg-transparent"
              value={travelers}
              onChange={(e) => setTravelers(parseInt(e.target.value))}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'traveler' : 'travelers'}</option>
              ))}
            </select>
          </div>
        </div>
        
        <button 
          type="submit"
          className={`bg-deep-blue text-white p-3 rounded-full flex items-center justify-center transition-all duration-300 ${isExpanded ? "mt-2 md:mt-0 md:ml-2" : "ml-auto"}`}
        >
          <Search className="h-5 w-5" />
          {isExpanded && <span className="ml-2 font-medium">Search</span>}
        </button>
      </form>
    </div>
  );
};

export default PackageSearch;
