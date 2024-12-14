import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import CompanyOverview from "./components/CompanyOverview";
import Solutions from "./components/Solutions";
import Products from "./components/Products";
import IndustrySolutions from "./components/IndustrySolutions";
import Sustainability from "./components/Sustainability";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <Hero />
      <CompanyOverview />
      <Solutions />
      <Products />
      <IndustrySolutions />
      <AboutUs />
      <Sustainability />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
