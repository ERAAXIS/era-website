import Header from "../../components/Landing Page/Header";
import Footer from "../../components/Landing Page/Footer";
import Home from "../../components/industrial/Home";
import Solutions from "../../components/industrial/Solutions";
import Benefits from "../../components/industrial/Benefits";
import WhyChooseUs from "../../components/industrial/WhyChooseUs";
import GetStarted from "../../components/industrial/GetStarted";
import { Helmet } from "react-helmet";

const IndustrialPage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Helmet>
        <title>ERA AXIS Industrial</title>
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Home />
        <Solutions />
        <Benefits />
        <WhyChooseUs />
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
};

export default IndustrialPage;
