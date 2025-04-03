
import { useState } from "react";
import FilterButton from "./FilterButton";
import { extractUniqueDestinations, getDurationOptions } from "../data/packagesData";

interface PackageFiltersProps {
  onFilterChange: (filter: string) => void;
  activeFilter: string;
}

const PackageFilters = ({ activeFilter, onFilterChange }: PackageFiltersProps) => {
  const allDestinations = extractUniqueDestinations();
  const durationOptions = getDurationOptions();

  return (
    <div className="overflow-x-auto mb-8">
      <div className="flex space-x-2 min-w-max pb-2">
        <FilterButton 
          label="All Packages" 
          active={activeFilter === "all"}
          onClick={() => onFilterChange("all")}
        />
        {durationOptions.map(duration => (
          <FilterButton
            key={duration}
            label={duration}
            active={activeFilter === duration}
            onClick={() => onFilterChange(duration)}
          />
        ))}
        {allDestinations.map(destination => (
          <FilterButton
            key={destination}
            label={destination}
            active={activeFilter === destination}
            onClick={() => onFilterChange(destination)}
          />
        ))}
      </div>
    </div>
  );
};

export default PackageFilters;
