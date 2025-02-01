import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Plans from "./sections/Plans";
import Gallery from "./sections/Gallery";
import Amenities from "./sections/Amenities";
import Specifications from "./sections/Specifications";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
        <Header />
        <Hero/>
        <About />
        <Plans />
        <Gallery />
        <Amenities />
        <Specifications />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  );
};

export default App;
