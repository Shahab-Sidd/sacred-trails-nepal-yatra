
import { Phone } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="text-saffron">HolyNepalYatra</span>?
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-saffron/10 p-3 rounded-full mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-saffron">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">20+ Years of Experience</h3>
                  <p className="text-gray-600">
                    Since 2002, we've been crafting spiritual journeys for pilgrims from India and around the world. Our deep experience ensures a seamless journey.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-saffron/10 p-3 rounded-full mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-saffron">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
                  <p className="text-gray-600">
                    Our team includes local Nepali guides who understand the spiritual significance of each site and can facilitate meaningful experiences.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-saffron/10 p-3 rounded-full mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-saffron">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personalized Care</h3>
                  <p className="text-gray-600">
                    We understand that pilgrimage is a deeply personal journey. Our services are tailored to accommodate your specific spiritual needs and preferences.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-saffron/10 p-3 rounded-full mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-saffron">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
                  <p className="text-gray-600">
                    No hidden fees or unexpected costs. We believe in complete transparency when it comes to the financial aspects of your spiritual journey.
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="tel:+918429962424" className="btn-primary flex items-center justify-center w-fit">
                  <Phone size={18} className="mr-2" />
                  <span>Contact Us Today</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1533130061792-64b345e4a833?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" 
                alt="Pashupatinath Temple in Kathmandu" 
                className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80";
                }}
              />
              <img 
                src="https://images.unsplash.com/photo-1535622380377-92b1fc687a6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" 
                alt="Prayer flags in Himalayan mountains" 
                className="w-full h-40 md:h-48 object-cover rounded-lg shadow-md"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1509710366487-3f9980ef6089?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80";
                }}
              />
            </div>
            <div className="space-y-4 mt-6">
              <img 
                src="https://images.unsplash.com/photo-1516690553959-71a414d6b9b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" 
                alt="Traditional Nepali shrine" 
                className="w-full h-40 md:h-48 object-cover rounded-lg shadow-md"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80";
                }}
              />
              <img 
                src="https://images.unsplash.com/photo-1542359649-31e03cd4d909?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" 
                alt="Stupa in Nepal" 
                className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1561361058-c24abbaf669c?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
