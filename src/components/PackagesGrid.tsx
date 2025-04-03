
import PackageCard, { PackageProps } from "./PackageCard";

interface PackagesGridProps {
  packages: PackageProps[];
}

const PackagesGrid = ({ packages }: PackagesGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {packages.map((pkg) => (
        <PackageCard key={pkg.id} {...pkg} />
      ))}
    </div>
  );
};

export default PackagesGrid;
