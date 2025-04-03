
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Packages from "../components/Packages";
import AboutUs from "../components/AboutUs";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Packages />
      <AboutUs />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Index;
