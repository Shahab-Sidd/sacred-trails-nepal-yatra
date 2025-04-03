
import { PackageProps } from "../components/PackageCard";

export const packagesData: PackageProps[] = [
  {
    id: 1,
    title: "5-Day Sacred Trail: Kathmandu → Pokhara → Muktinath",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
    image: "https://images.unsplash.com/photo-1542359649-31e03cd4d909?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
    image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
    image: "https://images.unsplash.com/photo-1544015759-1e25b35148bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
    image: "https://images.unsplash.com/photo-1516690553959-71a414d6b9b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
    image: "https://images.unsplash.com/photo-1534800891164-a1d96b5114e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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

// Helper functions for filters
export const extractUniqueDestinations = () => {
  return Array.from(
    new Set(packagesData.flatMap(pkg => pkg.destinations))
  );
};

export const getDurationOptions = () => {
  return [
    "4-5 Days",
    "6-7 Days",
    "8+ Days"
  ];
};

export const filterPackages = (activeFilter: string) => {
  return packagesData.filter(pkg => {
    if (activeFilter === "all") return true;
    
    const durationOptions = getDurationOptions();
    if (durationOptions.includes(activeFilter)) {
      const days = parseInt(pkg.duration);
      if (activeFilter === "4-5 Days") return days >= 4 && days <= 5;
      if (activeFilter === "6-7 Days") return days >= 6 && days <= 7;
      if (activeFilter === "8+ Days") return days >= 8;
      return false;
    }
    
    return pkg.destinations.includes(activeFilter);
  });
};
