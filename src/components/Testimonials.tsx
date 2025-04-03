
const testimonials = [
  {
    name: "Priya Sharma",
    location: "Delhi, India",
    quote: "The team handled everything with care—from puja arrangements to comfortable stays. Truly a blessed yatra!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Rajesh Patel",
    location: "Mumbai, India",
    quote: "Our family pilgrimage to Muktinath was made so comfortable and meaningful thanks to HolyNepalYatra. Will recommend to everyone!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Sunita Mishra",
    location: "Lucknow, India",
    quote: "As a senior citizen, I was worried about the journey, but they took such good care of me. The helicopter ride to Muktinath was incredible!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 px-4 bg-deep-blue text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Pilgrim <span className="text-gold">Testimonials</span>
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-12 text-white/80">
          Don't just take our word for it. Hear from pilgrims who have 
          experienced life-changing journeys with HolyNepalYatra.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-white/70">{testimonial.location}</p>
                </div>
              </div>
              <div className="relative">
                <svg 
                  className="absolute -top-4 -left-2 w-8 h-8 text-gold/30" 
                  fill="currentColor" 
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative text-white/90 italic">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xl font-playfair mb-6">
            Join hundreds of satisfied pilgrims who have experienced the divine with us.
          </p>
          <a href="tel:+918429962424" className="inline-block bg-gold text-deep-blue px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors">
            Book Your Yatra Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
