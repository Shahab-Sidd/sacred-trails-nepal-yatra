
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Packages from "../components/Packages";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
// import CommandSearch from "../components/CommandSearch";
import PackageSearch from "@/components/PackageSearch";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="relative">
        <Hero />
        <div className="absolute left-0 right-0 bottom-0 transform translate-y-1/2">
          <PackageSearch />
        </div>
      </div>
      <div className="pt-16"> {/* Add padding to account for the search bar */}
        <Packages />
        <AboutUs />
        <Contact />
        <Footer />
        <FloatingContact />
      </div>
    </div>
  );
};

export default Index;
