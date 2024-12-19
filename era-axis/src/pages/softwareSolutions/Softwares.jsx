import { Helmet } from "react-helmet";
import Header from "../../components/Landing Page/Header";
import Footer from "../../components/Landing Page/Footer";
import HeroSection from "../../components/software/HeroSection";
import OurServices from "../../components/software/OurServices";
import BottomSection from "../../components/software/BottomSection";

const Softwares = () => {
  return (
    <main className="bg-black text-white">
      <Helmet>
        <title>Software Solutions</title>
      </Helmet>
      <Header />
      <HeroSection />
      <OurServices />
      <BottomSection />
      <Footer />
    </main>
  );
};

export default Softwares;
