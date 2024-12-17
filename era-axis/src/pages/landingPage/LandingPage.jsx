import Header from "../../components/Landing Page/Header";
import Hero from "../../components/Landing Page/Hero";
import AboutUs from "../../components/Landing Page/AboutUs";
import CompanyOverview from "../../components/Landing Page/CompanyOverview";
import Solutions from "../../components/Landing Page/Solutions";
import Products from "../../components/Landing Page/Products";
import IndustrySolutions from "../../components/Landing Page/IndustrySolutions";
import Sustainability from "../../components/Landing Page/Sustainability";
import Contact from "../../components/Landing Page/Contact";
import Footer from "../../components/Landing Page/Footer";
import { Helmet } from "react-helmet";

const LandingPage = () => {
  return (
    <div className="bg-black text-white">
      <Helmet>
        <title>Welcome to ERA AXIS</title>
      </Helmet>
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
};

export default LandingPage;
