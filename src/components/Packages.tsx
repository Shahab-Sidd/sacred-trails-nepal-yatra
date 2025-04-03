
import { useState } from "react";
import PackageFilters from "./PackageFilters";
import PackagesGrid from "./PackagesGrid";
import { filterPackages } from "../data/packagesData";

const Packages = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const filteredPackages = filterPackages(activeFilter);

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
        
        <PackageFilters 
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        
        <PackagesGrid packages={filteredPackages} />
      </div>
    </section>
  );
};

export default Packages;
