import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Plans from "./sections/Plans";
import Properties from "./sections/Properties";
import Amenities from "./sections/Amenities";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
        <Header />
        <Hero/>
        <About />
        <Plans />
        <Properties />
        <Amenities />
        <Clients />
        <Contact />
        <Footer />
    </>
  );
};

export default App;
