
import { ReactNode } from "react";

interface FilterButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const FilterButton = ({ 
  label, 
  active, 
  onClick 
}: FilterButtonProps) => (
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

export default FilterButton;
