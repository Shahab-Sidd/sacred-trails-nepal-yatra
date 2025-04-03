
import { useState } from "react";
import PackageCard, { PackageProps } from "./PackageCard";

const packagesData: PackageProps[] = [
  {
    id: 1,
    title: "5-Day Sacred Trail: Kathmandu → Pokhara → Muktinath",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    duration: "5 Days",
    destinations: ["Kathmandu", "Pokhara", "Muktinath"],
    highlights: [
      "Pashupatinath Darshan",
      "Helicopter to Muktinath",
      "Pokhara Sightseeing"
    ],
    inclusions: [
      "4 nights accommodation",
      "Airport transfers",
      "Daily breakfast",
      "Helicopter ride",
      "English speaking guide"
    ],
    exclusions: [
      "Personal expenses",
      "Tips for guides",
      "Travel insurance",
      "International flights"
    ]
  },
  {
    id: 2,
    title: "7-Day Complete Nepal Pilgrimage",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    duration: "7 Days",
    destinations: ["Kathmandu", "Pokhara", "Lumbini", "Muktinath"],
    highlights: [
      "Lumbini Buddha Birthplace",
      "Swayambhunath Stupa Visit",
      "Muktinath Temple"
    ],
    inclusions: [
      "6 nights accommodation",
      "Airport transfers",
      "Daily breakfast and dinner",
      "All ground transportation",
      "Professional guide"
    ],
    exclusions: [
      "Lunch expenses",
      "Tips for guides and drivers",
      "Travel insurance",
      "International flights"
    ]
  },
  {
    id: 3,
    title: "4-Day Kathmandu Valley Sacred Tour",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    duration: "4 Days",
    destinations: ["Kathmandu", "Bhaktapur", "Patan"],
    highlights: [
      "Pashupatinath Evening Aarti",
      "Bhaktapur Durbar Square",
      "Boudhanath Stupa"
    ],
    inclusions: [
      "3 nights accommodation",
      "Airport transfers",
      "Daily breakfast",
      "Sightseeing tours",
      "Local guide"
    ],
    exclusions: [
      "Personal expenses",
      "Camera fees at monuments",
      "Travel insurance",
      "International flights"
    ]
  },
  {
    id: 4,
    title: "9-Day Grand Nepal Spiritual Journey",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    duration: "9 Days",
    destinations: ["Kathmandu", "Pokhara", "Lumbini", "Muktinath", "Chitwan"],
    highlights: [
      "Jungle Safari at Chitwan",
      "Muktinath Temple Visit",
      "Phewa Lake Boat Ride"
    ],
    inclusions: [
      "8 nights accommodation",
      "All meals included",
      "Private transportation",
      "Experienced guide",
      "All entrance fees"
    ],
    exclusions: [
      "Alcoholic beverages",
      "Tips for staff",
      "Travel insurance",
      "International flights"
    ]
  },
  {
    id: 5,
    title: "6-Day Muktinath Helicopter Darshan",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    duration: "6 Days",
    destinations: ["Kathmandu", "Pokhara", "Muktinath", "Jomsom"],
    highlights: [
      "Helicopter ride to Muktinath",
      "Special puja arrangement",
      "Kagbeni Village visit"
    ],
    inclusions: [
      "5 nights luxury accommodation",
      "Helicopter transfers",
      "VIP darshan arrangements",
      "All meals included",
      "Personal guide"
    ],
    exclusions: [
      "Personal expenses",
      "Tipping",
      "Travel insurance",
      "International flights"
    ]
  },
  {
    id: 6,
    title: "8-Day Nepal Family Pilgrimage",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    duration: "8 Days",
    destinations: ["Kathmandu", "Nagarkot", "Pokhara", "Muktinath"],
    highlights: [
      "Sunrise view from Nagarkot",
      "Family-friendly activities",
      "Mountain view rooms"
    ],
    inclusions: [
      "7 nights family rooms",
      "All transfers",
      "Daily breakfast and dinner",
      "Kid-friendly guide",
      "All entrance fees"
    ],
    exclusions: [
      "Lunch expenses",
      "Personal shopping",
      "Travel insurance",
      "International flights"
    ]
  }
];

const FilterButton = ({ 
  label, 
  active, 
  onClick 
}: { 
  label: string; 
  active: boolean; 
  onClick: () => void;
}) => (
  <button
    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
      active 
        ? "bg-deep-blue text-white" 
        : "bg-gray-100 hover:bg-gray-200 text-gray-800"
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);

const Packages = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  // Extract unique destinations and durations for filters
  const allDestinations = Array.from(
    new Set(packagesData.flatMap(pkg => pkg.destinations))
  );
  
  const durationOptions = [
    "4-5 Days",
    "6-7 Days",
    "8+ Days"
  ];
  
  const filteredPackages = packagesData.filter(pkg => {
    if (activeFilter === "all") return true;
    if (durationOptions.includes(activeFilter)) {
      const days = parseInt(pkg.duration);
      if (activeFilter === "4-5 Days") return days >= 4 && days <= 5;
      if (activeFilter === "6-7 Days") return days >= 6 && days <= 7;
      if (activeFilter === "8+ Days") return days >= 8;
      return false;
    }
    return pkg.destinations.includes(activeFilter);
  });

  return (
    <section id="packages" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Sacred <span className="text-saffron">Journeys</span>
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          Discover our carefully crafted pilgrimage packages designed to provide an authentic 
          spiritual experience while ensuring comfort and peace of mind.
        </p>
        
        <div className="overflow-x-auto mb-8">
          <div className="flex space-x-2 min-w-max pb-2">
            <FilterButton 
              label="All Packages" 
              active={activeFilter === "all"}
              onClick={() => setActiveFilter("all")}
            />
            {durationOptions.map(duration => (
              <FilterButton
                key={duration}
                label={duration}
                active={activeFilter === duration}
                onClick={() => setActiveFilter(duration)}
              />
            ))}
            {allDestinations.map(destination => (
              <FilterButton
                key={destination}
                label={destination}
                active={activeFilter === destination}
                onClick={() => setActiveFilter(destination)}
              />
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
