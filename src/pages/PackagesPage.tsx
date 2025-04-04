
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PackagesGrid from "../components/PackagesGrid";
import { packagesData, filterPackages } from "../data/packagesData";
import { PackageProps } from "../components/PackageCard";
import PackageSearch from "../components/PackageSearch";

const PackagesPage = () => {
  const [searchParams] = useSearchParams();
  const [filteredPackages, setFilteredPackages] = useState<PackageProps[]>(packagesData);
  
  useEffect(() => {
    const destination = searchParams.get("destination");
    
    if (destination) {
      // Filter packages based on destination
      const filtered = packagesData.filter(pkg => 
        pkg.destinations.includes(destination)
      );
      setFilteredPackages(filtered);
    } else {
      setFilteredPackages(packagesData);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="sticky top-0 z-40 bg-white shadow-md">
        <PackageSearch />
      </div>
      
      <section className="py-8 px-4 bg-gray-50 flex-1">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Sacred <span className="text-deep-blue">Journeys</span>
          </h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
            Find the perfect spiritual journey that resonates with your soul and embark on a 
            transformative experience through Nepal's sacred sites.
          </p>
          
          <div className="mt-8 mb-8">
            <h2 className="text-xl font-medium">
              {filteredPackages.length} {filteredPackages.length === 1 ? 'package' : 'packages'} found
              {searchParams.get("destination") && ` in ${searchParams.get("destination")}`}
            </h2>
          </div>
          
          {filteredPackages.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold mb-4">No packages found</h3>
              <p className="text-gray-600 mb-8">
                We couldn't find any packages matching your search criteria. 
                Please try a different search or browse all our packages.
              </p>
              <button 
                onClick={() => setFilteredPackages(packagesData)}
                className="bg-deep-blue text-white px-6 py-3 rounded-full"
              >
                View All Packages
              </button>
            </div>
          ) : (
            <PackagesGrid packages={filteredPackages} />
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PackagesPage;
