
import { Calendar } from "lucide-react";

interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
}

interface DayWiseItineraryProps {
  itinerary: ItineraryDay[];
}

const DayWiseItinerary = ({ itinerary }: DayWiseItineraryProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-deep-blue">
        Day-wise Itinerary
      </h2>
      <div className="space-y-6">
        {itinerary.map((day, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 p-4 flex items-center border-b border-gray-200">
              <div className="bg-deep-blue text-white rounded-full h-10 w-10 flex items-center justify-center mr-4">
                <span className="font-bold">{day.day}</span>
              </div>
              <h3 className="text-lg font-bold">{day.title}</h3>
            </div>
            
            <div className="p-4">
              <p className="text-gray-700 mb-4">{day.description}</p>
              
              <div className="space-y-2">
                <div className="font-medium text-deep-blue flex items-center">
                  <Calendar size={16} className="mr-2" />
                  Today's Activities
                </div>
                <ul className="list-disc pl-6 space-y-1">
                  {day.activities.map((activity, idx) => (
                    <li key={idx} className="text-gray-700">{activity}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayWiseItinerary;
