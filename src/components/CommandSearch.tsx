
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { extractUniqueDestinations } from "../data/packagesData";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Command, CommandInput, CommandList, CommandGroup, CommandItem } from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const CommandSearch = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("destination");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState<number>(2);
  const [scrolled, setScrolled] = useState(false);
  
  const navigate = useNavigate();
  const destinations = extractUniqueDestinations();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = () => {
    const searchParams = new URLSearchParams();
    if (destination) searchParams.set("destination", destination);
    if (date) searchParams.set("date", date);
    if (travelers) searchParams.set("travelers", travelers.toString());
    
    navigate(`/packages?${searchParams.toString()}`);
    setOpen(false);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "destination":
        return (
          <CommandGroup heading="Popular destinations">
            {destinations.map((dest) => (
              <CommandItem
                key={dest}
                value={dest}
                onSelect={(value) => {
                  setDestination(value);
                  setActiveTab("date");
                }}
              >
                <MapPin className="mr-2 h-4 w-4 text-deep-blue" />
                {dest}
              </CommandItem>
            ))}
          </CommandGroup>
        );
      case "date":
        return (
          <div className="p-4">
            <label className="block text-sm font-medium mb-2">Select date</label>
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full mb-4"
            />
            <div className="flex justify-between">
              <button
                type="button"
                className="text-deep-blue font-medium"
                onClick={() => setActiveTab("destination")}
              >
                Back
              </button>
              <button
                type="button"
                className="bg-deep-blue text-white px-4 py-2 rounded-full"
                onClick={() => setActiveTab("travelers")}
              >
                Next
              </button>
            </div>
          </div>
        );
      case "travelers":
        return (
          <div className="p-4">
            <label className="block text-sm font-medium mb-2">Number of travelers</label>
            <div className="flex items-center justify-between mb-4">
              <button
                type="button"
                className="p-2 border rounded-full"
                onClick={() => setTravelers(Math.max(1, travelers - 1))}
              >
                -
              </button>
              <span className="text-lg font-medium">{travelers}</span>
              <button
                type="button"
                className="p-2 border rounded-full"
                onClick={() => setTravelers(travelers + 1)}
              >
                +
              </button>
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                className="text-deep-blue font-medium"
                onClick={() => setActiveTab("date")}
              >
                Back
              </button>
              <button
                type="button"
                className="bg-deep-blue text-white px-4 py-2 rounded-full"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={cn(
      "w-full px-4 max-w-4xl mx-auto z-40", 
      scrolled ? "sticky top-0 bg-white shadow-md py-3" : "py-6"
    )}>
      <div className="relative">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <div className="w-full bg-white rounded-full border shadow-md hover:shadow-lg transition-all cursor-pointer">
              <div className="flex items-center h-16 px-2">
                <div className="flex-1 p-3 border-r text-left">
                  <div className="text-xs font-bold">Destination</div>
                  <div className="text-sm text-gray-700 truncate">
                    {destination || 'Where are you going?'}
                  </div>
                </div>
                
                <div className="flex-1 p-3 border-r text-left">
                  <div className="text-xs font-bold">Date</div>
                  <div className="text-sm text-gray-700">
                    {date || 'When?'}
                  </div>
                </div>
                
                <div className="flex-1 p-3 text-left">
                  <div className="text-xs font-bold">Travelers</div>
                  <div className="text-sm text-gray-700">
                    {travelers} {travelers === 1 ? 'traveler' : 'travelers'}
                  </div>
                </div>
                
                <div className="ml-2 mr-2">
                  <Button 
                    type="button" 
                    variant="secondary" 
                    size="icon" 
                    className="h-12 w-12 rounded-full bg-deep-blue"
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent align="center" className="p-0 w-[400px] max-h-[450px] overflow-hidden">
            <Command className="rounded-lg border">
              <CommandInput 
                placeholder="Search destinations..." 
                value={activeTab === "destination" ? destination : ""}
                onValueChange={activeTab === "destination" ? setDestination : undefined}
              />
              <CommandList>
                {renderTabContent()}
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default CommandSearch;
