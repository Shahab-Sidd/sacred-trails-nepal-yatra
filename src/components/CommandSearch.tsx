
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { extractUniqueDestinations } from "../data/packagesData";
import { Command, CommandInput, CommandList, CommandGroup, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
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
      "sticky transition-all duration-300 z-40 w-full px-4",
      scrolled ? "top-0 bg-white shadow-md py-3" : "top-16 py-6"
    )}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            className="w-full bg-white rounded-full border shadow-md hover:shadow-lg transition-all px-6 py-3 text-left flex items-center"
          >
            <Search className="h-5 w-5 text-deep-blue mr-2" />
            <span className="text-gray-500">
              {destination 
                ? `${destination}${date ? ` · ${date}` : ""}${travelers ? ` · ${travelers} travelers` : ""}`
                : "Where are you going?"}
            </span>
          </button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-[400px] max-h-[450px] overflow-hidden">
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
  );
};

export default CommandSearch;
